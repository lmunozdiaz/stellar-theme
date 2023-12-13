"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accent = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const _1 = require(".");
exports.accent = {
    multiuse: chroma_js_1.default.hsl(_1.hue, 0.93, 0.58).hex(),
    asBackground: chroma_js_1.default.hsl(_1.hue, 0.84, 0.52).hex(),
};
