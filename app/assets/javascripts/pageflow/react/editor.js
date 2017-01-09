
pageflow.ConfigurationEditorView.register('background_image', {
  configure: function() {
    this.tab('general', function() {
      this.group('general');
    });

    this.tab('files', function() {
      this.group('background');

      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false
      });
    });

    this.tab('options', function() {
      this.group('options');
    });
  }
});

pageflow.ConfigurationEditorView.register('video', {
  configure: function() {
    this.tab('general', function() {
      this.group('general');

      this.input('additional_title', pageflow.TextInputView);
      this.input('additional_description', pageflow.TextAreaInputView, {size: 'short'});
    });

    this.tab('files', function() {
      this.input('video_file_id', pageflow.FileInputView, {
        collection: pageflow.videoFiles,
        positioning: false,
        defaultTextTrackFilePropertyName: 'default_text_track_file_id'
      });
      this.input('poster_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false,
      });
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false
      });
    });

    this.tab('options', function() {
      this.input('autoplay', pageflow.CheckBoxInputView);

      if (pageflow.features.isEnabled('auto_change_page')) {
        this.input('auto_change_page_on_ended', pageflow.CheckBoxInputView);
      }

      this.group('options', {canPauseAtmo: true});
    });
  }
});

pageflow.ConfigurationEditorView.register('audio', {
  configure: function() {
    this.tab('general', function() {
      this.group('general');

      this.input('additional_title', pageflow.TextInputView);
      this.input('additional_description', pageflow.TextAreaInputView, {size: 'short'});
    });

    this.tab('files', function() {
      this.input('audio_file_id', pageflow.FileInputView, {collection: pageflow.audioFiles});
      this.group('background');
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false
      });
    });

    this.tab('options', function() {
      this.input('autoplay', pageflow.CheckBoxInputView);
      this.group('options', {canPauseAtmo: true});
    });
  }
});
