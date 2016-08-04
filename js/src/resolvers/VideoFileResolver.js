import Resolver from './resolver';

class VideoFileResolver extends Resolver {
  constructor(options, callback) {
    super(callback);
    this.options = options || {};
  }

  get(props, seed) {
    const videoFileId = getVideoFileId(props, this.options);
    const variants = getPresentVariants(seed, videoFileId);

    if (!variants) {
      return null;
    }

    return variants.reduce((result, quality) => {
      const url = getVideoFileUrl(seed, videoFileId, quality);

      if (url) {
        result[quality] = url;
      }

      return result;
    }, {});
  }
}

function getVideoFileId(props, options) {
  if (typeof options.id != 'function') {
    throw new Error('Pass a function mapping props to file id as id option.');
  }

  return options.id(props);
}

function getPresentVariants(seed, videoFileId) {
  return seed.video_file_variants[videoFileId];
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

export default VideoFileResolver;
