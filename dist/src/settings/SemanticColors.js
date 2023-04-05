"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.semanticColors = void 0;
const syntaxPalette_1 = __importDefault(require("../colors/syntaxPalette"));
exports.semanticColors = {
    class: syntaxPalette_1.default.AliceBlue,
    "class.defaultLibrary": syntaxPalette_1.default.LightRed,
    enum: syntaxPalette_1.default.AliceBlue,
    function: syntaxPalette_1.default.VistaBlue,
    interface: syntaxPalette_1.default.AliceBlue,
    method: syntaxPalette_1.default.VistaBlue,
    parameter: syntaxPalette_1.default.AliceBlue,
    property: syntaxPalette_1.default.AliceBlue,
    type: syntaxPalette_1.default.AliceBlue,
    "type.defaultLibrary": syntaxPalette_1.default.LightRed,
    typeParameter: syntaxPalette_1.default.AliceBlue,
    variable: syntaxPalette_1.default.AliceBlue,
    "variable.defaultLibrary": syntaxPalette_1.default.LightRed,
};
