import chroma from "chroma-js";
import { hue } from ".";
import { accent } from "./Accent";

export const selection = {
  panel: chroma.hsl(hue, 0.18, 0.21).brighten(0.4).hex(),
  editor: chroma.hsl(hue, 0.18, 0.21).brighten(0.2).hex(),
  float: chroma.hsl(hue, 0.18, 0.21).brighten(0.5).hex(),
  transparent: chroma.hex(accent.multiuse).alpha(0.3),
};
