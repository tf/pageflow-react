import mapping from './icons/mapping';

export default function Icon(props) {
  const SvgIcon = mapping[props.name];

  if (!SvgIcon) {
    throw new Error(`No icon registered for "${props.name}".`);
  }

  return (
    <SvgIcon {...props} />
  );
}
