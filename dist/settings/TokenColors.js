"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenColors = void 0;
const general_1 = require("../token-scopes/general");
const html_1 = require("../token-scopes/html");
const prog_1 = require("../token-scopes/prog");
exports.tokenColors = [
    ...html_1.attributes,
    ...general_1.base,
    ...general_1.comments,
    ...prog_1.constants,
    ...prog_1.functions,
    ...prog_1.keywords,
    ...prog_1.operators,
    ...prog_1.properties,
    ...general_1.punctuation,
    ...prog_1.storage,
    ...general_1.strings,
    ...html_1.tags,
    ...html_1.text,
    ...prog_1.types,
    ...prog_1.variables,
];
