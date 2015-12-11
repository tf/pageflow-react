module Pageflow
  module React
    class ExecJSRenderer
      def initialize(store, options = {})
        Rails.logger.info("--- COMPILE ")
        js_code = options[:code] || raise("Pass `code:` option to instantiate a JS context!")
        js_code << "var store = #{store};"

        t = Time.now
        @context = ExecJS.compile(GLOBAL_WRAPPER + js_code)

        Rails.logger.info("--- COMPILE!! (#{Time.now - t})")
      end

      def render(page_id, prerender_options)
        @result ||= render_all(prerender_options)
        @result[page_id].html_safe
      end

      def render_all(prerender_options)
        Rails.logger.info("--- RENDER ALL 2")

        render_function = prerender_options.fetch(:render_function, "renderToString")
        js_code = <<-JS
          (function () {
            var d = new Date();
            #{before_render}

            var result = store.pages.reduce(function(result, page) {
              if (page.template === 'timeline_page') {
                result[page.perma_id] = ReactDOMServer.#{render_function}(React.createElement(pageflow.timelinePage.Page, {pageId: page.perma_id, resolverSeed: store}));
              }
              return result;
            }, {});

            #{after_render}
            return {r: result, t: new Date() - d};
          })()
        JS
        t = Time.now
        r = @context.eval(js_code)
        Rails.logger.info("--- EVAL (#{Time.now - t}) #{r['t']}}")
r['r']
      rescue ExecJS::ProgramError => err
        raise React::ServerRendering::PrerenderError.new(component_name, props, err)
      end

      # Hooks for inserting JS before/after rendering
      def before_render; ""; end
      def after_render; ""; end

      # Handle Node.js & other ExecJS contexts
      GLOBAL_WRAPPER = <<-JS
        var global = global || this;
        var self = self || this;
        var window = window || this;
      JS
    end
  end
end
