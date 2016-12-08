pageflow.ConfigurationEditorView.register('plain', {
  configure: function() {
    this.tab('general', function() {
      this.group('general');
    });

    this.tab('files', function() {
      this.input('video_file_id', pageflow.FileInputView, {collection: pageflow.videoFiles});
      this.input('poster_image_id', pageflow.FileInputView, {collection: pageflow.imageFiles});
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false
      });
      this.input('mobile_poster_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false
      });
    });

    this.tab('options', function() {
      this.group('options');
    });
  }
});

pageflow.ConfigurationEditorView.register('new_video', {
  configure: function() {
    this.tab('general', function() {
      this.group('general');

      this.input('additional_title', pageflow.TextInputView);
      this.input('additional_description', pageflow.TextAreaInputView, {size: 'short'});
    });

    this.tab('files', function() {
      this.input('video_file_id', pageflow.FileInputView, {
        collection: pageflow.videoFiles,
        positioning: false
      });
      this.input('poster_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false
      });
      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        positioning: false
      });
      this.input('mobile_poster_image_id', pageflow.FileInputView, {
        collection: pageflow.imageFiles,
        imagePositioning: false
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

pageflow.ConfigurationEditorView.register('new_audio', {
  configure: function() {
    this.tab('general', function() {
      this.group('general');

      this.input('additional_title', pageflow.TextInputView);
      this.input('additional_description', pageflow.TextAreaInputView, {size: 'short'});
    });

    this.tab('files', function() {
      this.input('audio_file_id', pageflow.FileInputView, {collection: pageflow.audioFiles});
      this.input('background_image_id', pageflow.FileInputView, {collection: pageflow.imageFiles});
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
