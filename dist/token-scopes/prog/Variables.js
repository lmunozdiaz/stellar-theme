"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = void 0;
exports.variables = [
    {
        name: "Variable",
        scope: [
            "variable",
            "variable.language",
            "variable.other.constant",
            "support.variable",
        ],
        settings: {
            foreground: "#ABB2BF",
        },
    },
    {
        name: "Variable Object",
        scope: ["variable.other.object"],
        settings: {
            foreground: "#E5C07B",
        },
    },
    {
        name: "Variable Alias",
        scope: ["variable.other.readwrite.alias"],
        settings: {
            foreground: "#E5C07B",
        },
    },
    {
        name: "Variable Property",
        scope: ["variable.other.property"],
        settings: {
            foreground: "#E06C75",
        },
    },
    {
        name: "Variable Super",
        scope: ["variable.language.super"],
        settings: {
            foreground: "#56B6C2",
        },
    },
];
