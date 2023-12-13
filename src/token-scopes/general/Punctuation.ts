import { foreground } from "../../colors";

export const punctuation = [
  {
    name: "Punctuation",
    scope: ["punctuation", "keyword.operator.type.annotation", "meta.brace"],
    settings: {
      foreground: foreground.punctuation,
    },
  },
  {
    name: "Template Expression",
    scope: [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
    ],
    settings: {
      foreground: foreground.punctuation,
    },
  },
];
