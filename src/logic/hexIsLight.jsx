export function hexIsLight(color) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const bright = (r * 299 + g * 587 + b * 114) / 1000;
  return bright > 155;
}
