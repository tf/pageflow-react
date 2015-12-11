module Pageflow
  module React
    class SprocketsRenderer < Pageflow::React::ExecJSRenderer
      def initialize(store, options={})
        @replay_console = options.fetch(:replay_console, true)
        filenames = options.fetch(:files, ["react-server.js", "components.js"])
        js_code = CONSOLE_POLYFILL.dup

        t = Time.now
        filenames.each do |filename|
          js_code << ::Rails.application.assets[filename].to_s
        end
        Rails.logger.info("--- SPROCKETS (#{Time.now - t})")

        if !store.is_a?(String)
          t = Time.now
          store = store.to_json
          Rails.logger.info("--- TO_JSON (#{Time.now - t})")
        end

        super(store, options.merge(code: js_code))
      end

      def render(page_id, prerender_options = {})
        # pass prerender: :static to use renderToStaticMarkup
        react_render_method = if prerender_options == :static
                                "renderToStaticMarkup"
                              else
                                "renderToString"
                              end

        super(page_id, {render_function: react_render_method})
      end

      def after_render
        @replay_console ? CONSOLE_REPLAY : ""
      end

      # Reimplement console methods for replaying on the client
      CONSOLE_POLYFILL = <<-JS
        var console = { history: [] };
        ['error', 'log', 'info', 'warn'].forEach(function (fn) {
          console[fn] = function () {
            console.history.push({level: fn, arguments: Array.prototype.slice.call(arguments)});
          };
        });
      JS

      # Replay message from console history
      CONSOLE_REPLAY = <<-JS
        (function (history) {
          if (history && history.length > 0) {
            result += '\\n<scr'+'ipt>';
            history.forEach(function (msg) {
              result += '\\nconsole.' + msg.level + '.apply(console, ' + JSON.stringify(msg.arguments) + ');';
            });
            result += '\\n</scr'+'ipt>';
          }
        })(console.history);
      JS
    end
  end
end
