import chroma from "chroma-js";

export const info = {
  positive: chroma.hsl(134, 0.6, 0.63).hex(),
  negative: chroma.hsl(3, 1, 0.7).hex(),
  critical: chroma.hsl(34, 1, 0.74).hex(),
};
