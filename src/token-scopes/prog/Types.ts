import { syntax } from "../../colors";

export const types = [
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
      foreground: syntax.TeaRose,
    },
  },
];
