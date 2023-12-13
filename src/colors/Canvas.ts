import chroma from "chroma-js";
import { hue, saturation, lightness } from ".";

export const canvas = {
  panel: chroma.hsl(hue, saturation, lightness).hex(),
  editor: chroma.hsl(hue, 0.26, 0.7).hex(),
  float: chroma.hsl(hue, 0.18, 0.21).hex(),
};
