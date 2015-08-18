module Pageflow
  module React
    class PageType < Pageflow::PageType
      attr_reader :name, :component_name

      def initialize(name, component_name)
        @name = name
        @component_name = component_name
      end

      def template_path
        'pageflow/react/page'
      end
    end
  end
end
