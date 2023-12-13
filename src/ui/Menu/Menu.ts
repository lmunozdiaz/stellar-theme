import {
  menuBackground,
  menuBarSelectionBackground,
  menuBarSelectionBorder,
  menuBarSelectionForeground,
  menuBorder,
  menuForeground,
  menuSelectionBackground,
  menuSelectionBorder,
  menuSelectionForeground,
  menuSeparatorBackground,
} from ".";
import { selection, canvas, border, foreground, separator } from "../../colors";

export const Menu = {
  [menuBackground]: canvas.float,
  [menuBarSelectionBackground]: selection.panel,
  [menuBarSelectionBorder]: border.none,
  [menuBarSelectionForeground]: foreground.focus,
  [menuBorder]: border.float,
  [menuForeground]: foreground.float,
  [menuSelectionBackground]: selection.float,
  [menuSelectionBorder]: border.none,
  [menuSelectionForeground]: foreground.focus,
  [menuSeparatorBackground]: separator.float,
};
