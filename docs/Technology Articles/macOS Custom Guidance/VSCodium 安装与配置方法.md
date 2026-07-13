VSCodium 绝大多数配置都与项目相关而非写在应用配置当中。本文只介绍如何设置 VSCodium 的外观等软件通用配置，不涉及具体项目的 LSP、Formatter 等等。

VSCodium 的软件设置与浏览器类似，存储在 Profile 当中。Profile 中主要包含设置、键盘快捷键、代码片段和插件。Profile 能够自由导入导出，但是格式并不透明。

使用如下命令在 VSCodium 中打开默认 Profile 的设置页，将下方 JSON 文件复制到文件中。

```shell
codium ~/Library/Application\ Support/VSCodium/User/settings.json
```

```json
{
	"window.autoDetectColorScheme": true,
	"workbench.preferredLightColorTheme": "Nord Light",
    "workbench.preferredDarkColorTheme": "Nord",
	"workbench.iconTheme": "vscode-jetbrains-icon-theme-2023-auto",
    
    "editor.fontFamily": "'JetBrains Mono', 'LXGW WenKai Mono', monospace",
    "editor.fontSize": 13.5,
    "editor.fontLigatures": true,
    
	"terminal.external.osxExec": "Ghostty.app",
	"terminal.integrated.fontFamily": "'JetBrains Mono', 'JetBrainsMono Nerd Font', 'LXGW WenKai Mono', monospace",
	"terminal.integrated.fontSize": 13,
	"terminal.integrated.fontLigatures.enabled": true,
	"terminal.integrated.initialHint": false,
	
	"window.commandCenter": false,
	"window.density.editorTabHeight": "compact",
	"workbench.activityBar.location": "bottom",
    "workbench.statusBar.visible": false,
    
    "editor.inlayHints.enabled": "offUnlessPressed",
}
```

之后，运行如下命令为 VSCodium 安装全局插件：

```shell
codium --install-extension arcticicestudio.nord-visual-studio-code
codium --install-extension illegalstudio.nord-light-theme
codium --install-extension ardonplay.vscode-jetbrains-icon-theme

# codium --install-extension k--kato.intellij-idea-keybindings
# 如果你希望使用 JetBrains 设计的更易于记诵的快捷键。

codium --install-extension sst-dev.opencode
# 如果你希望使用 OpenCode 集成。
```

