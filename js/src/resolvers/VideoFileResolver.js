import createModelResolver from './createModelResolver';
import compose from './compose';

export default compose(toVideoUrls, createModelResolver({
  backboneCollection: () => pageflow.videoFiles,
  seedProperty: 'video_files',
  attributesForProps: ['id', 'variants'],
}));

function toVideoUrls(attributes, seed) {
  if (!attributes) {
    return null;
  }

  return attributes.variants.reduce((result, variant) => {
    const url = getVideoFileUrl(seed, attributes.id, variant);

    if (url) {
      result[variant] = url;
    }

    return result;
  }, {});
}

function getVideoFileUrl(seed, videoFileId, quality) {
  const template = getUrlTemplate(seed, quality);

  if (template) {
    return template.replace(':id_partition', idPartition(videoFileId));
  }
}

function getUrlTemplate(seed, quality) {
  return seed.file_url_templates.video_files[quality];
}

function idPartition(id) {
  return partition(pad(id, 9), '/');
}

function partition(string, separator) {
  return string.replace(/./g, function(c, i, a) {
    return i && ((a.length - i) % 3 === 0) ? '/' + c : c;
  });
}

function pad(string, size) {
  return (Array(size).fill(0).join('') + string).slice(-size);
}
