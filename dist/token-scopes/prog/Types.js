"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = void 0;
const colors_1 = require("../../colors");
exports.types = [
    {
        name: "Type",
        scope: [
            "meta.type.annotation",
            "meta.type.parameters",
            "support.type.primitive",
            "support.type.builtin",
            "support.type.exception",
            "support.type.vendored.property-name",
        ],
        settings: {
            foreground: colors_1.syntax.TeaRose,
        },
    },
];
