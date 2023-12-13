"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.separator = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const _1 = require(".");
exports.separator = {
    float: chroma_js_1.default.hsl(_1.hue, 0.13, 0.38).hex(),
};
