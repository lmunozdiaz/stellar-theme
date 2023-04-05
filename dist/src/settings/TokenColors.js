"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenColors = void 0;
const syntaxPalette_1 = __importDefault(require("../colors/syntaxPalette"));
exports.tokenColors = [
    {
        scope: "comment",
        settings: {
            fontStyle: "italic",
        },
    },
    {
        scope: "punctuation",
        settings: {
            foreground: syntaxPalette_1.default.CadetGray,
        },
    },
    {
        scope: "punctuation.section.embedded",
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: "punctuation.definition.template-expression",
        settings: {
            foreground: syntaxPalette_1.default.UranianBlue,
        },
    },
    {
        scope: "meta.brace",
        settings: {
            foreground: syntaxPalette_1.default.CadetGray,
        },
    },
    {
        scope: "keyword.control",
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: ["keyword.operator"],
        settings: {
            foreground: syntaxPalette_1.default.CadetGray,
        },
    },
    {
        scope: ["keyword.operator.new"],
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: "keyword.other",
        settings: {
            foreground: syntaxPalette_1.default.MayaBlue,
        },
    },
    {
        scope: "storage.type",
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: "storage.modifier",
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: "entity.name.function",
        settings: {
            foreground: syntaxPalette_1.default.VistaBlue,
        },
    },
    {
        scope: "entity.name.tag",
        settings: {
            foreground: syntaxPalette_1.default.Emerald,
        },
    },
    {
        scope: "entity.name.type",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "entity.name.section",
        settings: {
            foreground: "#FF0000",
        },
    },
    {
        scope: "entity.other.inherited-class",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "entity.other.attribute-name",
        settings: {
            foreground: syntaxPalette_1.default.Mauve,
        },
    },
    {
        scope: "constant.language",
        settings: {
            foreground: syntaxPalette_1.default.MayaBlue,
        },
    },
    {
        scope: "constant.numeric",
        settings: {
            foreground: syntaxPalette_1.default.MayaBlue,
        },
    },
    {
        scope: "constant.character",
        settings: {
            foreground: syntaxPalette_1.default.MayaBlue,
        },
    },
    {
        scope: "constant.other",
        settings: {
            foreground: syntaxPalette_1.default.MayaBlue,
        },
    },
    {
        scope: "variable",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "variable.language",
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: "string.quoted",
        settings: {
            foreground: syntaxPalette_1.default.UranianBlue,
        },
    },
    {
        scope: "string.template",
        settings: {
            foreground: syntaxPalette_1.default.UranianBlue,
        },
    },
    {
        scope: "support.function",
        settings: {
            foreground: syntaxPalette_1.default.VistaBlue,
        },
    },
    {
        scope: "support.class",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "support.class.component",
        settings: {
            foreground: syntaxPalette_1.default.Emerald,
        },
    },
    {
        scope: "support.type",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "support.type.builtin",
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: "support.type.primitive",
        settings: {
            foreground: syntaxPalette_1.default.LightRed,
        },
    },
    {
        scope: "support.typedef",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "support.constant",
        settings: {
            foreground: syntaxPalette_1.default.MayaBlue,
        },
    },
    {
        scope: "support.variable",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "support.other",
        settings: {
            foreground: "#FF0000",
        },
    },
    {
        scope: "meta.property-value",
        settings: {
            foreground: syntaxPalette_1.default.MayaBlue,
        },
    },
    {
        scope: "meta.tag",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
    {
        scope: "text.html.derivative",
        settings: {
            foreground: syntaxPalette_1.default.AliceBlue,
        },
    },
];
