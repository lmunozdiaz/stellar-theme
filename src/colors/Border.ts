import chroma from "chroma-js";
import { hue, lightness, saturation } from ".";

export const border = {
  panel: chroma.hsl(hue, 0.12, 0.21).hex(),
  float: chroma.hsl(hue, 0.26, 0.7).hex(),
  none: chroma.hsl(hue, saturation, lightness).alpha(0),
};
