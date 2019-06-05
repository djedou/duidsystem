export default function getStyleId(css) {
  let id = `duid_style_id_${css.length}`;
  return id;
}