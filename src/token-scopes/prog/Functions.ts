import { syntax } from "../../colors";

export const functions = [
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
      foreground: syntax.functions,
    },
  },
];
