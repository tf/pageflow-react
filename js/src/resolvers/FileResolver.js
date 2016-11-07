import createModelResolver from './createModelResolver';
import compose from './compose';

export default compose(expandUrls, createModelResolver({
  backboneCollection: options => pageflow.files[options.collectionName],
  seedProperty: options => options.collectionName,
  attributesForProps: ['id', 'variants'],
  includeConfiguration: true
}));

function expandUrls(file, seed, options) {
  if (!file) {
    return null;
  }

  return file.variants.reduce((result, variant) => {
    const url = getFileUrl(seed,
                           options.collectionName,
                           file.id,
                           variant);

    if (url) {
      result[variant] = url;
    }

    return result;
  }, file);
}

function getFileUrl(seed, collectionName, fileId, quality) {
  const template = getUrlTemplate(seed, collectionName, quality);

  if (template) {
    return template.replace(':id_partition', idPartition(fileId));
  }
}

function getUrlTemplate(seed, collectionName, quality) {
  return seed.file_url_templates[collectionName][quality];
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
