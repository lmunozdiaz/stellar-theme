"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuBarSelectionForeground = exports.menuBarSelectionBorder = exports.menuBarSelectionBackground = exports.menuSeparatorBackground = exports.menuSelectionForeground = exports.menuSelectionBorder = exports.menuSelectionBackground = exports.menuForeground = exports.menuBorder = exports.menuBackground = void 0;
exports.menuBackground = "menu.background";
exports.menuBorder = "menu.border";
exports.menuForeground = "menu.foreground";
exports.menuSelectionBackground = "menu.selectionBackground";
exports.menuSelectionBorder = "menu.selectionBorder";
exports.menuSelectionForeground = "menu.selectionForeground";
exports.menuSeparatorBackground = "menu.separatorBackground";
exports.menuBarSelectionBackground = "menubar.selectionBackground";
exports.menuBarSelectionBorder = "menubar.selectionBorder";
exports.menuBarSelectionForeground = "menubar.selectionForeground";
__exportStar(require("./Menu"), exports);
