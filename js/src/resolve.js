import EditorFileIdsResolver from './resolvers/editor_file_ids_resolver';
import EditorPageResolver from './resolvers/editor_page_resolver';
import EditorChapterResolver from './resolvers/editor_chapter_resolver';
import SeedFileIdsResolver from './resolvers/seed_file_ids_resolver';
import SeedPageResolver from './resolvers/seed_page_resolver';
import SeedChapterResolver from './resolvers/seed_chapter_resolver';
import PageTypeResolver from './resolvers/page_type_resolver';
import CurrentParentPageResolver from './resolvers/current_parent_page_resolver';

var resolvers;

if (PAGEFLOW_EDITOR) {
  resolvers = {
    fileIds: EditorFileIdsResolver,
    chapter: EditorChapterResolver,
    page: EditorPageResolver
  };
}
else {
  resolvers = {
    fileIds: SeedFileIdsResolver,
    chapter: SeedChapterResolver,
    page: SeedPageResolver
  };
}

resolvers = {
  pageType: PageTypeResolver,
  currentParentPage: CurrentParentPageResolver,
  ...resolvers
}

export default function(resolverName, options) {
  var resolver = resolvers[resolverName];

  if (!resolver) {
    throw `Unknown resolver ${resolverName}`;
  }

  return function(callback) {
    return new resolver(options, callback);
  }
};
