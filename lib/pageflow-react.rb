require 'pageflow/react/engine'

module Pageflow
  module React
    def self.create_page_type(name, component_name)
      Pageflow::React::PageType.new(name, component_name)
    end

    def self.create_widget_type(name, role, component_name)
      Pageflow::React::WidgetType.new(name, role, component_name)
    end

    def self.parent_page_box_widget_type
      create_widget_type('parent_page_box',
                         'parent_page_box',
                         'pageflow.react.widgets.ParentPageBox')
    end
  end
end
