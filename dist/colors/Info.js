"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
exports.info = {
    positive: chroma_js_1.default.hsl(134, 0.6, 0.63).hex(),
    negative: chroma_js_1.default.hsl(3, 1, 0.7).hex(),
    critical: chroma_js_1.default.hsl(34, 1, 0.74).hex(),
};
