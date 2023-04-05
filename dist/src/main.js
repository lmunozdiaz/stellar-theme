"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extractOption_1 = __importDefault(require("./utils/extractOption"));
const WorkbenchColors_1 = require("./settings/WorkbenchColors");
(0, extractOption_1.default)("foreground", WorkbenchColors_1.workbenchColors);
// const theme = buildTheme("Stellar");
// fs.mkdir(path.join(__dirname, "themes"), { recursive: true }, (error) => {
//   if (error) return console.log(error);
// });
// const stellarJson = filePath();
// fs.writeFile(stellarJson, JSON.stringify(theme, null, 2), (error) => {
//   if (error) return console.log(error);
// });
// function filePath() {
//   return path.join(path.join(__dirname, "themes"), "stellar-color-theme.json");
// }
