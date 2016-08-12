module Pageflow
  module React
    class PageType < Pageflow::PageType
      attr_reader :name, :component_name

      def initialize(name, component_name, options)
        @name = name
        @component_name = component_name
        @thumbnail_candidates = options[:thumbnail_candidates]
      end

      def template_path
        'pageflow/react/page'
      end

      def thumbnail_candidates
        @thumbnail_candidates || super
      end
    end
  end
end
