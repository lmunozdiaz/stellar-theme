"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workbenchColors = void 0;
const chroma_js_1 = __importDefault(require("chroma-js"));
const color_1 = __importDefault(require("../color"));
exports.workbenchColors = {
    // general
    descriptionForeground: color_1.default.fg.default,
    errorForeground: color_1.default.git.deleted,
    focusBorder: color_1.default.accent.default,
    foreground: color_1.default.fg.default,
    "icon.foreground": color_1.default.fg.default,
    "progressBar.background": color_1.default.accent.default,
    "sash.hoverBorder": color_1.default.accent.default,
    "selection.background": (0, chroma_js_1.default)(color_1.default.accent.default).alpha(0.3).hex(),
    "widget.shadow": color_1.default.explicit.black,
    // text
    "textBlockQuote.background": color_1.default.canvas.overlay,
    "textBlockQuote.border": "#d2a8ff",
    "textCodeBlock.background": color_1.default.canvas.overlay,
    "textLink.activeForeground": color_1.default.fg.interact,
    "textLink.foreground": color_1.default.fg.interact,
    "textPreformat.foreground": "#79c0ff",
    "textSeparator.foreground": "#",
    // menu
    "menu.background": color_1.default.canvas.surface,
    "menu.border": color_1.default.border.surface,
    "menu.foreground": color_1.default.fg.default,
    "menu.selectionBackground": (0, chroma_js_1.default)(color_1.default.canvas.surface)
        .brighten(0.5)
        .saturate(0.1)
        .hex(),
    "menu.selectionBorder": color_1.default.transparent,
    "menu.selectionForeground": color_1.default.fg.focus,
    "menu.separatorBackground": color_1.default.separator.surface,
    "menubar.selectionBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.5)
        .saturate(0.1)
        .hex(),
    "menubar.selectionBorder": color_1.default.transparent,
    "menubar.selectionForeground": color_1.default.fg.focus,
    // title bar
    "titleBar.activeBackground": color_1.default.canvas.default,
    "titleBar.activeForeground": color_1.default.fg.default,
    "titleBar.inactiveBackground": color_1.default.canvas.default,
    "titleBar.inactiveForeground": color_1.default.fg.subtle,
    "titleBar.border": color_1.default.border.default,
    // command center
    "commandCenter.activeBackground": color_1.default.canvas.overlay,
    "commandCenter.activeForeground": color_1.default.fg.focus,
    "commandCenter.background": color_1.default.canvas.overlay,
    "commandCenter.border": color_1.default.border.default,
    "commandCenter.foreground": color_1.default.fg.subtle,
    // welcome page
    "walkThrough.embeddedEditorBackground": "#",
    "welcomePage.background": color_1.default.canvas.overlay,
    "welcomePage.progress.background": "#",
    "welcomePage.progress.foreground": color_1.default.accent.default,
    "welcomePage.tileBackground": "#",
    "welcomePage.tileHoverBackground": "#",
    "welcomePage.tileShadow": "#",
    // activity bar - general
    "activityBar.background": color_1.default.canvas.default,
    "activityBar.border": color_1.default.border.default,
    "activityBar.dropBorder": color_1.default.accent.default,
    "activityBar.foreground": color_1.default.fg.focus,
    "activityBar.inactiveForeground": color_1.default.fg.default,
    // activity bar - active item
    "activityBar.activeBackground": color_1.default.transparent,
    "activityBar.activeBorder": color_1.default.canvas.default,
    "activityBar.activeFocusBorder": color_1.default.accent.default,
    // activity bar - badges
    "activityBarBadge.background": color_1.default.accent.default,
    "activityBarBadge.foreground": color_1.default.fg.focus,
    // sidebar - general
    "sideBar.background": color_1.default.canvas.default,
    "sideBar.border": color_1.default.border.default,
    "sideBar.dropBackground": color_1.default.accent.default,
    "sideBar.foreground": color_1.default.fg.default,
    // sidebar - titles/headers
    "sideBarSectionHeader.background": color_1.default.canvas.default,
    "sideBarSectionHeader.border": color_1.default.canvas.default,
    "sideBarSectionHeader.foreground": color_1.default.fg.focus,
    "sideBarTitle.foreground": color_1.default.fg.focus,
    // status bar - general
    "statusBar.background": color_1.default.canvas.default,
    "statusBar.foreground": color_1.default.fg.subtle,
    "statusBar.border": color_1.default.border.default,
    "statusBar.debuggingBackground": color_1.default.canvas.default,
    "statusBar.debuggingForeground": color_1.default.fg.subtle,
    "statusBar.noFolderBackground": color_1.default.canvas.default,
    "statusBar.noFolderForeground": color_1.default.fg.subtle,
    // status bar - items
    "statusBarItem.activeBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.5)
        .saturate(0.1)
        .hex(),
    "statusBarItem.hoverBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.5)
        .saturate(0.1)
        .hex(),
    "statusBarItem.remoteBackground": color_1.default.canvas.default,
    "statusBarItem.remoteForeground": color_1.default.fg.default,
    "statusBar.focusBorder": "#",
    "statusBarItem.compactHoverBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.5)
        .saturate(0.1)
        .hex(),
    "statusBarItem.errorBackground": "#",
    "statusBarItem.errorForeground": "#",
    "statusBarItem.focusBorder": color_1.default.accent.default,
    "statusBarItem.prominentBackground": "#",
    "statusBarItem.prominentForeground": "#",
    "statusBarItem.prominentHoverBackground": "#",
    "statusBarItem.warningBackground": "#",
    "statusBarItem.warningForeground": "#",
    // tabs - general
    "tab.border": color_1.default.canvas.default,
    "tab.hoverBackground": color_1.default.canvas.overlay,
    "tab.hoverBorder": color_1.default.canvas.overlay,
    "tab.hoverForeground": color_1.default.fg.focus,
    "tab.lastPinnedBorder": color_1.default.border.default,
    // tabs - active/inactive
    "tab.activeBackground": color_1.default.canvas.overlay,
    "tab.activeBorder": color_1.default.canvas.overlay,
    "tab.activeBorderTop": color_1.default.transparent,
    "tab.activeForeground": color_1.default.fg.focus,
    "tab.activeModifiedBorder": "#",
    "tab.inactiveBackground": color_1.default.canvas.default,
    "tab.inactiveForeground": color_1.default.fg.subtle,
    "tab.inactiveModifiedBorder": "#",
    // tabs - unfocused active/inactive
    "tab.unfocusedActiveBackground": color_1.default.canvas.overlay,
    "tab.unfocusedActiveBorder": color_1.default.canvas.overlay,
    "tab.unfocusedActiveBorderTop": color_1.default.transparent,
    "tab.unfocusedActiveForeground": color_1.default.fg.subtle,
    "tab.unfocusedActiveModifiedBorder": "#",
    "tab.unfocusedInactiveBackground": color_1.default.canvas.default,
    "tab.unfocusedInactiveForeground": color_1.default.fg.subtle,
    "tab.unfocusedInactiveModifiedBorder": "#",
    // tabs - unfocused hover
    "tab.unfocusedHoverBackground": color_1.default.canvas.overlay,
    "tab.unfocusedHoverBorder": color_1.default.canvas.overlay,
    "tab.unfocusedHoverForeground": color_1.default.fg.default,
    // editor - general
    "editor.background": color_1.default.canvas.overlay,
    "editor.foldBackground": (0, chroma_js_1.default)(color_1.default.canvas.overlay)
        .brighten(0.4)
        .saturate(0.14)
        .hex(),
    "editor.foreground": color_1.default.fg.default,
    "editor.lineHighlightBackground": (0, chroma_js_1.default)(color_1.default.canvas.overlay)
        .brighten(0.2)
        .saturate(0.12)
        .hex(),
    "editor.lineHighlightBorder": color_1.default.transparent,
    "editorCursor.background": color_1.default.fg.focus,
    "editorCursor.foreground": color_1.default.accent.default,
    "editorIndentGuide.activeBackground": (0, chroma_js_1.default)(color_1.default.border.default)
        .brighten(1)
        .hex(),
    "editorIndentGuide.background": color_1.default.border.default,
    "editorLineNumber.activeForeground": color_1.default.fg.focus,
    "editorLineNumber.foreground": color_1.default.fg.default,
    "editorLink.activeForeground": color_1.default.fg.focus,
    "editorPane.background": color_1.default.canvas.default,
    "editorRuler.foreground": color_1.default.fg.default,
    "editorWhitespace.foreground": color_1.default.fg.default,
    // editor - gutter
    "editorGutter.addedBackground": color_1.default.git.added,
    "editorGutter.background": color_1.default.canvas.overlay,
    "editorGutter.deletedBackground": color_1.default.git.deleted,
    "editorGutter.foldingControlForeground": color_1.default.fg.default,
    "editorGutter.modifiedBackground": color_1.default.git.modified,
    // editor - status info
    "editorError.foreground": color_1.default.git.deleted,
    "editorInfo.foreground": "#",
    "editorWarning.foreground": "#",
    "problemsErrorIcon.foreground": color_1.default.git.deleted,
    "problemsInfoIcon.foreground": "#",
    "problemsWarningIcon.foreground": "#",
    // editor - lightbulb
    "editorLightBulb.foreground": color_1.default.git.modified,
    "editorLightBulbAutoFix.foreground": "#",
    // editor - overview ruler
    "editorOverviewRuler.addedForeground": (0, chroma_js_1.default)(color_1.default.git.added)
        .alpha(0.4)
        .hex(),
    "editorOverviewRuler.background": color_1.default.canvas.overlay,
    "editorOverviewRuler.border": color_1.default.canvas.overlay,
    "editorOverviewRuler.bracketMatchForeground": color_1.default.fg.subtle,
    "editorOverviewRuler.deletedForeground": (0, chroma_js_1.default)(color_1.default.git.deleted)
        .alpha(0.4)
        .hex(),
    "editorOverviewRuler.errorForeground": "#",
    "editorOverviewRuler.findMatchForeground": "#",
    "editorOverviewRuler.infoForeground": "#",
    "editorOverviewRuler.modifiedForeground": (0, chroma_js_1.default)(color_1.default.git.modified)
        .alpha(0.4)
        .hex(),
    "editorOverviewRuler.rangeHighlightForeground": "#",
    "editorOverviewRuler.selectionHighlightForeground": (0, chroma_js_1.default)(color_1.default.accent.default)
        .alpha(0.2)
        .hex(),
    "editorOverviewRuler.warningForeground": "#",
    "editorOverviewRuler.wordHighlightForeground": "#d2a8ff33",
    "editorOverviewRuler.wordHighlightStrongForeground": "#d2a8ff33",
    // editor - selection
    "editor.inactiveSelectionBackground": (0, chroma_js_1.default)(color_1.default.accent.default)
        .alpha(0.2)
        .hex(),
    "editor.selectionBackground": (0, chroma_js_1.default)(color_1.default.accent.default).alpha(0.3).hex(),
    "editor.selectionForeground": "#",
    "editor.selectionHighlightBackground": (0, chroma_js_1.default)(color_1.default.accent.default)
        .alpha(0.3)
        .hex(),
    "editor.selectionHighlightBorder": (0, chroma_js_1.default)(color_1.default.accent.default)
        .alpha(0.3)
        .hex(),
    // editor - brackets
    "editorBracketMatch.background": color_1.default.transparent,
    "editorBracketMatch.border": color_1.default.fg.subtle,
    // editor - bracket pair colorization
    "editorBracketHighlight.foreground1": "#",
    "editorBracketHighlight.foreground2": "#",
    "editorBracketHighlight.foreground3": "#",
    "editorBracketHighlight.foreground4": "#",
    "editorBracketHighlight.foreground5": "#",
    "editorBracketHighlight.foreground6": "#",
    // editor - bracket pair guides
    "editorBracketPairGuide.activeBackground1": "#",
    "editorBracketPairGuide.activeBackground2": "#",
    "editorBracketPairGuide.activeBackground3": "#",
    "editorBracketPairGuide.activeBackground4": "#",
    "editorBracketPairGuide.activeBackground5": "#",
    "editorBracketPairGuide.activeBackground6": "#",
    "editorBracketPairGuide.background1": "#",
    "editorBracketPairGuide.background2": "#",
    "editorBracketPairGuide.background3": "#",
    "editorBracketPairGuide.background4": "#",
    "editorBracketPairGuide.background5": "#",
    "editorBracketPairGuide.background6": "#",
    // editor - occurence highlight
    "editor.findMatchBackground": "#e8c77433",
    "editor.findMatchBorder": "#e8c77433",
    "editor.findMatchHighlightBackground": "#e8c77433",
    "editor.findMatchHighlightBorder": "#e8c77433",
    "editor.hoverHighlightBackground": (0, chroma_js_1.default)(color_1.default.accent.default)
        .alpha(0.2)
        .hex(),
    "editor.wordHighlightBackground": "#d2a8ff33",
    "editor.wordHighlightBorder": "#d2a8ff33",
    "editor.wordHighlightStrongBackground": "#d2a8ff33",
    "editor.wordHighlightStrongBorder": "#d2a8ff33",
    // editor - inline hints
    "editorInlayHint.background": "#",
    "editorInlayHint.foreground": "#",
    "editorInlayHint.parameterBackground": "#",
    "editorInlayHint.parameterForeground": "#",
    "editorInlayHint.typeBackground": "#",
    "editorInlayHint.typeForeground": "#",
    // editor - snippets
    "editor.snippetFinalTabstopHighlightBackground": (0, chroma_js_1.default)(color_1.default.accent.default)
        .alpha(0.3)
        .hex(),
    "editor.snippetTabstopHighlightBackground": (0, chroma_js_1.default)(color_1.default.accent.default)
        .alpha(0.2)
        .hex(),
    // breadcrumbs
    "breadcrumb.activeSelectionForeground": color_1.default.fg.focus,
    "breadcrumb.background": color_1.default.canvas.overlay,
    "breadcrumb.focusForeground": color_1.default.fg.focus,
    "breadcrumb.foreground": color_1.default.fg.default,
    "breadcrumbPicker.background": color_1.default.canvas.default,
    // minimap
    "minimap.background": color_1.default.canvas.overlay,
    "minimap.errorHighlight": "#",
    "minimap.findMatchHighlight": "#",
    "minimap.foregroundOpacity": "#",
    "minimap.selectionHighlight": (0, chroma_js_1.default)(color_1.default.accent.default).alpha(0.3).hex(),
    "minimap.selectionOccurrenceHighlight": "#d2a8ff4d",
    "minimap.warningHighlight": "#",
    "minimapGutter.addedBackground": (0, chroma_js_1.default)(color_1.default.git.added).alpha(0.4).hex(),
    "minimapGutter.deletedBackground": (0, chroma_js_1.default)(color_1.default.git.deleted).alpha(0.4).hex(),
    "minimapGutter.modifiedBackground": (0, chroma_js_1.default)(color_1.default.git.modified)
        .alpha(0.4)
        .hex(),
    "minimapSlider.activeBackground": (0, chroma_js_1.default)(color_1.default.border.default)
        .alpha(0.3)
        .hex(),
    "minimapSlider.background": (0, chroma_js_1.default)(color_1.default.border.default).alpha(0.2).hex(),
    "minimapSlider.hoverBackground": (0, chroma_js_1.default)(color_1.default.border.default)
        .alpha(0.3)
        .hex(),
    // panel - general
    "panel.background": color_1.default.canvas.default,
    "panel.border": color_1.default.border.default,
    "panel.dropBorder": color_1.default.accent.default,
    "panelInput.border": color_1.default.border.default,
    // panel - section
    "panelSection.border": color_1.default.border.default,
    "panelSection.dropBackground": color_1.default.accent.default,
    "panelSectionHeader.background": color_1.default.canvas.default,
    "panelSectionHeader.border": color_1.default.border.default,
    "panelSectionHeader.foreground": color_1.default.fg.subtle,
    // panel - title
    "panelTitle.activeBorder": color_1.default.canvas.default,
    "panelTitle.activeForeground": color_1.default.fg.focus,
    "panelTitle.inactiveForeground": color_1.default.fg.subtle,
    // terminal - general
    "terminal.background": color_1.default.canvas.default,
    "terminal.border": color_1.default.border.default,
    "terminal.dropBackground": "#",
    "terminal.foreground": color_1.default.fg.default,
    // "terminal.tab.activeBorder": null,
    "terminalCursor.background": color_1.default.fg.focus,
    "terminalCursor.foreground": color_1.default.accent.default,
    // terminal - colors
    "terminal.ansiBlack": color_1.default.ansi.black.default,
    "terminal.ansiBlue": color_1.default.ansi.blue.default,
    "terminal.ansiBrightBlack": color_1.default.ansi.black.bright,
    "terminal.ansiBrightBlue": color_1.default.ansi.blue.bright,
    "terminal.ansiBrightCyan": color_1.default.ansi.cyan.bright,
    "terminal.ansiBrightGreen": color_1.default.ansi.green.bright,
    "terminal.ansiBrightMagenta": color_1.default.ansi.magenta.bright,
    "terminal.ansiBrightRed": color_1.default.ansi.red.bright,
    "terminal.ansiBrightWhite": color_1.default.ansi.white.bright,
    "terminal.ansiBrightYellow": color_1.default.ansi.yellow.bright,
    "terminal.ansiCyan": color_1.default.ansi.cyan.default,
    "terminal.ansiGreen": color_1.default.ansi.green.default,
    "terminal.ansiMagenta": color_1.default.ansi.magenta.default,
    "terminal.ansiRed": color_1.default.ansi.red.default,
    "terminal.ansiWhite": color_1.default.ansi.white.default,
    "terminal.ansiYellow": color_1.default.ansi.yellow.default,
    // terminal - selection
    "terminal.selectionBackground": (0, chroma_js_1.default)(color_1.default.accent.default).alpha(0.3).hex(),
    "terminal.selectionForeground": "#",
    // terminal - occurence highlight
    "terminal.findMatchBackground": "#",
    "terminal.findMatchBorder": "#",
    "terminal.findMatchHighlightBackground": "#",
    "terminal.findMatchHighlightBorder": "#",
    // terminal - overview ruler
    "terminalOverviewRuler.cursorForeground": "#",
    "terminalOverviewRuler.findMatchForeground": "#",
    // terminal - command decoration
    "terminalCommandDecoration.defaultBackground": "#",
    "terminalCommandDecoration.errorBackground": "#",
    "terminalCommandDecoration.successBackground": "#",
    // editor widgets - general
    "editorWidget.background": color_1.default.canvas.surface,
    "editorWidget.border": color_1.default.border.surface,
    "editorWidget.foreground": color_1.default.fg.default,
    "editorWidget.resizeBorder": color_1.default.canvas.overlay,
    // editor widgets - hover
    "editorHoverWidget.background": color_1.default.canvas.surface,
    "editorHoverWidget.border": color_1.default.border.surface,
    "editorHoverWidget.foreground": color_1.default.fg.default,
    "editorHoverWidget.highlightForeground": "#",
    "editorHoverWidget.statusBarBackground": color_1.default.canvas.default,
    // editor widgets - suggestions
    "editorSuggestWidget.background": color_1.default.canvas.surface,
    "editorSuggestWidget.border": color_1.default.border.surface,
    "editorSuggestWidget.foreground": color_1.default.fg.default,
    "editorSuggestWidget.highlightForeground": color_1.default.fg.focus,
    "editorSuggestWidget.focusHighlightForeground": color_1.default.fg.focus,
    "editorSuggestWidget.selectedBackground": (0, chroma_js_1.default)(color_1.default.canvas.surface)
        .brighten(1)
        .hex(),
    "editorSuggestWidget.selectedForeground": color_1.default.fg.focus,
    "editorSuggestWidget.selectedIconForeground": color_1.default.fg.focus,
    "editorSuggestWidgetStatus.foreground": "#",
    // editor groups - general
    "editorGroup.border": color_1.default.border.default,
    "editorGroup.dropBackground": color_1.default.accent.default,
    "editorGroup.emptyBackground": color_1.default.canvas.default,
    // editor groups - header
    "editorGroupHeader.border": color_1.default.canvas.overlay,
    "editorGroupHeader.noTabsBackground": "#",
    "editorGroupHeader.tabsBackground": color_1.default.canvas.default,
    "editorGroupHeader.tabsBorder": color_1.default.canvas.overlay,
    // editor groups - drop-in prompt
    "editorGroup.dropIntoPromptBackground": color_1.default.accent.emphasis,
    "editorGroup.dropIntoPromptBorder": color_1.default.accent.default,
    "editorGroup.dropIntoPromptForeground": color_1.default.fg.onEmphasis,
    "editorGroup.focusedEmptyBorder": color_1.default.accent.default,
    // editor groups - side-side border
    "sideBySideEditor.horizontalBorder": color_1.default.border.default,
    "sideBySideEditor.verticalBorder": color_1.default.border.default,
    // list & trees - general
    "list.deemphasizedForeground": "#",
    "list.dropBackground": "#",
    "list.highlightForeground": color_1.default.fg.focus,
    "tree.inactiveIndentGuidesStroke": color_1.default.border.default,
    "tree.indentGuidesStroke": color_1.default.fg.default,
    // lists & trees - active/inactive selected
    "list.activeSelectionBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.4)
        .saturate(0.1)
        .hex(),
    "list.activeSelectionForeground": color_1.default.fg.focus,
    "list.inactiveSelectionBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.4)
        .saturate(0.1)
        .hex(),
    "list.inactiveSelectionForeground": color_1.default.fg.default,
    // lists & trees - hover
    "list.hoverBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.4)
        .saturate(0.1)
        .hex(),
    "list.hoverForeground": color_1.default.fg.default,
    // list & trees - information
    "list.errorForeground": color_1.default.git.deleted,
    "list.invalidItemForeground": "#",
    "list.warningForeground": "#",
    // list & trees - filter match
    "list.filterMatchBackground": "#",
    "list.filterMatchBorder": "#",
    // list & trees - focus
    "list.focusBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.4)
        .saturate(0.1)
        .hex(),
    "list.focusForeground": color_1.default.fg.default,
    "list.focusHighlightForeground": color_1.default.fg.focus,
    "list.inactiveFocusBackground": color_1.default.transparent,
    // list & trees - filter widget
    "listFilterWidget.background": color_1.default.canvas.surface,
    "listFilterWidget.noMatchesOutline": "#",
    "listFilterWidget.outline": "#",
    // list & trees - tree
    "tree.tableColumnsBorder": color_1.default.border.default,
    "tree.tableOddRowsBackground": color_1.default.canvas.overlay,
    // dif editor
    "diffEditor.border": "#",
    "diffEditor.diagonalFill": "#",
    "diffEditor.insertedLineBackground": "#",
    "diffEditor.insertedTextBackground": "#",
    "diffEditor.insertedTextBorder": "#",
    "diffEditor.removedLineBackground": "#",
    "diffEditor.removedTextBackground": "#",
    "diffEditor.removedTextBorder": "#",
    // dif editor - gutter
    "diffEditorGutter.insertedLineBackground": "#",
    "diffEditorGutter.removedLineBackground": "#",
    "diffEditorOverview.insertedForeground": "#",
    "diffEditorOverview.removedForeground": "#",
    "searchEditor.findMatchBackground": "#",
    "searchEditor.findMatchBorder": "#",
    "searchEditor.textInputBorder": "#",
    // peek view - general
    "peekView.border": color_1.default.border.default,
    "peekViewEditor.background": color_1.default.canvas.overlay,
    "peekViewEditor.matchHighlightBackground": "#",
    "peekViewEditor.matchHighlightBorder": "#",
    "peekViewEditorGutter.background": color_1.default.canvas.overlay,
    // peek view editor - results
    "peekViewResult.background": color_1.default.canvas.default,
    "peekViewResult.fileForeground": "#",
    "peekViewResult.lineForeground": color_1.default.fg.default,
    "peekViewResult.matchHighlightBackground": "#",
    "peekViewResult.selectionBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.4)
        .saturate(0.1)
        .hex(),
    "peekViewResult.selectionForeground": color_1.default.fg.focus,
    // peek view editor - title
    "peekViewTitle.background": color_1.default.canvas.default,
    "peekViewTitleDescription.foreground": color_1.default.fg.subtle,
    "peekViewTitleLabel.foreground": color_1.default.fg.focus,
    // quick picker
    "pickerGroup.border": color_1.default.separator.surface,
    "pickerGroup.foreground": color_1.default.fg.focus,
    "quickInput.background": color_1.default.canvas.surface,
    "quickInput.foreground": color_1.default.fg.default,
    "quickInputList.focusBackground": (0, chroma_js_1.default)(color_1.default.canvas.surface)
        .brighten(0.5)
        .saturate(0.05)
        .hex(),
    "quickInputList.focusForeground": color_1.default.fg.focus,
    "quickInputList.focusIconForeground": color_1.default.fg.focus,
    "quickInputTitle.background": "#",
    // notifications
    "notificationCenter.border": "#",
    "notificationCenterHeader.foreground": "#",
    "notificationCenterHeader.background": "#",
    "notificationToast.border": color_1.default.border.default,
    "notifications.foreground": color_1.default.fg.default,
    "notifications.background": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.4)
        .saturate(0.1)
        .hex(),
    "notifications.border": color_1.default.border.default,
    "notificationLink.foreground": "#",
    // notifications - status info
    "notificationsErrorIcon.foreground": "#",
    "notificationsWarningIcon.foreground": "#",
    "notificationsInfoIcon.foreground": "#",
    // banner
    "banner.background": "#",
    "banner.foreground": "#",
    "banner.iconForeground": "#",
    // settings - general
    "settings.focusedRowBackground": color_1.default.canvas.default,
    "settings.focusedRowBorder": color_1.default.border.default,
    "settings.modifiedItemIndicator": color_1.default.explicit.orange,
    "settings.rowHoverBackground": color_1.default.canvas.default,
    "settings.sashBorder": color_1.default.border.default,
    // settings - header
    "settings.headerBorder": color_1.default.border.default,
    "settings.headerForeground": color_1.default.fg.focus,
    // settings - checkbox input
    "settings.checkboxBackground": color_1.default.canvas.overlay,
    "settings.checkboxBorder": color_1.default.border.default,
    "settings.checkboxForeground": color_1.default.fg.default,
    // settings - dropdown input
    "settings.dropdownBackground": color_1.default.canvas.overlay,
    "settings.dropdownBorder": color_1.default.border.default,
    "settings.dropdownForeground": color_1.default.fg.default,
    "settings.dropdownListBorder": color_1.default.canvas.overlay,
    // settings - number input
    "settings.numberInputBackground": color_1.default.canvas.overlay,
    "settings.numberInputBorder": color_1.default.border.default,
    "settings.numberInputForeground": color_1.default.fg.default,
    // settings - text input
    "settings.textInputBackground": color_1.default.canvas.overlay,
    "settings.textInputBorder": color_1.default.border.default,
    "settings.textInputForeground": color_1.default.fg.default,
    // extensions
    "extensionBadge.remoteBackground": "#",
    "extensionBadge.remoteForeground": "#",
    "extensionButton.background": color_1.default.canvas.overlay,
    "extensionButton.foreground": color_1.default.fg.default,
    "extensionButton.hoverBackground": "#",
    "extensionButton.prominentBackground": color_1.default.canvas.overlay,
    "extensionButton.prominentForeground": color_1.default.fg.default,
    "extensionButton.prominentHoverBackground": "#",
    "extensionButton.separator": color_1.default.fg.default,
    "extensionIcon.preReleaseForeground": "#",
    "extensionIcon.sponsorForeground": "#",
    "extensionIcon.starForeground": color_1.default.fg.default,
    "extensionIcon.verifiedForeground": "#79c0ff",
    // action items
    "toolbar.activeBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.5)
        .saturate(0.1)
        .hex(),
    "toolbar.hoverBackground": (0, chroma_js_1.default)(color_1.default.canvas.default)
        .brighten(0.5)
        .saturate(0.1)
        .hex(),
    // badges
    "badge.background": color_1.default.accent.emphasis,
    "badge.foreground": color_1.default.fg.focus,
    // buttons
    "button.background": color_1.default.canvas.overlay,
    "button.border": color_1.default.border.default,
    "button.foreground": color_1.default.fg.focus,
    "button.hoverBackground": color_1.default.explicit.black,
    "button.secondaryBackground": color_1.default.fg.focus,
    "button.secondaryForeground": color_1.default.explicit.black,
    "button.secondaryHoverBackground": color_1.default.fg.focus,
    // checkbox
    "checkbox.background": color_1.default.canvas.overlay,
    "checkbox.border": color_1.default.border.default,
    "checkbox.foreground": color_1.default.fg.default,
    // input control
    "input.background": color_1.default.canvas.overlay,
    "input.border": color_1.default.border.default,
    "input.foreground": color_1.default.fg.focus,
    "input.placeholderForeground": color_1.default.fg.subtle,
    "inputOption.activeBackground": color_1.default.canvas.default,
    "inputOption.activeBorder": color_1.default.border.default,
    "inputOption.activeForeground": color_1.default.fg.default,
    "inputOption.hoverBackground": color_1.default.canvas.default,
    // dropdown control
    "dropdown.background": "#",
    "dropdown.border": color_1.default.canvas.overlay,
    "dropdown.foreground": color_1.default.fg.default,
    "dropdown.listBackground": color_1.default.canvas.surface,
    // scrollbar control
    "scrollbar.shadow": color_1.default.transparent,
    "scrollbarSlider.activeBackground": (0, chroma_js_1.default)(color_1.default.border.default)
        .alpha(0.3)
        .hex(),
    "scrollbarSlider.background": (0, chroma_js_1.default)(color_1.default.border.default).alpha(0.25).hex(),
    "scrollbarSlider.hoverBackground": (0, chroma_js_1.default)(color_1.default.border.default)
        .alpha(0.3)
        .hex(),
    // input validation
    "inputValidation.errorBackground": "#",
    "inputValidation.errorBorder": "#",
    "inputValidation.errorForeground": color_1.default.git.deleted,
    "inputValidation.infoBackground": "#",
    "inputValidation.infoBorder": "#",
    "inputValidation.infoForeground": "#",
    "inputValidation.warningBackground": "#",
    "inputValidation.warningBorder": "#",
    "inputValidation.warningForeground": "#",
    // git decorations
    "gitDecoration.addedResourceForeground": color_1.default.git.added,
    "gitDecoration.conflictingResourceForeground": "#",
    "gitDecoration.deletedResourceForeground": color_1.default.git.deleted,
    "gitDecoration.ignoredResourceForeground": color_1.default.fg.default,
    "gitDecoration.modifiedResourceForeground": color_1.default.git.modified,
    "gitDecoration.renamedResourceForeground": "#",
    "gitDecoration.stageDeletedResourceForeground": color_1.default.git.deleted,
    "gitDecoration.stageModifiedResourceForeground": color_1.default.git.modified,
    "gitDecoration.submoduleResourceForeground": "#",
    "gitDecoration.untrackedResourceForeground": color_1.default.git.added,
    // keybind labels
    "keybindingLabel.background": color_1.default.canvas.surface,
    "keybindingLabel.border": color_1.default.border.surface,
    "keybindingLabel.bottomBorder": color_1.default.border.surface,
    "keybindingLabel.foreground": color_1.default.fg.default,
    // keyboard shortcuts table
    "keybindingTable.rowsBackground": color_1.default.canvas.overlay,
    "keybindingTable.headerBackground": color_1.default.canvas.overlay,
    // charts
    "charts.blue": "#",
    "charts.foreground": "#",
    "charts.green": "#",
    "charts.lines": "#",
    "charts.orange": "#",
    "charts.purple": "#",
    "charts.red": "#",
    "charts.yellow": "#",
    // symbol icons
    "symbolIcon.arrayForeground": color_1.default.fg.default,
    "symbolIcon.booleanForeground": color_1.default.fg.default,
    "symbolIcon.classForeground": color_1.default.fg.default,
    "symbolIcon.colorForeground": color_1.default.fg.default,
    "symbolIcon.constantForeground": color_1.default.fg.default,
    "symbolIcon.constructorForeground": color_1.default.fg.default,
    "symbolIcon.enumeratorForeground": color_1.default.fg.default,
    "symbolIcon.enumeratorMemberForeground": color_1.default.fg.default,
    "symbolIcon.eventForeground": color_1.default.fg.default,
    "symbolIcon.fieldForeground": color_1.default.fg.default,
    "symbolIcon.fileForeground": color_1.default.fg.default,
    "symbolIcon.folderForeground": color_1.default.fg.default,
    "symbolIcon.functionForeground": color_1.default.fg.default,
    "symbolIcon.interfaceForeground": color_1.default.fg.default,
    "symbolIcon.keyForeground": color_1.default.fg.default,
    "symbolIcon.keywordForeground": color_1.default.fg.default,
    "symbolIcon.methodForeground": color_1.default.fg.default,
    "symbolIcon.moduleForeground": color_1.default.fg.default,
    "symbolIcon.namespaceForeground": color_1.default.fg.default,
    "symbolIcon.nullForeground": color_1.default.fg.default,
    "symbolIcon.numberForeground": color_1.default.fg.default,
    "symbolIcon.objectForeground": color_1.default.fg.default,
    "symbolIcon.operatorForeground": color_1.default.fg.default,
    "symbolIcon.packageForeground": color_1.default.fg.default,
    "symbolIcon.propertyForeground": color_1.default.fg.default,
    "symbolIcon.referenceForeground": color_1.default.fg.default,
    "symbolIcon.snippetForeground": color_1.default.fg.default,
    "symbolIcon.stringForeground": color_1.default.fg.default,
    "symbolIcon.structForeground": color_1.default.fg.default,
    "symbolIcon.textForeground": color_1.default.fg.default,
    "symbolIcon.typeParameterForeground": color_1.default.fg.default,
    "symbolIcon.unitForeground": color_1.default.fg.default,
    "symbolIcon.variableForeground": color_1.default.fg.default,
};
