"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = void 0;
const colors_1 = require("../../colors");
exports.functions = [
    {
        name: "Function",
        scope: [
            "entity.name.function",
            "support.function",
            "punctuation.definition.decorator",
            "punctuation.decorator",
            "meta.function-call.generic",
        ],
        settings: {
            foreground: colors_1.syntax.functions,
        },
    },
];
