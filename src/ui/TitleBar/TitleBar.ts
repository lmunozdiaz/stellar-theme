import { border, canvas, foreground } from "../../colors";
import {
  titleBarActiveBackground,
  titleBarActiveForeground,
  titleBarBorder,
  titleBarInactiveBackground,
  titleBarInactiveForeground,
} from ".";

export const TitleBar = {
  [titleBarActiveBackground]: canvas.panel,
  [titleBarActiveForeground]: foreground.panel,
  [titleBarInactiveBackground]: canvas.panel,
  [titleBarInactiveForeground]: foreground.obscure,
  [titleBarBorder]: border.panel,
};
