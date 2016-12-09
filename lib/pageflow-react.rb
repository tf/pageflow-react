require 'pageflow/react/engine'

module Pageflow
  module React
    def self.create_page_type(name,
                              options_or_legacy_component_name = {},
                              _legacy_options = nil)

      if options_or_legacy_component_name.is_a?(String)
        raise('Passing a component name to ' \
              'Pageflow::React.create_page_type is no longer supported.')
      end

      options = options_or_legacy_component_name

      Pageflow::React::PageType.new(name, options)
    end

    def self.create_widget_type(name, role, legacy_component_name = nil)
      if legacy_component_name
        raise('Passing a component name to ' \
              'Pageflow::React.create_widget_type is no longer supported.')
      end

      Pageflow::React::WidgetType.new(name, role)
    end
  end
end
