import chroma from "chroma-js";
import { hue } from ".";

export const accent = {
  multiuse: chroma.hsl(hue, 0.93, 0.58).hex(),
  asBackground: chroma.hsl(hue, 0.84, 0.52).hex(),
};
