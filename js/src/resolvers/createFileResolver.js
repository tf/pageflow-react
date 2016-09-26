import createModelResolver from './createModelResolver';
import compose from './compose';

export default function createFileResolver({collectionName}) {
  return compose(toUrls, createModelResolver({
    backboneCollection: () => pageflow.files[collectionName],
    seedProperty: collectionName,
    attributesForProps: ['id', 'variants'],
  }));

  function toUrls(file, seed) {
    if (!file) {
      return null;
    }

    return file.variants.reduce((result, variant) => {
      const url = getFileUrl(seed, file.id, variant);

      if (url) {
        result[variant] = url;
      }

      return result;
    }, {});
  }

  function getFileUrl(seed, fileId, quality) {
    const template = getUrlTemplate(seed, quality);

    if (template) {
      return template.replace(':id_partition', idPartition(fileId));
    }
  }

  function getUrlTemplate(seed, quality) {
    return seed.file_url_templates[collectionName][quality];
  }
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
