import { Menu } from "../ui/Menu";
import { TitleBar } from "../ui/TitleBar";

export const workbenchColors = {
  ...TitleBar,
  ...Menu,
};

// export const workbenchColors = {
//   // general
//   descriptionForeground: colors.fg.default,
//   errorForeground: colors.git.deleted,
//   focusBorder: colors.accent.default,
//   foreground: colors.fg.default,
//   "icon.foreground": colors.fg.default,
//   "progressBar.background": colors.accent.default,
//   "sash.hoverBorder": colors.accent.default,
//   "selection.background": chroma(colors.accent.default).alpha(0.3).hex(),
//   "widget.shadow": colors.explicit.black,
//   // text
//   "textBlockQuote.background": colors.canvas.overlay,
//   "textBlockQuote.border": "#d2a8ff",
//   "textCodeBlock.background": colors.canvas.overlay,
//   "textLink.activeForeground": colors.fg.navigatable,
//   "textLink.foreground": colors.fg.navigatable,
//   "textPreformat.foreground": "#79c0ff",
//   "textSeparator.foreground": "#",
//   // menu
//   "menu.background": colors.canvas.surface,
//   "menu.border": colors.border.surface,
//   "menu.foreground": colors.fg.default,
//   "menu.selectionBackground": chroma(colors.canvas.surface)
//     .brighten(0.5)
//     .saturate(0.1)
//     .hex(),
//   "menu.selectionBorder": colors.transparent,
//   "menu.selectionForeground": colors.fg.focus,
//   "menu.separatorBackground": colors.separator.surface,
//   "menubar.selectionBackground": chroma(colors.canvas.default)
//     .brighten(0.5)
//     .saturate(0.1)
//     .hex(),
//   "menubar.selectionBorder": colors.transparent,
//   "menubar.selectionForeground": colors.fg.focus,
//   // title bar
//   "titleBar.activeBackground": colors.canvas.default,
//   "titleBar.activeForeground": colors.fg.default,
//   "titleBar.inactiveBackground": colors.canvas.default,
//   "titleBar.inactiveForeground": colors.fg.subtle,
//   "titleBar.border": colors.border.default,
//   // command center
//   "commandCenter.activeBackground": colors.canvas.overlay,
//   "commandCenter.activeForeground": colors.fg.focus,
//   "commandCenter.background": colors.canvas.overlay,
//   "commandCenter.border": colors.border.default,
//   "commandCenter.foreground": colors.fg.subtle,
//   // welcome page
//   "walkThrough.embeddedEditorBackground": "#",
//   "welcomePage.background": colors.canvas.overlay,
//   "welcomePage.progress.background": "#",
//   "welcomePage.progress.foreground": colors.accent.default,
//   "welcomePage.tileBackground": "#",
//   "welcomePage.tileHoverBackground": "#",
//   "welcomePage.tileShadow": "#",
//   // activity bar - general
//   "activityBar.background": colors.canvas.default,
//   "activityBar.border": colors.border.default,
//   "activityBar.dropBorder": colors.accent.default,
//   "activityBar.foreground": colors.fg.focus,
//   "activityBar.inactiveForeground": colors.fg.default,
//   // activity bar - active item
//   "activityBar.activeBackground": colors.transparent,
//   "activityBar.activeBorder": colors.canvas.default,
//   "activityBar.activeFocusBorder": colors.accent.default,
//   // activity bar - badges
//   "activityBarBadge.background": colors.accent.default,
//   "activityBarBadge.foreground": colors.fg.focus,
//   // sidebar - general
//   "sideBar.background": colors.canvas.default,
//   "sideBar.border": colors.border.default,
//   "sideBar.dropBackground": colors.accent.default,
//   "sideBar.foreground": colors.fg.default,
//   // sidebar - titles/headers
//   "sideBarSectionHeader.background": colors.canvas.default,
//   "sideBarSectionHeader.border": colors.canvas.default,
//   "sideBarSectionHeader.foreground": colors.fg.focus,
//   "sideBarTitle.foreground": colors.fg.focus,
//   // status bar - general
//   "statusBar.background": colors.canvas.default,
//   "statusBar.foreground": colors.fg.subtle,
//   "statusBar.border": colors.border.default,
//   "statusBar.debuggingBackground": colors.canvas.default,
//   "statusBar.debuggingForeground": colors.fg.subtle,
//   "statusBar.noFolderBackground": colors.canvas.default,
//   "statusBar.noFolderForeground": colors.fg.subtle,
//   // status bar - items
//   "statusBarItem.activeBackground": chroma(colors.canvas.default)
//     .brighten(0.5)
//     .saturate(0.1)
//     .hex(),
//   "statusBarItem.hoverBackground": chroma(colors.canvas.default)
//     .brighten(0.5)
//     .saturate(0.1)
//     .hex(),
//   "statusBarItem.remoteBackground": colors.canvas.default,
//   "statusBarItem.remoteForeground": colors.fg.default,
//   "statusBar.focusBorder": "#",
//   "statusBarItem.compactHoverBackground": chroma(colors.canvas.default)
//     .brighten(0.5)
//     .saturate(0.1)
//     .hex(),
//   "statusBarItem.errorBackground": "#",
//   "statusBarItem.errorForeground": "#",
//   "statusBarItem.focusBorder": colors.accent.default,
//   "statusBarItem.prominentBackground": "#",
//   "statusBarItem.prominentForeground": "#",
//   "statusBarItem.prominentHoverBackground": "#",
//   "statusBarItem.warningBackground": "#",
//   "statusBarItem.warningForeground": "#",
//   // tabs - general
//   "tab.border": colors.canvas.default,
//   "tab.hoverBackground": colors.canvas.overlay,
//   "tab.hoverBorder": colors.canvas.overlay,
//   "tab.hoverForeground": colors.fg.focus,
//   "tab.lastPinnedBorder": colors.border.default,
//   // tabs - active/inactive
//   "tab.activeBackground": colors.canvas.overlay,
//   "tab.activeBorder": colors.canvas.overlay,
//   "tab.activeBorderTop": colors.transparent,
//   "tab.activeForeground": colors.fg.focus,
//   "tab.activeModifiedBorder": "#",
//   "tab.inactiveBackground": colors.canvas.default,
//   "tab.inactiveForeground": colors.fg.subtle,
//   "tab.inactiveModifiedBorder": "#",
//   // tabs - unfocused active/inactive
//   "tab.unfocusedActiveBackground": colors.canvas.overlay,
//   "tab.unfocusedActiveBorder": colors.canvas.overlay,
//   "tab.unfocusedActiveBorderTop": colors.transparent,
//   "tab.unfocusedActiveForeground": colors.fg.subtle,
//   "tab.unfocusedActiveModifiedBorder": "#",
//   "tab.unfocusedInactiveBackground": colors.canvas.default,
//   "tab.unfocusedInactiveForeground": colors.fg.subtle,
//   "tab.unfocusedInactiveModifiedBorder": "#",
//   // tabs - unfocused hover
//   "tab.unfocusedHoverBackground": colors.canvas.overlay,
//   "tab.unfocusedHoverBorder": colors.canvas.overlay,
//   "tab.unfocusedHoverForeground": colors.fg.default,
//   // editor - general
//   "editor.background": colors.canvas.overlay,
//   "editor.foldBackground": chroma(colors.canvas.overlay)
//     .brighten(0.4)
//     .saturate(0.14)
//     .hex(),
//   "editor.foreground": colors.fg.default,
//   "editor.lineHighlightBackground": chroma(colors.canvas.overlay)
//     .brighten(0.2)
//     .saturate(0.15)
//     .hex(),
//   "editor.lineHighlightBorder": colors.transparent,
//   "editorCursor.background": colors.fg.focus,
//   "editorCursor.foreground": colors.accent.default,
//   "editorIndentGuide.activeBackground": chroma(colors.border.default)
//     .brighten(1)
//     .hex(),
//   "editorIndentGuide.background": colors.border.default,
//   "editorLineNumber.activeForeground": colors.fg.focus,
//   "editorLineNumber.foreground": colors.fg.subtle,
//   "editorLink.activeForeground": colors.fg.focus,
//   "editorPane.background": colors.canvas.default,
//   "editorRuler.foreground": colors.fg.default,
//   "editorWhitespace.foreground": colors.fg.default,
//   // editor - gutter
//   "editorGutter.addedBackground": colors.git.added,
//   "editorGutter.background": colors.canvas.overlay,
//   "editorGutter.deletedBackground": colors.git.deleted,
//   "editorGutter.foldingControlForeground": colors.fg.default,
//   "editorGutter.modifiedBackground": colors.git.modified,
//   // editor - status info
//   "editorError.foreground": colors.git.deleted,
//   "editorInfo.foreground": "#",
//   "editorWarning.foreground": "#",
//   "problemsErrorIcon.foreground": colors.git.deleted,
//   "problemsInfoIcon.foreground": "#",
//   "problemsWarningIcon.foreground": "#",
//   // editor - lightbulb
//   "editorLightBulb.foreground": colors.git.modified,
//   "editorLightBulbAutoFix.foreground": "#",
//   // editor - overview ruler
//   "editorOverviewRuler.addedForeground": chroma(colors.git.added)
//     .alpha(0.4)
//     .hex(),
//   "editorOverviewRuler.background": colors.canvas.overlay,
//   "editorOverviewRuler.border": colors.canvas.overlay,
//   "editorOverviewRuler.bracketMatchForeground": colors.fg.subtle,
//   "editorOverviewRuler.deletedForeground": chroma(colors.git.deleted)
//     .alpha(0.4)
//     .hex(),
//   "editorOverviewRuler.errorForeground": "#",
//   "editorOverviewRuler.findMatchForeground": "#",
//   "editorOverviewRuler.infoForeground": "#",
//   "editorOverviewRuler.modifiedForeground": chroma(colors.git.modified)
//     .alpha(0.4)
//     .hex(),
//   "editorOverviewRuler.rangeHighlightForeground": "#",
//   "editorOverviewRuler.selectionHighlightForeground": chroma(
//     colors.accent.default
//   )
//     .alpha(0.2)
//     .hex(),
//   "editorOverviewRuler.warningForeground": "#",
//   "editorOverviewRuler.wordHighlightForeground": "#d2a8ff33",
//   "editorOverviewRuler.wordHighlightStrongForeground": "#d2a8ff33",
//   // editor - selection
//   "editor.inactiveSelectionBackground": chroma(colors.accent.default)
//     .alpha(0.2)
//     .hex(),
//   "editor.selectionBackground": chroma(colors.accent.default).alpha(0.3).hex(),
//   "editor.selectionForeground": "#",
//   "editor.selectionHighlightBackground": chroma(colors.accent.default)
//     .alpha(0.3)
//     .hex(),
//   "editor.selectionHighlightBorder": chroma(colors.accent.default)
//     .alpha(0.3)
//     .hex(),
//   // editor - brackets
//   "editorBracketMatch.background": colors.transparent,
//   "editorBracketMatch.border": colors.fg.accent,
//   // editor - bracket pair colorization
//   "editorBracketHighlight.foreground1": "#",
//   "editorBracketHighlight.foreground2": "#",
//   "editorBracketHighlight.foreground3": "#",
//   "editorBracketHighlight.foreground4": "#",
//   "editorBracketHighlight.foreground5": "#",
//   "editorBracketHighlight.foreground6": "#",
//   // editor - bracket pair guides
//   "editorBracketPairGuide.activeBackground1": "#",
//   "editorBracketPairGuide.activeBackground2": "#",
//   "editorBracketPairGuide.activeBackground3": "#",
//   "editorBracketPairGuide.activeBackground4": "#",
//   "editorBracketPairGuide.activeBackground5": "#",
//   "editorBracketPairGuide.activeBackground6": "#",
//   "editorBracketPairGuide.background1": "#",
//   "editorBracketPairGuide.background2": "#",
//   "editorBracketPairGuide.background3": "#",
//   "editorBracketPairGuide.background4": "#",
//   "editorBracketPairGuide.background5": "#",
//   "editorBracketPairGuide.background6": "#",
//   // editor - occurence highlight
//   "editor.findMatchBackground": "#e8c77433",
//   "editor.findMatchBorder": "#e8c77433",
//   "editor.findMatchHighlightBackground": "#e8c77433",
//   "editor.findMatchHighlightBorder": "#e8c77433",
//   "editor.hoverHighlightBackground": chroma(colors.accent.default)
//     .alpha(0.2)
//     .hex(),
//   "editor.wordHighlightBackground": "#d2a8ff33",
//   "editor.wordHighlightBorder": "#d2a8ff33",
//   "editor.wordHighlightStrongBackground": "#d2a8ff33",
//   "editor.wordHighlightStrongBorder": "#d2a8ff33",
//   // editor - inline hints
//   "editorInlayHint.background": "#",
//   "editorInlayHint.foreground": "#",
//   "editorInlayHint.parameterBackground": "#",
//   "editorInlayHint.parameterForeground": "#",
//   "editorInlayHint.typeBackground": "#",
//   "editorInlayHint.typeForeground": "#",
//   // editor - snippets
//   "editor.snippetFinalTabstopHighlightBackground": chroma(colors.accent.default)
//     .alpha(0.3)
//     .hex(),
//   "editor.snippetTabstopHighlightBackground": chroma(colors.accent.default)
//     .alpha(0.2)
//     .hex(),
//   // breadcrumbs
//   "breadcrumb.activeSelectionForeground": colors.fg.focus,
//   "breadcrumb.background": colors.canvas.overlay,
//   "breadcrumb.focusForeground": colors.fg.focus,
//   "breadcrumb.foreground": colors.fg.default,
//   "breadcrumbPicker.background": colors.canvas.default,
//   // minimap
//   "minimap.background": colors.canvas.overlay,
//   "minimap.errorHighlight": "#",
//   "minimap.findMatchHighlight": "#",
//   "minimap.foregroundOpacity": "#",
//   "minimap.selectionHighlight": chroma(colors.accent.default).alpha(0.3).hex(),
//   "minimap.selectionOccurrenceHighlight": "#d2a8ff4d",
//   "minimap.warningHighlight": "#",
//   "minimapGutter.addedBackground": chroma(colors.git.added).alpha(0.4).hex(),
//   "minimapGutter.deletedBackground": chroma(colors.git.deleted)
//     .alpha(0.4)
//     .hex(),
//   "minimapGutter.modifiedBackground": chroma(colors.git.modified)
//     .alpha(0.4)
//     .hex(),
//   "minimapSlider.activeBackground": chroma(colors.border.default)
//     .alpha(0.3)
//     .hex(),
//   "minimapSlider.background": chroma(colors.border.default).alpha(0.2).hex(),
//   "minimapSlider.hoverBackground": chroma(colors.border.default)
//     .alpha(0.3)
//     .hex(),
//   // panel - general
//   "panel.background": colors.canvas.default,
//   "panel.border": colors.border.default,
//   "panel.dropBorder": colors.accent.default,
//   "panelInput.border": colors.border.default,
//   // panel - section
//   "panelSection.border": colors.border.default,
//   "panelSection.dropBackground": colors.accent.default,
//   "panelSectionHeader.background": colors.canvas.default,
//   "panelSectionHeader.border": colors.border.default,
//   "panelSectionHeader.foreground": colors.fg.subtle,
//   // panel - title
//   "panelTitle.activeBorder": colors.canvas.default,
//   "panelTitle.activeForeground": colors.fg.focus,
//   "panelTitle.inactiveForeground": colors.fg.subtle,
//   // terminal - general
//   "terminal.background": colors.canvas.default,
//   "terminal.border": colors.border.default,
//   "terminal.dropBackground": "#",
//   "terminal.foreground": colors.fg.default,
//   // "terminal.tab.activeBorder": null,
//   "terminalCursor.background": colors.fg.focus,
//   "terminalCursor.foreground": colors.accent.default,
//   // terminal - colors
//   "terminal.ansiBlack": colors.ansi.black.default,
//   "terminal.ansiBlue": colors.ansi.blue.default,
//   "terminal.ansiBrightBlack": colors.ansi.black.bright,
//   "terminal.ansiBrightBlue": colors.ansi.blue.bright,
//   "terminal.ansiBrightCyan": colors.ansi.cyan.bright,
//   "terminal.ansiBrightGreen": colors.ansi.green.bright,
//   "terminal.ansiBrightMagenta": colors.ansi.magenta.bright,
//   "terminal.ansiBrightRed": colors.ansi.red.bright,
//   "terminal.ansiBrightWhite": colors.ansi.white.bright,
//   "terminal.ansiBrightYellow": colors.ansi.yellow.bright,
//   "terminal.ansiCyan": colors.ansi.cyan.default,
//   "terminal.ansiGreen": colors.ansi.green.default,
//   "terminal.ansiMagenta": colors.ansi.magenta.default,
//   "terminal.ansiRed": colors.ansi.red.default,
//   "terminal.ansiWhite": colors.ansi.white.default,
//   "terminal.ansiYellow": colors.ansi.yellow.default,
//   // terminal - selection
//   "terminal.selectionBackground": chroma(colors.accent.default)
//     .alpha(0.3)
//     .hex(),
//   "terminal.selectionForeground": "#",
//   // terminal - occurence highlight
//   "terminal.findMatchBackground": "#",
//   "terminal.findMatchBorder": "#",
//   "terminal.findMatchHighlightBackground": "#",
//   "terminal.findMatchHighlightBorder": "#",
//   // terminal - overview ruler
//   "terminalOverviewRuler.cursorForeground": "#",
//   "terminalOverviewRuler.findMatchForeground": "#",
//   // terminal - command decoration
//   "terminalCommandDecoration.defaultBackground": "#",
//   "terminalCommandDecoration.errorBackground": "#",
//   "terminalCommandDecoration.successBackground": "#",
//   // editor widgets - general
//   "editorWidget.background": colors.canvas.surface,
//   "editorWidget.border": colors.border.surface,
//   "editorWidget.foreground": colors.fg.default,
//   "editorWidget.resizeBorder": colors.canvas.overlay,
//   // editor widgets - hover
//   "editorHoverWidget.background": colors.canvas.surface,
//   "editorHoverWidget.border": colors.border.surface,
//   "editorHoverWidget.foreground": colors.fg.default,
//   "editorHoverWidget.highlightForeground": "#",
//   "editorHoverWidget.statusBarBackground": colors.canvas.default,
//   // editor widgets - suggestions
//   "editorSuggestWidget.background": colors.canvas.surface,
//   "editorSuggestWidget.border": colors.border.surface,
//   "editorSuggestWidget.foreground": colors.fg.default,
//   "editorSuggestWidget.highlightForeground": colors.fg.focus,
//   "editorSuggestWidget.focusHighlightForeground": colors.fg.focus,
//   "editorSuggestWidget.selectedBackground": chroma(colors.canvas.surface)
//     .brighten(1)
//     .hex(),
//   "editorSuggestWidget.selectedForeground": colors.fg.focus,
//   "editorSuggestWidget.selectedIconForeground": colors.fg.focus,
//   "editorSuggestWidgetStatus.foreground": "#",
//   // editor groups - general
//   "editorGroup.border": colors.border.default,
//   "editorGroup.dropBackground": colors.accent.default,
//   "editorGroup.emptyBackground": colors.canvas.default,
//   // editor groups - header
//   "editorGroupHeader.border": colors.canvas.overlay,
//   "editorGroupHeader.noTabsBackground": "#",
//   "editorGroupHeader.tabsBackground": colors.canvas.default,
//   "editorGroupHeader.tabsBorder": colors.canvas.overlay,
//   // editor groups - drop-in prompt
//   "editorGroup.dropIntoPromptBackground": colors.accent.emphasis,
//   "editorGroup.dropIntoPromptBorder": colors.accent.default,
//   "editorGroup.dropIntoPromptForeground": colors.fg.onEmphasis,
//   "editorGroup.focusedEmptyBorder": colors.accent.default,
//   // editor groups - side-side border
//   "sideBySideEditor.horizontalBorder": colors.border.default,
//   "sideBySideEditor.verticalBorder": colors.border.default,
//   // list & trees - general
//   "list.deemphasizedForeground": "#",
//   "list.dropBackground": "#",
//   "list.highlightForeground": colors.fg.focus,
//   "tree.inactiveIndentGuidesStroke": colors.border.default,
//   "tree.indentGuidesStroke": colors.fg.default,
//   // lists & trees - active/inactive selected
//   "list.activeSelectionBackground": chroma(colors.canvas.default)
//     .brighten(0.4)
//     .saturate(0.1)
//     .hex(),
//   "list.activeSelectionForeground": colors.fg.focus,
//   "list.inactiveSelectionBackground": chroma(colors.canvas.default)
//     .brighten(0.4)
//     .saturate(0.1)
//     .hex(),
//   "list.inactiveSelectionForeground": colors.fg.default,
//   // lists & trees - hover
//   "list.hoverBackground": chroma(colors.canvas.default)
//     .brighten(0.4)
//     .saturate(0.1)
//     .hex(),
//   "list.hoverForeground": colors.fg.default,
//   // list & trees - information
//   "list.errorForeground": colors.git.deleted,
//   "list.invalidItemForeground": "#",
//   "list.warningForeground": "#",
//   // list & trees - filter match
//   "list.filterMatchBackground": "#",
//   "list.filterMatchBorder": "#",
//   // list & trees - focus
//   "list.focusBackground": chroma(colors.canvas.default)
//     .brighten(0.4)
//     .saturate(0.1)
//     .hex(),
//   "list.focusForeground": colors.fg.default,
//   "list.focusHighlightForeground": colors.fg.focus,
//   "list.inactiveFocusBackground": colors.transparent,
//   // list & trees - filter widget
//   "listFilterWidget.background": colors.canvas.surface,
//   "listFilterWidget.noMatchesOutline": "#",
//   "listFilterWidget.outline": "#",
//   // list & trees - tree
//   "tree.tableColumnsBorder": colors.border.default,
//   "tree.tableOddRowsBackground": colors.canvas.overlay,
//   // dif editor
//   "diffEditor.border": "#",
//   "diffEditor.diagonalFill": "#",
//   "diffEditor.insertedLineBackground": "#",
//   "diffEditor.insertedTextBackground": "#",
//   "diffEditor.insertedTextBorder": "#",
//   "diffEditor.removedLineBackground": "#",
//   "diffEditor.removedTextBackground": "#",
//   "diffEditor.removedTextBorder": "#",
//   // dif editor - gutter
//   "diffEditorGutter.insertedLineBackground": "#",
//   "diffEditorGutter.removedLineBackground": "#",
//   "diffEditorOverview.insertedForeground": "#",
//   "diffEditorOverview.removedForeground": "#",
//   "searchEditor.findMatchBackground": "#",
//   "searchEditor.findMatchBorder": "#",
//   "searchEditor.textInputBorder": "#",
//   // peek view - general
//   "peekView.border": colors.border.default,
//   "peekViewEditor.background": colors.canvas.overlay,
//   "peekViewEditor.matchHighlightBackground": "#",
//   "peekViewEditor.matchHighlightBorder": "#",
//   "peekViewEditorGutter.background": colors.canvas.overlay,
//   // peek view editor - results
//   "peekViewResult.background": colors.canvas.default,
//   "peekViewResult.fileForeground": "#",
//   "peekViewResult.lineForeground": colors.fg.default,
//   "peekViewResult.matchHighlightBackground": "#",
//   "peekViewResult.selectionBackground": chroma(colors.canvas.default)
//     .brighten(0.4)
//     .saturate(0.1)
//     .hex(),
//   "peekViewResult.selectionForeground": colors.fg.focus,
//   // peek view editor - title
//   "peekViewTitle.background": colors.canvas.default,
//   "peekViewTitleDescription.foreground": colors.fg.subtle,
//   "peekViewTitleLabel.foreground": colors.fg.focus,
//   // quick picker
//   "pickerGroup.border": colors.separator.surface,
//   "pickerGroup.foreground": colors.fg.focus,
//   "quickInput.background": colors.canvas.surface,
//   "quickInput.foreground": colors.fg.default,
//   "quickInputList.focusBackground": chroma(colors.canvas.surface)
//     .brighten(0.5)
//     .saturate(0.05)
//     .hex(),
//   "quickInputList.focusForeground": colors.fg.focus,
//   "quickInputList.focusIconForeground": colors.fg.focus,
//   "quickInputTitle.background": "#",
//   // notifications
//   "notificationCenter.border": "#",
//   "notificationCenterHeader.foreground": "#",
//   "notificationCenterHeader.background": "#",
//   "notificationToast.border": colors.border.default,
//   "notifications.foreground": colors.fg.default,
//   "notifications.background": chroma(colors.canvas.default)
//     .brighten(0.4)
//     .saturate(0.1)
//     .hex(),
//   "notifications.border": colors.border.default,
//   "notificationLink.foreground": "#",
//   // notifications - status info
//   "notificationsErrorIcon.foreground": "#",
//   "notificationsWarningIcon.foreground": "#",
//   "notificationsInfoIcon.foreground": "#",
//   // banner
//   "banner.background": "#",
//   "banner.foreground": "#",
//   "banner.iconForeground": "#",
//   // settings - general
//   "settings.focusedRowBackground": colors.canvas.default,
//   "settings.focusedRowBorder": colors.border.default,
//   "settings.modifiedItemIndicator": colors.explicit.orange,
//   "settings.rowHoverBackground": colors.canvas.default,
//   "settings.sashBorder": colors.border.default,
//   // settings - header
//   "settings.headerBorder": colors.border.default,
//   "settings.headerForeground": colors.fg.focus,
//   // settings - checkbox input
//   "settings.checkboxBackground": colors.canvas.overlay,
//   "settings.checkboxBorder": colors.border.default,
//   "settings.checkboxForeground": colors.fg.default,
//   // settings - dropdown input
//   "settings.dropdownBackground": colors.canvas.overlay,
//   "settings.dropdownBorder": colors.border.default,
//   "settings.dropdownForeground": colors.fg.default,
//   "settings.dropdownListBorder": colors.canvas.overlay,
//   // settings - number input
//   "settings.numberInputBackground": colors.canvas.overlay,
//   "settings.numberInputBorder": colors.border.default,
//   "settings.numberInputForeground": colors.fg.default,
//   // settings - text input
//   "settings.textInputBackground": colors.canvas.overlay,
//   "settings.textInputBorder": colors.border.default,
//   "settings.textInputForeground": colors.fg.default,
//   // extensions
//   "extensionBadge.remoteBackground": "#",
//   "extensionBadge.remoteForeground": "#",
//   "extensionButton.background": colors.canvas.overlay,
//   "extensionButton.foreground": colors.fg.default,
//   "extensionButton.hoverBackground": "#",
//   "extensionButton.prominentBackground": colors.canvas.overlay,
//   "extensionButton.prominentForeground": colors.fg.default,
//   "extensionButton.prominentHoverBackground": "#",
//   "extensionButton.separator": colors.fg.default,
//   "extensionIcon.preReleaseForeground": "#",
//   "extensionIcon.sponsorForeground": "#",
//   "extensionIcon.starForeground": colors.fg.default,
//   "extensionIcon.verifiedForeground": "#79c0ff",
//   // action items
//   "toolbar.activeBackground": chroma(colors.canvas.default)
//     .brighten(0.5)
//     .saturate(0.1)
//     .hex(),
//   "toolbar.hoverBackground": chroma(colors.canvas.default)
//     .brighten(0.5)
//     .saturate(0.1)
//     .hex(),
//   // badges
//   "badge.background": colors.accent.emphasis,
//   "badge.foreground": colors.fg.focus,
//   // buttons
//   "button.background": colors.canvas.overlay,
//   "button.border": colors.border.default,
//   "button.foreground": colors.fg.focus,
//   "button.hoverBackground": colors.explicit.black,
//   "button.secondaryBackground": colors.fg.focus,
//   "button.secondaryForeground": colors.explicit.black,
//   "button.secondaryHoverBackground": colors.fg.focus,
//   // checkbox
//   "checkbox.background": colors.canvas.overlay,
//   "checkbox.border": colors.border.default,
//   "checkbox.foreground": colors.fg.default,
//   // input control
//   "input.background": colors.canvas.overlay,
//   "input.border": colors.border.default,
//   "input.foreground": colors.fg.focus,
//   "input.placeholderForeground": colors.fg.subtle,
//   "inputOption.activeBackground": colors.canvas.default,
//   "inputOption.activeBorder": colors.border.default,
//   "inputOption.activeForeground": colors.fg.default,
//   "inputOption.hoverBackground": colors.canvas.default,
//   // dropdown control
//   "dropdown.background": "#",
//   "dropdown.border": colors.canvas.overlay,
//   "dropdown.foreground": colors.fg.default,
//   "dropdown.listBackground": colors.canvas.surface,
//   // scrollbar control
//   "scrollbar.shadow": colors.transparent,
//   "scrollbarSlider.activeBackground": chroma(colors.border.default)
//     .alpha(0.3)
//     .hex(),
//   "scrollbarSlider.background": chroma(colors.border.default).alpha(0.25).hex(),
//   "scrollbarSlider.hoverBackground": chroma(colors.border.default)
//     .alpha(0.3)
//     .hex(),
//   // input validation
//   "inputValidation.errorBackground": "#",
//   "inputValidation.errorBorder": "#",
//   "inputValidation.errorForeground": colors.git.deleted,
//   "inputValidation.infoBackground": "#",
//   "inputValidation.infoBorder": "#",
//   "inputValidation.infoForeground": "#",
//   "inputValidation.warningBackground": "#",
//   "inputValidation.warningBorder": "#",
//   "inputValidation.warningForeground": "#",
//   // git decorations
//   "gitDecoration.addedResourceForeground": colors.git.added,
//   "gitDecoration.conflictingResourceForeground": "#",
//   "gitDecoration.deletedResourceForeground": colors.git.deleted,
//   "gitDecoration.ignoredResourceForeground": colors.fg.default,
//   "gitDecoration.modifiedResourceForeground": colors.git.modified,
//   "gitDecoration.renamedResourceForeground": "#",
//   "gitDecoration.stageDeletedResourceForeground": colors.git.deleted,
//   "gitDecoration.stageModifiedResourceForeground": colors.git.modified,
//   "gitDecoration.submoduleResourceForeground": "#",
//   "gitDecoration.untrackedResourceForeground": colors.git.added,
//   // keybind labels
//   "keybindingLabel.background": colors.canvas.surface,
//   "keybindingLabel.border": colors.border.surface,
//   "keybindingLabel.bottomBorder": colors.border.surface,
//   "keybindingLabel.foreground": colors.fg.default,
//   // keyboard shortcuts table
//   "keybindingTable.rowsBackground": colors.canvas.overlay,
//   "keybindingTable.headerBackground": colors.canvas.overlay,
//   // charts
//   "charts.blue": "#",
//   "charts.foreground": "#",
//   "charts.green": "#",
//   "charts.lines": "#",
//   "charts.orange": "#",
//   "charts.purple": "#",
//   "charts.red": "#",
//   "charts.yellow": "#",
//   // symbol icons
//   "symbolIcon.arrayForeground": colors.fg.default,
//   "symbolIcon.booleanForeground": colors.fg.default,
//   "symbolIcon.classForeground": colors.fg.default,
//   "symbolIcon.colorForeground": colors.fg.default,
//   "symbolIcon.constantForeground": colors.fg.default,
//   "symbolIcon.constructorForeground": colors.fg.default,
//   "symbolIcon.enumeratorForeground": colors.fg.default,
//   "symbolIcon.enumeratorMemberForeground": colors.fg.default,
//   "symbolIcon.eventForeground": colors.fg.default,
//   "symbolIcon.fieldForeground": colors.fg.default,
//   "symbolIcon.fileForeground": colors.fg.default,
//   "symbolIcon.folderForeground": colors.fg.default,
//   "symbolIcon.functionForeground": colors.fg.default,
//   "symbolIcon.interfaceForeground": colors.fg.default,
//   "symbolIcon.keyForeground": colors.fg.default,
//   "symbolIcon.keywordForeground": colors.fg.default,
//   "symbolIcon.methodForeground": colors.fg.default,
//   "symbolIcon.moduleForeground": colors.fg.default,
//   "symbolIcon.namespaceForeground": colors.fg.default,
//   "symbolIcon.nullForeground": colors.fg.default,
//   "symbolIcon.numberForeground": colors.fg.default,
//   "symbolIcon.objectForeground": colors.fg.default,
//   "symbolIcon.operatorForeground": colors.fg.default,
//   "symbolIcon.packageForeground": colors.fg.default,
//   "symbolIcon.propertyForeground": colors.fg.default,
//   "symbolIcon.referenceForeground": colors.fg.default,
//   "symbolIcon.snippetForeground": colors.fg.default,
//   "symbolIcon.stringForeground": colors.fg.default,
//   "symbolIcon.structForeground": colors.fg.default,
//   "symbolIcon.textForeground": colors.fg.default,
//   "symbolIcon.typeParameterForeground": colors.fg.default,
//   "symbolIcon.unitForeground": colors.fg.default,
//   "symbolIcon.variableForeground": colors.fg.default,
// };
