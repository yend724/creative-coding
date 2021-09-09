export const range = (tag: number, min: number, max: number) => {
  if (tag < min) tag = min;
  if (tag > max) tag = max;
  return tag;
};
