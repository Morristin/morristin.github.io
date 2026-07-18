# Ghostty：功能丰富、渲染高速的跨平台终端仿真器

Ghostty 是一款异军突起的 Terminal Emulator。它使用[以个性鲜明而出名](https://ziglang.org/news/migrating-from-github-to-codeberg/)的 Zig 语言编写，并且在各个平台均使用原生的 UI 界面和 GPU 加速以提升渲染速度。

## 安装

1. 使用如下命令通过 Homebrew 安装 Ghostty。

```shell
brew install ghostty
```

2. 安装完毕后，请按照如下步骤手动将其设置为默认 Terminal：打开 Ghostty 应用 - 单击菜单栏的「Ghostty」 - 在下拉菜单中找到并点击「Make Ghostty the Default Terminal」。

## 配置

Ghostty 的配置方案相对比较自由。你可以在[官方文档](https://ghostty.org/docs/config/reference)中找到一切你需要且被 Ghostty 支持的功能。作者仅仅根据自己的审美风格在此处给出部分配置方案。

你可以通过在 Ghostty 中使用「 ⌘ Command + , Comma 」快捷键打开配置文件，也可以手动在 Finder 或者命令行中按照如下路径之一打开配置文件：

```shell
~/.config/ghostty/config.ghostty
~/Library/Application\ Support/com.mitchellh.ghostty/config.ghostty
```

### 设置主题

Ghostty 预设了相当丰富的配色方案。在 Ghostty 中运行 `ghostty +list-themes` 即可预览所有主题的样式。

请为亮色与暗色模式各挑选一个主题，并将其写入配置文件中。格式如下：

```text
theme = light: light theme name, dark: dark theme name
```

### 设置字体

Ghostty 只允许在终端界面使用 Mono 字体。你可以使用 Font Book 应用查阅已经安装的所有字体，也可以运行 `ghostty +list-fonts` 获取符合要求的字体名称以供挑选。

之后，将你挑选的字体参考如下形式填写到配置文件中。

```toml
font-family = ""
# 此语法代表清除默认的字体设置。Ghostty 默认使用 Jetbrains Mono。

font-family = "Jetbrains Mono"
font-family = "JetbrainsMono Nerd Font"
font-family = "LXGW WenKai Mono"
# 如果你需要指定多个字体文件，请使用此语法多次指定，而非使用逗号进行分隔。
```
