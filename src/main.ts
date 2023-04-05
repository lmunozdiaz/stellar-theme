import * as fs from "fs";
import * as path from "path";
import buildTheme from "./utils/buildTheme";

const theme = buildTheme("Stellar");

fs.mkdir(path.join(__dirname, "themes"), { recursive: true }, (error) => {
  if (error) return console.log(error);
});

const stellarJson = filePath();

fs.writeFile(stellarJson, JSON.stringify(theme, null, 2), (error) => {
  if (error) return console.log(error);
});

function filePath() {
  return path.join(path.join(__dirname, "themes"), "stellar-color-theme.json");
}
