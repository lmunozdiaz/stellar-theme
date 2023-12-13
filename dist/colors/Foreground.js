"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foreground = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const _1 = require(".");
exports.foreground = {
    accent: chroma_js_1.default.hsl(_1.hue, 0.96, 0.72).hex(),
    editor: chroma_js_1.default.hsl(_1.hue, 0.46, 0.82).hex(),
    focus: chroma_js_1.default.hsl(_1.hue, 0.62, 0.96).hex(),
    navigatable: chroma_js_1.default.hsl(_1.hue, 1, 0.82).hex(),
    obscure: chroma_js_1.default.hsl(_1.hue, 0.19, 0.47).hex(),
    panel: chroma_js_1.default.hsl(_1.hue, 0.24, 0.65).hex(),
    float: chroma_js_1.default.hsl(_1.hue, 0.26, 0.73).hex(),
    punctuation: chroma_js_1.default.hsl(_1.hue, 0.2, 0.57).hex(),
};
