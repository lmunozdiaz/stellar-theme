"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleBar = void 0;
const colors_1 = require("../../colors");
const _1 = require(".");
exports.TitleBar = {
    [_1.titleBarActiveBackground]: colors_1.canvas.panel,
    [_1.titleBarActiveForeground]: colors_1.foreground.panel,
    [_1.titleBarInactiveBackground]: colors_1.canvas.panel,
    [_1.titleBarInactiveForeground]: colors_1.foreground.obscure,
    [_1.titleBarBorder]: colors_1.border.panel,
};
