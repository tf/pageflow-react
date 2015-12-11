require 'pageflow/react/engine'

module Pageflow
  module React
    def self.create_page_type(name, component_name)
      Pageflow::React::PageType.new(name, component_name)
    end

    def self.create_widget_type(name, role, component_name)
      Pageflow::React::WidgetType.new(name, role, component_name)
    end
  end
end
