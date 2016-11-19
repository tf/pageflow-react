import EditorFileIdsResolver from './EditorFileIdsResolver';
import SeedFileIdsResolver from './SeedFileIdsResolver';

export default function(options, callback) {
  if (PAGEFLOW_EDITOR) {
    return new EditorFileIdsResolver(options, callback);
  }
  else {
    return new SeedFileIdsResolver(options, callback);
  }
}
