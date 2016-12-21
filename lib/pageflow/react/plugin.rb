module Pageflow
  module React
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.page_types.register(plain_page_type)
        config.page_types.register(video_page_type)
        config.page_types.register(audio_page_type)
      end

      private

      def plain_page_type
        Pageflow::React.create_page_type('background_image',
                                         file_types: [
                                           BuiltInFileType.image,
                                           BuiltInFileType.video
                                         ])
      end

      def video_page_type
        Pageflow::React.create_page_type('video',
                                         file_types: [
                                           BuiltInFileType.image,
                                           BuiltInFileType.video
                                         ])
      end

      def audio_page_type
        Pageflow::React.create_page_type('audio',
                                         file_types: [
                                           BuiltInFileType.audio,
                                           BuiltInFileType.image,
                                           BuiltInFileType.video
                                         ])
      end
    end
  end
end
