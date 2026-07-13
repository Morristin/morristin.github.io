Obsidian 的配置针对 Vault 而非应用本身。接下来的配置假设我们的目标 Vault 需要保存在 `~/Documents/Obsidian` 文件夹当中，请自行替换为所需的文件夹路径。

```shell
mkdir -p ~/Documents/Obsidian/.obsidian
cp -R Obsidian ~/Documents/Obsidian/.obsidian
# 将已有的 Obsidian 配置文件夹拷贝到 .obsidian 配置目录中。
```

如果你尚未拥有配置文件夹，可以输入以下命令创建基础的 Obsidian 配置文件，并将下方的配置模板复制到对应的配置文件中（请务必去除注释，否则会被视为无效文件）。

```shell
vim ~/Documents/Obsidian/.obsidian/app.json
vim ~/Documents/Obsidian/.obsidian/appearance.json
```

```json
// app.json 请去除本行注释，Obsidian 无法识别带有注释的 json 文件。
{
  "strictLineBreaks": true,
  "autoPairBrackets": false,
  "autoPairMarkdown": false,
  "autoConvertHtml": false,
  "newFileLocation": "current",
  "attachmentFolderPath": "./Assets",
  "useMarkdownLinks": true,
  "showUnsupportedFiles": true,
  "uriCallbacks": true
}
```

```json
// appearance.json 请去除本行注释，Obsidian 无法识别带有注释的 json 文件。
{
  "showViewHeader": false,
  "showRibbon": false,
  "interfaceFontFamily": "SF Pro,PingFang SC",
  "textFontFamily": "Noto Serif SC",
  "monospaceFontFamily": "Maple Mono,LXGW WenKai Mono",
  "nativeMenus": false
}
```

完成配置后，使用 Obsidian 打开该 Vault。进入设置，导航到 General 选项，开启最下方的 Command Line Interface 功能。之后保持 Vault 开启，运行如下命令：

```shell
obsidian theme:install name="Baseline" enable
obsidian theme:install name="Velocity"
# 由笔者精心挑选的两种主题。

obsidian plugins:restrict off
# 关闭 Obsidian 严格模式。也即启用社区插件。

obsidian plugin:install id="obsidian-hider" enable
obsidian plugin:install id="obsidian-style-settings" enable
# Obsidian 中最为著名的外观调整应用。包括无关视觉元素隐藏和主题调整。

obsidian plugin:install id="cm-chs-patch" enable
obsidian plugin:install id="easy-typing-obsidian" enable
# Obsidian 写作优化。包括添加中文分词（默认无法识别中文词语）和写作辅助。

obsidian plugin:install id="animated-cursor" 
obsidian plugin:install id="obsidian-advanced-uri"
obsidian plugin:install id="obsidian-latex-suite"
# 笔者喜欢的其他插件。包括为光标增加动画、获取 URL 以及加速输入 Latex 公式。
```

