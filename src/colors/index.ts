const hue: number = 216;
const saturation: number = 0.21;
const lightness: number = 0.11;
const transparent: string = "00";

const colors = {
  accent: {
    default: "#3080f8",
    emphasis: "#1f6feb",
  },
  ansi: {
    black: {
      default: "#010409",
      bright: "#010409",
    },
    blue: {
      default: "#388bfd",
      bright: "#a5d6ff",
    },
    cyan: {
      default: "#39c5cf",
      bright: "#56d4dd",
    },
    green: {
      default: "#2ea043",
      bright: "#56d364",
    },
    magenta: {
      default: "#a371f7",
      bright: "#bc8cff",
    },
    red: {
      default: "#f85149",
      bright: "#ff7b72",
    },
    white: {
      default: "#ffffff",
      bright: "#ffffff",
    },
    yellow: {
      default: "#d29922",
      bright: "#f2cc60",
    },
  },
  border: {
    default: "#2f343c",
    surface: "#0d1116",
  },
  canvas: {
    default: "#161b22",
    overlay: "#0d1116",
    surface: "#2c343f",
  },
  explicit: {
    aqua: "#8be8c8",
    black: "#000000",
    blue: "#79c0ff",
    blurple: "#98A7FD",
    coral: "#ffa28b",
    darkgray: "#546278",
    gray: "#c3cfdf",
    green: "#7ee787",
    lightblue: "#a5d6ff",
    lightgray: "#e7eef9",
    lightyellow: "#ffdfb6",
    newYello: "#efd5b3",
    orange: "#ea8d75",
    pink: "#ffbedd",
    purple: "#d2a8ff",
    red: "#ff7b72",
    white: "#ffffff",
    yellow: "#ffc680",
    //
    airsuperiorityblue: "#83a5c3",
    aliceblue: "#E7EEF9",
    emerald: "#52DE8C",
    frenchgray: "#C3CFDF",
    lightgreen: "#7ee787",
    mantis: "#7FC47C",
    mauve: "#CA99FF",
    mayablue: "#79c0ff",
    mindaro: "#CDFC8B",
    navajowhite: "#FFDFB6",
    salmon: "#FF787C",
    salmonpink: "#E29CAA",
    tearose: "#E3BCB6",
    tiffanyblue: "#80D9D3",
    uranianblue: "#A6D7FF",
    vanilla: "#E1D89F",
    verdigris: "#77C0BB",
    vistablue: "#94A2F2",
    lightcoral: "#FF787C",
    wisteria: "#C3A0D9",
  },
  fg: {
    accent: "#7199FC",
    default: "#90a3bb",
    focus: "#eef4fb",
    navigatable: "#a5d6ff",
    onEmphasis: "#ffffff",
    subtle: "#61758f",
  },
  git: {
    added: "#68d982",
    deleted: "#ff6e66",
    modified: "#ffc67a",
  },
  separator: {
    default: "#909cad",
    surface: "#545f6d",
  },
  transparent: "#ffffff00",
};

export { hue, saturation, lightness, transparent };
export * from "./Border";
export * from "./Canvas";
export * from "./Info";
export * from "./Separator";
export * from "./Foreground";
export * from "./Syntax";
export * from "./SelectionHighlight";
