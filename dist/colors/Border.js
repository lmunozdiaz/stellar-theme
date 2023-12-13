"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.border = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const _1 = require(".");
exports.border = {
    panel: chroma_js_1.default.hsl(_1.hue, 0.12, 0.21).hex(),
    float: chroma_js_1.default.hsl(_1.hue, 0.26, 0.7).hex(),
    none: chroma_js_1.default.hsl(_1.hue, _1.saturation, _1.lightness).alpha(0),
};
