LibreWolf 是一款以注重隐私闻名的 Firefox 内核浏览器。其本身已经达到开箱即用的程度，因此其配置不会过于复杂。运行如下命令使用 Homebrew 下载安装 LibreWolf：

```shell
brew install --cask librewolf

xattr -dr com.apple.quarantine /Applications/LibreWolf.app
# LibreWolf 没有苹果开发者许可证，因此需要手动移除证书检测。
```

运行如下命令将 LibreWolf 设置为默认浏览器。LibreWolf 不会主动弹窗要求你进行设置。

```shell
librewolf --setDefaultBrowser
```

为使用密码管理器插件，需要将 LibreWolf 的通知链接到 Firefox 以适配密码管理器。

```shell
ln -s "~/Library/Application\ Support/Mozilla/NativeMessagingHosts" "~/Library/Application\ Support/LibreWolf/NativeMessagingHosts"
```

Firefox 内核不提供直接安装插件的方法。请运行如下命令，并在每个窗口中手动点击安装插件按钮。每一行命令后的注释都有对插件的简单介绍帮助你快速抉择是否安装。

```shell
librewolf --new-tab "https://addons.mozilla.org/en-US/firefox/addon/darkreader/"
# Dark Reader: 全世界最为著名的网页暗黑模式插件。

librewolf --new-tab "https://addons.mozilla.org/en-US/firefox/addon/adaptive-tab-bar-colour/"
# Adaptive Tab Bar Color: 根据当前网站颜色更改 LibreWolf 的外观强调色。

librewolf --new-tab "https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/"
# KeePassXC: 与本地 KeePassXC 数据库结合来访问与更改密码、二步验证和通行密钥。
# 注意，使用通行密钥需要在 KeePassXC 插件设置当中手动开启。
```
