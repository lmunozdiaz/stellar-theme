import SyntaxColorPalette from "../colors/syntaxPalette";

export const tokenColors = [
  {
    scope: "comment",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "punctuation",
    settings: {
      foreground: SyntaxColorPalette.CadetGray,
    },
  },
  {
    scope: "punctuation.section.embedded",
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: "punctuation.definition.template-expression",
    settings: {
      foreground: SyntaxColorPalette.UranianBlue,
    },
  },
  {
    scope: "meta.brace",
    settings: {
      foreground: SyntaxColorPalette.CadetGray,
    },
  },
  {
    scope: "keyword.control",
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: ["keyword.operator"],
    settings: {
      foreground: SyntaxColorPalette.CadetGray,
    },
  },
  {
    scope: ["keyword.operator.new"],
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: "keyword.other",
    settings: {
      foreground: SyntaxColorPalette.MayaBlue,
    },
  },
  {
    scope: "storage.type",
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: "storage.modifier",
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: "entity.name.function",
    settings: {
      foreground: SyntaxColorPalette.VistaBlue,
    },
  },
  {
    scope: "entity.name.tag",
    settings: {
      foreground: SyntaxColorPalette.Emerald,
    },
  },
  {
    scope: "entity.name.type",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "entity.name.section",
    settings: {
      foreground: "#FF0000",
    },
  },
  {
    scope: "entity.other.inherited-class",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "entity.other.attribute-name",
    settings: {
      foreground: SyntaxColorPalette.Mauve,
    },
  },
  {
    scope: "constant.language",
    settings: {
      foreground: SyntaxColorPalette.MayaBlue,
    },
  },
  {
    scope: "constant.numeric",
    settings: {
      foreground: SyntaxColorPalette.MayaBlue,
    },
  },
  {
    scope: "constant.character",
    settings: {
      foreground: SyntaxColorPalette.MayaBlue,
    },
  },
  {
    scope: "constant.other",
    settings: {
      foreground: SyntaxColorPalette.MayaBlue,
    },
  },
  {
    scope: "variable",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "variable.language",
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: "string.quoted",
    settings: {
      foreground: SyntaxColorPalette.UranianBlue,
    },
  },
  {
    scope: "string.template",
    settings: {
      foreground: SyntaxColorPalette.UranianBlue,
    },
  },
  {
    scope: "support.function",
    settings: {
      foreground: SyntaxColorPalette.VistaBlue,
    },
  },
  {
    scope: "support.class",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "support.class.component",
    settings: {
      foreground: SyntaxColorPalette.Emerald,
    },
  },
  {
    scope: "support.type",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "support.type.builtin",
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: "support.type.primitive",
    settings: {
      foreground: SyntaxColorPalette.LightRed,
    },
  },
  {
    scope: "support.typedef",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "support.constant",
    settings: {
      foreground: SyntaxColorPalette.MayaBlue,
    },
  },
  {
    scope: "support.variable",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "support.other",
    settings: {
      foreground: "#FF0000",
    },
  },
  {
    scope: "meta.property-value",
    settings: {
      foreground: SyntaxColorPalette.MayaBlue,
    },
  },
  {
    scope: "meta.tag",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
  {
    scope: "text.html.derivative",
    settings: {
      foreground: SyntaxColorPalette.AliceBlue,
    },
  },
];
