"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selection = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const _1 = require(".");
const Accent_1 = require("./Accent");
exports.selection = {
    panel: chroma_js_1.default.hsl(_1.hue, 0.18, 0.21).brighten(0.4).hex(),
    editor: chroma_js_1.default.hsl(_1.hue, 0.18, 0.21).brighten(0.2).hex(),
    float: chroma_js_1.default.hsl(_1.hue, 0.18, 0.21).brighten(0.5).hex(),
    transparent: chroma_js_1.default.hex(Accent_1.accent.multiuse).alpha(0.3),
};
