"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TokenColors_1 = require("../settings/TokenColors");
const WorkbenchColors_1 = require("../settings/WorkbenchColors");
const SemanticColors_1 = require("../settings/SemanticColors");
function buildTheme(name) {
    return {
        name: name,
        colors: WorkbenchColors_1.workbenchColors,
        tokenColors: [...TokenColors_1.tokenColors],
        semanticHighlighting: true,
        semanticTokenColors: SemanticColors_1.semanticColors,
    };
}
exports.default = buildTheme;
