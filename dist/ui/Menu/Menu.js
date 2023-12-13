"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const _1 = require(".");
const colors_1 = require("../../colors");
exports.Menu = {
    [_1.menuBackground]: colors_1.canvas.float,
    [_1.menuBarSelectionBackground]: colors_1.selection.panel,
    [_1.menuBarSelectionBorder]: colors_1.border.none,
    [_1.menuBarSelectionForeground]: colors_1.foreground.focus,
    [_1.menuBorder]: colors_1.border.float,
    [_1.menuForeground]: colors_1.foreground.float,
    [_1.menuSelectionBackground]: colors_1.selection.float,
    [_1.menuSelectionBorder]: colors_1.border.none,
    [_1.menuSelectionForeground]: colors_1.foreground.focus,
    [_1.menuSeparatorBackground]: colors_1.separator.float,
};
