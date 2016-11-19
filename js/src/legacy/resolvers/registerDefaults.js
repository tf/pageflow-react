import FileIdsResolver from './FileIdsResolver';
import PageResolver from './PageResolver';
import ChapterResolver from './ChapterResolver';
import PageTypeResolver from './PageTypeResolver';
import CurrentParentPageResolver from './CurrentParentPageResolver';
import I18nResolver from './I18nResolver';
import ImageFileResolver from './ImageFileResolver';
import VideoFileResolver from './VideoFileResolver';
import SettingResolver from './SettingResolver';

export default function registerDefaults(resolve) {
  resolve.register('fileIds', FileIdsResolver);
  resolve.register('chapter', ChapterResolver);
  resolve.register('page', PageResolver);
  resolve.register('pageType', PageTypeResolver);
  resolve.register('currentParentPage', CurrentParentPageResolver);
  resolve.register('i18n', I18nResolver);
  resolve.register('videoFile', VideoFileResolver);
  resolve.register('imageFile', ImageFileResolver);
  resolve.register('setting', SettingResolver);
}
