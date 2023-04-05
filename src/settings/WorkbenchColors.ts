import chroma from "chroma-js";
import color from "../color";

export const workbenchColors = {
  // general
  descriptionForeground: color.fg.default,
  errorForeground: color.git.deleted,
  focusBorder: color.accent.default,
  foreground: color.fg.default,
  "icon.foreground": color.fg.default,
  "progressBar.background": color.accent.default,
  "sash.hoverBorder": color.accent.default,
  "selection.background": chroma(color.accent.default).alpha(0.3).hex(),
  "widget.shadow": color.explicit.black,
  // text
  "textBlockQuote.background": color.canvas.overlay,
  "textBlockQuote.border": "#d2a8ff",
  "textCodeBlock.background": color.canvas.overlay,
  "textLink.activeForeground": color.fg.interact,
  "textLink.foreground": color.fg.interact,
  "textPreformat.foreground": "#79c0ff",
  "textSeparator.foreground": "#",
  // menu
  "menu.background": color.canvas.surface,
  "menu.border": color.border.surface,
  "menu.foreground": color.fg.default,
  "menu.selectionBackground": chroma(color.canvas.surface)
    .brighten(0.5)
    .saturate(0.1)
    .hex(),
  "menu.selectionBorder": color.transparent,
  "menu.selectionForeground": color.fg.focus,
  "menu.separatorBackground": color.separator.surface,
  "menubar.selectionBackground": chroma(color.canvas.default)
    .brighten(0.5)
    .saturate(0.1)
    .hex(),
  "menubar.selectionBorder": color.transparent,
  "menubar.selectionForeground": color.fg.focus,
  // title bar
  "titleBar.activeBackground": color.canvas.default,
  "titleBar.activeForeground": color.fg.default,
  "titleBar.inactiveBackground": color.canvas.default,
  "titleBar.inactiveForeground": color.fg.subtle,
  "titleBar.border": color.border.default,
  // command center
  "commandCenter.activeBackground": color.canvas.overlay,
  "commandCenter.activeForeground": color.fg.focus,
  "commandCenter.background": color.canvas.overlay,
  "commandCenter.border": color.border.default,
  "commandCenter.foreground": color.fg.subtle,
  // welcome page
  "walkThrough.embeddedEditorBackground": "#",
  "welcomePage.background": color.canvas.overlay,
  "welcomePage.progress.background": "#",
  "welcomePage.progress.foreground": color.accent.default,
  "welcomePage.tileBackground": "#",
  "welcomePage.tileHoverBackground": "#",
  "welcomePage.tileShadow": "#",
  // activity bar - general
  "activityBar.background": color.canvas.default,
  "activityBar.border": color.border.default,
  "activityBar.dropBorder": color.accent.default,
  "activityBar.foreground": color.fg.focus,
  "activityBar.inactiveForeground": color.fg.default,
  // activity bar - active item
  "activityBar.activeBackground": color.transparent,
  "activityBar.activeBorder": color.canvas.default,
  "activityBar.activeFocusBorder": color.accent.default,
  // activity bar - badges
  "activityBarBadge.background": color.accent.default,
  "activityBarBadge.foreground": color.fg.focus,
  // sidebar - general
  "sideBar.background": color.canvas.default,
  "sideBar.border": color.border.default,
  "sideBar.dropBackground": color.accent.default,
  "sideBar.foreground": color.fg.default,
  // sidebar - titles/headers
  "sideBarSectionHeader.background": color.canvas.default,
  "sideBarSectionHeader.border": color.canvas.default,
  "sideBarSectionHeader.foreground": color.fg.focus,
  "sideBarTitle.foreground": color.fg.focus,
  // status bar - general
  "statusBar.background": color.canvas.default,
  "statusBar.foreground": color.fg.subtle,
  "statusBar.border": color.border.default,
  "statusBar.debuggingBackground": color.canvas.default,
  "statusBar.debuggingForeground": color.fg.subtle,
  "statusBar.noFolderBackground": color.canvas.default,
  "statusBar.noFolderForeground": color.fg.subtle,
  // status bar - items
  "statusBarItem.activeBackground": chroma(color.canvas.default)
    .brighten(0.5)
    .saturate(0.1)
    .hex(),
  "statusBarItem.hoverBackground": chroma(color.canvas.default)
    .brighten(0.5)
    .saturate(0.1)
    .hex(),
  "statusBarItem.remoteBackground": color.canvas.default,
  "statusBarItem.remoteForeground": color.fg.default,
  "statusBar.focusBorder": "#",
  "statusBarItem.compactHoverBackground": chroma(color.canvas.default)
    .brighten(0.5)
    .saturate(0.1)
    .hex(),
  "statusBarItem.errorBackground": "#",
  "statusBarItem.errorForeground": "#",
  "statusBarItem.focusBorder": color.accent.default,
  "statusBarItem.prominentBackground": "#",
  "statusBarItem.prominentForeground": "#",
  "statusBarItem.prominentHoverBackground": "#",
  "statusBarItem.warningBackground": "#",
  "statusBarItem.warningForeground": "#",
  // tabs - general
  "tab.border": color.canvas.default,
  "tab.hoverBackground": color.canvas.overlay,
  "tab.hoverBorder": color.canvas.overlay,
  "tab.hoverForeground": color.fg.focus,
  "tab.lastPinnedBorder": color.border.default,
  // tabs - active/inactive
  "tab.activeBackground": color.canvas.overlay,
  "tab.activeBorder": color.canvas.overlay,
  "tab.activeBorderTop": color.transparent,
  "tab.activeForeground": color.fg.focus,
  "tab.activeModifiedBorder": "#",
  "tab.inactiveBackground": color.canvas.default,
  "tab.inactiveForeground": color.fg.subtle,
  "tab.inactiveModifiedBorder": "#",
  // tabs - unfocused active/inactive
  "tab.unfocusedActiveBackground": color.canvas.overlay,
  "tab.unfocusedActiveBorder": color.canvas.overlay,
  "tab.unfocusedActiveBorderTop": color.transparent,
  "tab.unfocusedActiveForeground": color.fg.subtle,
  "tab.unfocusedActiveModifiedBorder": "#",
  "tab.unfocusedInactiveBackground": color.canvas.default,
  "tab.unfocusedInactiveForeground": color.fg.subtle,
  "tab.unfocusedInactiveModifiedBorder": "#",
  // tabs - unfocused hover
  "tab.unfocusedHoverBackground": color.canvas.overlay,
  "tab.unfocusedHoverBorder": color.canvas.overlay,
  "tab.unfocusedHoverForeground": color.fg.default,
  // editor - general
  "editor.background": color.canvas.overlay,
  "editor.foldBackground": chroma(color.canvas.overlay)
    .brighten(0.4)
    .saturate(0.14)
    .hex(),
  "editor.foreground": color.fg.default,
  "editor.lineHighlightBackground": chroma(color.canvas.overlay)
    .brighten(0.2)
    .saturate(0.12)
    .hex(),
  "editor.lineHighlightBorder": color.transparent,
  "editorCursor.background": color.fg.focus,
  "editorCursor.foreground": color.accent.default,
  "editorIndentGuide.activeBackground": chroma(color.border.default)
    .brighten(1)
    .hex(),
  "editorIndentGuide.background": color.border.default,
  "editorLineNumber.activeForeground": color.fg.focus,
  "editorLineNumber.foreground": color.fg.default,
  "editorLink.activeForeground": color.fg.focus,
  "editorPane.background": color.canvas.default,
  "editorRuler.foreground": color.fg.default,
  "editorWhitespace.foreground": color.fg.default,
  // editor - gutter
  "editorGutter.addedBackground": color.git.added,
  "editorGutter.background": color.canvas.overlay,
  "editorGutter.deletedBackground": color.git.deleted,
  "editorGutter.foldingControlForeground": color.fg.default,
  "editorGutter.modifiedBackground": color.git.modified,
  // editor - status info
  "editorError.foreground": color.git.deleted,
  "editorInfo.foreground": "#",
  "editorWarning.foreground": "#",
  "problemsErrorIcon.foreground": color.git.deleted,
  "problemsInfoIcon.foreground": "#",
  "problemsWarningIcon.foreground": "#",
  // editor - lightbulb
  "editorLightBulb.foreground": color.git.modified,
  "editorLightBulbAutoFix.foreground": "#",
  // editor - overview ruler
  "editorOverviewRuler.addedForeground": chroma(color.git.added)
    .alpha(0.4)
    .hex(),
  "editorOverviewRuler.background": color.canvas.overlay,
  "editorOverviewRuler.border": color.canvas.overlay,
  "editorOverviewRuler.bracketMatchForeground": color.fg.subtle,
  "editorOverviewRuler.deletedForeground": chroma(color.git.deleted)
    .alpha(0.4)
    .hex(),
  "editorOverviewRuler.errorForeground": "#",
  "editorOverviewRuler.findMatchForeground": "#",
  "editorOverviewRuler.infoForeground": "#",
  "editorOverviewRuler.modifiedForeground": chroma(color.git.modified)
    .alpha(0.4)
    .hex(),
  "editorOverviewRuler.rangeHighlightForeground": "#",
  "editorOverviewRuler.selectionHighlightForeground": chroma(
    color.accent.default
  )
    .alpha(0.2)
    .hex(),
  "editorOverviewRuler.warningForeground": "#",
  "editorOverviewRuler.wordHighlightForeground": "#d2a8ff33",
  "editorOverviewRuler.wordHighlightStrongForeground": "#d2a8ff33",
  // editor - selection
  "editor.inactiveSelectionBackground": chroma(color.accent.default)
    .alpha(0.2)
    .hex(),
  "editor.selectionBackground": chroma(color.accent.default).alpha(0.3).hex(),
  "editor.selectionForeground": "#",
  "editor.selectionHighlightBackground": chroma(color.accent.default)
    .alpha(0.3)
    .hex(),
  "editor.selectionHighlightBorder": chroma(color.accent.default)
    .alpha(0.3)
    .hex(),
  // editor - brackets
  "editorBracketMatch.background": color.transparent,
  "editorBracketMatch.border": color.fg.subtle,
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
  "editor.hoverHighlightBackground": chroma(color.accent.default)
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
  "editor.snippetFinalTabstopHighlightBackground": chroma(color.accent.default)
    .alpha(0.3)
    .hex(),
  "editor.snippetTabstopHighlightBackground": chroma(color.accent.default)
    .alpha(0.2)
    .hex(),
  // breadcrumbs
  "breadcrumb.activeSelectionForeground": color.fg.focus,
  "breadcrumb.background": color.canvas.overlay,
  "breadcrumb.focusForeground": color.fg.focus,
  "breadcrumb.foreground": color.fg.default,
  "breadcrumbPicker.background": color.canvas.default,
  // minimap
  "minimap.background": color.canvas.overlay,
  "minimap.errorHighlight": "#",
  "minimap.findMatchHighlight": "#",
  "minimap.foregroundOpacity": "#",
  "minimap.selectionHighlight": chroma(color.accent.default).alpha(0.3).hex(),
  "minimap.selectionOccurrenceHighlight": "#d2a8ff4d",
  "minimap.warningHighlight": "#",
  "minimapGutter.addedBackground": chroma(color.git.added).alpha(0.4).hex(),
  "minimapGutter.deletedBackground": chroma(color.git.deleted).alpha(0.4).hex(),
  "minimapGutter.modifiedBackground": chroma(color.git.modified)
    .alpha(0.4)
    .hex(),
  "minimapSlider.activeBackground": chroma(color.border.default)
    .alpha(0.3)
    .hex(),
  "minimapSlider.background": chroma(color.border.default).alpha(0.2).hex(),
  "minimapSlider.hoverBackground": chroma(color.border.default)
    .alpha(0.3)
    .hex(),
  // panel - general
  "panel.background": color.canvas.default,
  "panel.border": color.border.default,
  "panel.dropBorder": color.accent.default,
  "panelInput.border": color.border.default,
  // panel - section
  "panelSection.border": color.border.default,
  "panelSection.dropBackground": color.accent.default,
  "panelSectionHeader.background": color.canvas.default,
  "panelSectionHeader.border": color.border.default,
  "panelSectionHeader.foreground": color.fg.subtle,
  // panel - title
  "panelTitle.activeBorder": color.canvas.default,
  "panelTitle.activeForeground": color.fg.focus,
  "panelTitle.inactiveForeground": color.fg.subtle,
  // terminal - general
  "terminal.background": color.canvas.default,
  "terminal.border": color.border.default,
  "terminal.dropBackground": "#",
  "terminal.foreground": color.fg.default,
  // "terminal.tab.activeBorder": null,
  "terminalCursor.background": color.fg.focus,
  "terminalCursor.foreground": color.accent.default,
  // terminal - colors
  "terminal.ansiBlack": color.ansi.black.default,
  "terminal.ansiBlue": color.ansi.blue.default,
  "terminal.ansiBrightBlack": color.ansi.black.bright,
  "terminal.ansiBrightBlue": color.ansi.blue.bright,
  "terminal.ansiBrightCyan": color.ansi.cyan.bright,
  "terminal.ansiBrightGreen": color.ansi.green.bright,
  "terminal.ansiBrightMagenta": color.ansi.magenta.bright,
  "terminal.ansiBrightRed": color.ansi.red.bright,
  "terminal.ansiBrightWhite": color.ansi.white.bright,
  "terminal.ansiBrightYellow": color.ansi.yellow.bright,
  "terminal.ansiCyan": color.ansi.cyan.default,
  "terminal.ansiGreen": color.ansi.green.default,
  "terminal.ansiMagenta": color.ansi.magenta.default,
  "terminal.ansiRed": color.ansi.red.default,
  "terminal.ansiWhite": color.ansi.white.default,
  "terminal.ansiYellow": color.ansi.yellow.default,
  // terminal - selection
  "terminal.selectionBackground": chroma(color.accent.default).alpha(0.3).hex(),
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
  "editorWidget.background": color.canvas.surface,
  "editorWidget.border": color.border.surface,
  "editorWidget.foreground": color.fg.default,
  "editorWidget.resizeBorder": color.canvas.overlay,
  // editor widgets - hover
  "editorHoverWidget.background": color.canvas.surface,
  "editorHoverWidget.border": color.border.surface,
  "editorHoverWidget.foreground": color.fg.default,
  "editorHoverWidget.highlightForeground": "#",
  "editorHoverWidget.statusBarBackground": color.canvas.default,
  // editor widgets - suggestions
  "editorSuggestWidget.background": color.canvas.surface,
  "editorSuggestWidget.border": color.border.surface,
  "editorSuggestWidget.foreground": color.fg.default,
  "editorSuggestWidget.highlightForeground": color.fg.focus,
  "editorSuggestWidget.focusHighlightForeground": color.fg.focus,
  "editorSuggestWidget.selectedBackground": chroma(color.canvas.surface)
    .brighten(1)
    .hex(),
  "editorSuggestWidget.selectedForeground": color.fg.focus,
  "editorSuggestWidget.selectedIconForeground": color.fg.focus,
  "editorSuggestWidgetStatus.foreground": "#",
  // editor groups - general
  "editorGroup.border": color.border.default,
  "editorGroup.dropBackground": color.accent.default,
  "editorGroup.emptyBackground": color.canvas.default,
  // editor groups - header
  "editorGroupHeader.border": color.canvas.overlay,
  "editorGroupHeader.noTabsBackground": "#",
  "editorGroupHeader.tabsBackground": color.canvas.default,
  "editorGroupHeader.tabsBorder": color.canvas.overlay,
  // editor groups - drop-in prompt
  "editorGroup.dropIntoPromptBackground": color.accent.emphasis,
  "editorGroup.dropIntoPromptBorder": color.accent.default,
  "editorGroup.dropIntoPromptForeground": color.fg.onEmphasis,
  "editorGroup.focusedEmptyBorder": color.accent.default,
  // editor groups - side-side border
  "sideBySideEditor.horizontalBorder": color.border.default,
  "sideBySideEditor.verticalBorder": color.border.default,
  // list & trees - general
  "list.deemphasizedForeground": "#",
  "list.dropBackground": "#",
  "list.highlightForeground": color.fg.focus,
  "tree.inactiveIndentGuidesStroke": color.border.default,
  "tree.indentGuidesStroke": color.fg.default,
  // lists & trees - active/inactive selected
  "list.activeSelectionBackground": chroma(color.canvas.default)
    .brighten(0.4)
    .saturate(0.1)
    .hex(),
  "list.activeSelectionForeground": color.fg.focus,
  "list.inactiveSelectionBackground": chroma(color.canvas.default)
    .brighten(0.4)
    .saturate(0.1)
    .hex(),
  "list.inactiveSelectionForeground": color.fg.default,
  // lists & trees - hover
  "list.hoverBackground": chroma(color.canvas.default)
    .brighten(0.4)
    .saturate(0.1)
    .hex(),
  "list.hoverForeground": color.fg.default,
  // list & trees - information
  "list.errorForeground": color.git.deleted,
  "list.invalidItemForeground": "#",
  "list.warningForeground": "#",
  // list & trees - filter match
  "list.filterMatchBackground": "#",
  "list.filterMatchBorder": "#",
  // list & trees - focus
  "list.focusBackground": chroma(color.canvas.default)
    .brighten(0.4)
    .saturate(0.1)
    .hex(),
  "list.focusForeground": color.fg.default,
  "list.focusHighlightForeground": color.fg.focus,
  "list.inactiveFocusBackground": color.transparent,
  // list & trees - filter widget
  "listFilterWidget.background": color.canvas.surface,
  "listFilterWidget.noMatchesOutline": "#",
  "listFilterWidget.outline": "#",
  // list & trees - tree
  "tree.tableColumnsBorder": color.border.default,
  "tree.tableOddRowsBackground": color.canvas.overlay,
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
  "peekView.border": color.border.default,
  "peekViewEditor.background": color.canvas.overlay,
  "peekViewEditor.matchHighlightBackground": "#",
  "peekViewEditor.matchHighlightBorder": "#",
  "peekViewEditorGutter.background": color.canvas.overlay,
  // peek view editor - results
  "peekViewResult.background": color.canvas.default,
  "peekViewResult.fileForeground": "#",
  "peekViewResult.lineForeground": color.fg.default,
  "peekViewResult.matchHighlightBackground": "#",
  "peekViewResult.selectionBackground": chroma(color.canvas.default)
    .brighten(0.4)
    .saturate(0.1)
    .hex(),
  "peekViewResult.selectionForeground": color.fg.focus,
  // peek view editor - title
  "peekViewTitle.background": color.canvas.default,
  "peekViewTitleDescription.foreground": color.fg.subtle,
  "peekViewTitleLabel.foreground": color.fg.focus,
  // quick picker
  "pickerGroup.border": color.separator.surface,
  "pickerGroup.foreground": color.fg.focus,
  "quickInput.background": color.canvas.surface,
  "quickInput.foreground": color.fg.default,
  "quickInputList.focusBackground": chroma(color.canvas.surface)
    .brighten(0.5)
    .saturate(0.05)
    .hex(),
  "quickInputList.focusForeground": color.fg.focus,
  "quickInputList.focusIconForeground": color.fg.focus,
  "quickInputTitle.background": "#",
  // notifications
  "notificationCenter.border": "#",
  "notificationCenterHeader.foreground": "#",
  "notificationCenterHeader.background": "#",
  "notificationToast.border": color.border.default,
  "notifications.foreground": color.fg.default,
  "notifications.background": chroma(color.canvas.default)
    .brighten(0.4)
    .saturate(0.1)
    .hex(),
  "notifications.border": color.border.default,
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
  "settings.focusedRowBackground": color.canvas.default,
  "settings.focusedRowBorder": color.border.default,
  "settings.modifiedItemIndicator": color.explicit.orange,
  "settings.rowHoverBackground": color.canvas.default,
  "settings.sashBorder": color.border.default,
  // settings - header
  "settings.headerBorder": color.border.default,
  "settings.headerForeground": color.fg.focus,
  // settings - checkbox input
  "settings.checkboxBackground": color.canvas.overlay,
  "settings.checkboxBorder": color.border.default,
  "settings.checkboxForeground": color.fg.default,
  // settings - dropdown input
  "settings.dropdownBackground": color.canvas.overlay,
  "settings.dropdownBorder": color.border.default,
  "settings.dropdownForeground": color.fg.default,
  "settings.dropdownListBorder": color.canvas.overlay,
  // settings - number input
  "settings.numberInputBackground": color.canvas.overlay,
  "settings.numberInputBorder": color.border.default,
  "settings.numberInputForeground": color.fg.default,
  // settings - text input
  "settings.textInputBackground": color.canvas.overlay,
  "settings.textInputBorder": color.border.default,
  "settings.textInputForeground": color.fg.default,
  // extensions
  "extensionBadge.remoteBackground": "#",
  "extensionBadge.remoteForeground": "#",
  "extensionButton.background": color.canvas.overlay,
  "extensionButton.foreground": color.fg.default,
  "extensionButton.hoverBackground": "#",
  "extensionButton.prominentBackground": color.canvas.overlay,
  "extensionButton.prominentForeground": color.fg.default,
  "extensionButton.prominentHoverBackground": "#",
  "extensionButton.separator": color.fg.default,
  "extensionIcon.preReleaseForeground": "#",
  "extensionIcon.sponsorForeground": "#",
  "extensionIcon.starForeground": color.fg.default,
  "extensionIcon.verifiedForeground": "#79c0ff",
  // action items
  "toolbar.activeBackground": chroma(color.canvas.default)
    .brighten(0.5)
    .saturate(0.1)
    .hex(),
  "toolbar.hoverBackground": chroma(color.canvas.default)
    .brighten(0.5)
    .saturate(0.1)
    .hex(),
  // badges
  "badge.background": color.accent.emphasis,
  "badge.foreground": color.fg.focus,
  // buttons
  "button.background": color.canvas.overlay,
  "button.border": color.border.default,
  "button.foreground": color.fg.focus,
  "button.hoverBackground": color.explicit.black,
  "button.secondaryBackground": color.fg.focus,
  "button.secondaryForeground": color.explicit.black,
  "button.secondaryHoverBackground": color.fg.focus,
  // checkbox
  "checkbox.background": color.canvas.overlay,
  "checkbox.border": color.border.default,
  "checkbox.foreground": color.fg.default,
  // input control
  "input.background": color.canvas.overlay,
  "input.border": color.border.default,
  "input.foreground": color.fg.focus,
  "input.placeholderForeground": color.fg.subtle,
  "inputOption.activeBackground": color.canvas.default,
  "inputOption.activeBorder": color.border.default,
  "inputOption.activeForeground": color.fg.default,
  "inputOption.hoverBackground": color.canvas.default,
  // dropdown control
  "dropdown.background": "#",
  "dropdown.border": color.canvas.overlay,
  "dropdown.foreground": color.fg.default,
  "dropdown.listBackground": color.canvas.surface,
  // scrollbar control
  "scrollbar.shadow": color.transparent,
  "scrollbarSlider.activeBackground": chroma(color.border.default)
    .alpha(0.3)
    .hex(),
  "scrollbarSlider.background": chroma(color.border.default).alpha(0.25).hex(),
  "scrollbarSlider.hoverBackground": chroma(color.border.default)
    .alpha(0.3)
    .hex(),
  // input validation
  "inputValidation.errorBackground": "#",
  "inputValidation.errorBorder": "#",
  "inputValidation.errorForeground": color.git.deleted,
  "inputValidation.infoBackground": "#",
  "inputValidation.infoBorder": "#",
  "inputValidation.infoForeground": "#",
  "inputValidation.warningBackground": "#",
  "inputValidation.warningBorder": "#",
  "inputValidation.warningForeground": "#",
  // git decorations
  "gitDecoration.addedResourceForeground": color.git.added,
  "gitDecoration.conflictingResourceForeground": "#",
  "gitDecoration.deletedResourceForeground": color.git.deleted,
  "gitDecoration.ignoredResourceForeground": color.fg.default,
  "gitDecoration.modifiedResourceForeground": color.git.modified,
  "gitDecoration.renamedResourceForeground": "#",
  "gitDecoration.stageDeletedResourceForeground": color.git.deleted,
  "gitDecoration.stageModifiedResourceForeground": color.git.modified,
  "gitDecoration.submoduleResourceForeground": "#",
  "gitDecoration.untrackedResourceForeground": color.git.added,
  // keybind labels
  "keybindingLabel.background": color.canvas.surface,
  "keybindingLabel.border": color.border.surface,
  "keybindingLabel.bottomBorder": color.border.surface,
  "keybindingLabel.foreground": color.fg.default,
  // keyboard shortcuts table
  "keybindingTable.rowsBackground": color.canvas.overlay,
  "keybindingTable.headerBackground": color.canvas.overlay,
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
  "symbolIcon.arrayForeground": color.fg.default,
  "symbolIcon.booleanForeground": color.fg.default,
  "symbolIcon.classForeground": color.fg.default,
  "symbolIcon.colorForeground": color.fg.default,
  "symbolIcon.constantForeground": color.fg.default,
  "symbolIcon.constructorForeground": color.fg.default,
  "symbolIcon.enumeratorForeground": color.fg.default,
  "symbolIcon.enumeratorMemberForeground": color.fg.default,
  "symbolIcon.eventForeground": color.fg.default,
  "symbolIcon.fieldForeground": color.fg.default,
  "symbolIcon.fileForeground": color.fg.default,
  "symbolIcon.folderForeground": color.fg.default,
  "symbolIcon.functionForeground": color.fg.default,
  "symbolIcon.interfaceForeground": color.fg.default,
  "symbolIcon.keyForeground": color.fg.default,
  "symbolIcon.keywordForeground": color.fg.default,
  "symbolIcon.methodForeground": color.fg.default,
  "symbolIcon.moduleForeground": color.fg.default,
  "symbolIcon.namespaceForeground": color.fg.default,
  "symbolIcon.nullForeground": color.fg.default,
  "symbolIcon.numberForeground": color.fg.default,
  "symbolIcon.objectForeground": color.fg.default,
  "symbolIcon.operatorForeground": color.fg.default,
  "symbolIcon.packageForeground": color.fg.default,
  "symbolIcon.propertyForeground": color.fg.default,
  "symbolIcon.referenceForeground": color.fg.default,
  "symbolIcon.snippetForeground": color.fg.default,
  "symbolIcon.stringForeground": color.fg.default,
  "symbolIcon.structForeground": color.fg.default,
  "symbolIcon.textForeground": color.fg.default,
  "symbolIcon.typeParameterForeground": color.fg.default,
  "symbolIcon.unitForeground": color.fg.default,
  "symbolIcon.variableForeground": color.fg.default,
};
