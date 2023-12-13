import chroma from "chroma-js";
import { hue } from ".";

export const separator = {
  float: chroma.hsl(hue, 0.13, 0.38).hex(),
};
