import EditorFileIdsResolver from 'resolvers/editor_file_ids_resolver';

import Backbone from 'backbone';

import sinon from 'sinon';

describe('EditorFileIdsResolver', () => {
  it('gets ids of files indexed by collection name', () => {
    var files = {
      image_files: new Backbone.Collection([{id: 1}, {id: 3}])
    };
    var resolver = new EditorFileIdsResolver({
      collections: () => files
    });

    var result = resolver.get();

    expect(result).to.deep.eq({image_files: [1, 3]})
  });

  it('invokes callback when prop attribute changes', () => {
    var files = {
      image_files: new Backbone.Collection([{id: 1}])
    };
    var callback = sinon.spy();
    new EditorFileIdsResolver({
      collections: () => files
    }, callback);

    files.image_files.shift();

    expect(callback).to.have.been.called;
  });

  it('stops invokes callback after dispose', () => {
    var files = {
      image_files: new Backbone.Collection([{id: 1}])
    };
    var callback = sinon.spy();
    var resolver = new EditorFileIdsResolver({
      collections: () => files
    }, callback);

    resolver.dispose();
    files.image_files.shift();

    expect(callback).not.to.have.been.called;
  });
});
