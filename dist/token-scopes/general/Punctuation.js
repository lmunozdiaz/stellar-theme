"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.punctuation = void 0;
const colors_1 = require("../../colors");
exports.punctuation = [
    {
        name: "Punctuation",
        scope: ["punctuation", "keyword.operator.type.annotation", "meta.brace"],
        settings: {
            foreground: colors_1.foreground.punctuation,
        },
    },
    {
        name: "Template Expression",
        scope: [
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end",
        ],
        settings: {
            foreground: colors_1.foreground.punctuation,
        },
    },
];
