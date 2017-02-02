module Pageflow
  module React
    class WidgetType < Pageflow::WidgetType
      attr_reader :name, :role, :component_name

      def initialize(name, role, component_name)
        @name = name
        @role = role
        @component_name = component_name
      end

      def roles
        [role]
      end

      def render(template, _)
        template.render(File.join('pageflow', 'react', 'widget'),
                        name: name,
                        role: role)
      end
    end
  end
end
