import { tokenColors } from "../settings/TokenColors";
import { workbenchColors } from "../settings/WorkbenchColors";
import { semanticColors } from "../settings/SemanticColors";

function buildTheme(name: string) {
  return {
    name: name,
    colors: workbenchColors,
    tokenColors: [...tokenColors],
    semanticHighlighting: true,
    semanticTokenColors: semanticColors,
  };
}

export default buildTheme;
