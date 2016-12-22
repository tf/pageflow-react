export default function cueOffsetClassName(dimensions, wrapperDimensions) {
  if (!dimensions || !wrapperDimensions) {
    return;
  }

  const sizeOfClippedBottomPart = Math.max(0, dimensions.height - wrapperDimensions.height + dimensions.top);

  return `cue_offset cue_offset_${Math.ceil(sizeOfClippedBottomPart / 10)}`;
}
