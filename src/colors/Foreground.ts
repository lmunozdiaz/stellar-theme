import chroma from "chroma-js";
import { hue } from ".";

export const foreground = {
  accent: chroma.hsl(hue, 0.96, 0.72).hex(),
  editor: chroma.hsl(hue, 0.46, 0.82).hex(),
  focus: chroma.hsl(hue, 0.62, 0.96).hex(),
  navigatable: chroma.hsl(hue, 1, 0.82).hex(),
  obscure: chroma.hsl(hue, 0.19, 0.47).hex(),
  panel: chroma.hsl(hue, 0.24, 0.65).hex(),
  float: chroma.hsl(hue, 0.26, 0.73).hex(),
  punctuation: chroma.hsl(hue, 0.2, 0.57).hex(),
};
