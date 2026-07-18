# LibreWolf：注重隐私、安全与自由的浏览器

LibreWolf 是一款在隐私与安全上做出额外优化的 Firefox 社区发行版。LibreWolf 对跟踪和指纹技术使用了更加严格的限制，并且默认移除了 Firefox 中的遥测与数据收集等内容[^1]。你可以访问[官方网站对于 LibreWolf 的特性介绍](https://www.librewolf.net/docs/features/)来更加深入的了解。

[^1]: 出自官方网站「What is LibreWolf」部分。[原文](https://www.librewolf.net/#what-is-librewolf)如下：「LibreWolf is designed to increase protection against tracking and fingerprinting techniques, ... LibreWolf also aims to remove all the telemetry, data collection and annoyances, as well as disabling anti-freedom features like DRM.」

## 安装

运行如下命令使用 Homebrew 安装 LibreWolf，并移除 Apple 对于无有效开发者证书的警告。

```shell
brew install --cask librewolf

# 安装完毕后，执行如下命令移除 LibreWolf 的证书检测。
xattr -dr com.apple.quarantine /Applications/LibreWolf.app
```

或者访问[官方网站](https://www.librewolf.net/installation/macos/)获取其他安装方案。需要注意，LibreWolf 本身不提供自动更新选项，选用除包管理器之外的安装方式均需要手动对 LibreWolf 进行更新。

## 配置

### 将 LibreWolf 配置为默认浏览器

作为完全社区驱动的项目（没有基金会支持或者公开捐赠渠道），LibreWolf 并不急于将其自身设置为默认浏览器。如果需要，你可以手动在系统设置中进行更改，也可以执行如下命令进行设置。

```shell
librewolf --setDefaultBrowser
# 执行此命令后，macOS 会弹出弹窗询问你是否确认更改默认浏览器。
```

### 解决网页无法自动切换暗黑模式的问题

LibreWolf 启用了 ResistFingerprinting 来严格限制网页通过指纹对用户进行识别与跟踪。这一行为的副作用则是限制了网页与插件跟随操作系统的外观变更主题颜色。

你可以阅读[官方文档中的说明](https://librewolf.net/docs/faq/#what-are-the-most-common-downsides-of-rfp-resist-fingerprinting) 来更加深入地了解 ResistFingerprinting。

如果你在阅读完毕后，确认希望抛弃这一隐私来获取与系统主题时刻保持统一的便利，你可以在如下两种配置方式中任选其一进行操作。

> [!caution] 注意配置覆写文件会覆盖浏览器内配置选项
> 
> LibreWolf 官方文档中所有配置方案均使用配置覆写文件。此处遵循官方文档用法，推荐读者统一使用[创建或修改配置覆写文件](#创建或修改%20LibreWolf%20配置覆写文件)的方式，方便后续的迁移与还原。

#### 创建或修改 LibreWolf 配置覆写文件

1. 在路径 `~/.librewolf/` 中[^2]新建或打开已有的 `librewolf.overrides.cfg` 文件。
2. 将如下内容完整复制并追加到该文件中，完成后保存文件并重启 LibreWolf。

```json
defaultPref("privacy.resistFingerprinting", false);
defaultPref("privacy.fingerprintingProtection", true);
defaultPref(
	"privacy.fingerprintingProtection.overrides",
	"+AllTargets,-CSSPrefersColorScheme"
);
```

[^2]: 如果你使用的系统并非 macOS，请参照[官方文档指定的覆写文件路径](https://www.librewolf.net/docs/settings/#where-do-i-find-my-librewolfoverridescfg)。

#### 在 LibreWolf 中直接更改配置选项

按照如下方案逐步操作来更改 LibreWolf 的应用配置选项。

1. 在 LibreWolf 地址栏输入 `about:config`，进入 LibreWolf 配置页面。
2. 在该页面搜索 `privacy.resistFingerprinting` ，将其切换为 `false` 。
3. 在该页面搜索 `privacy.fingerprintingProtection.overrides` ，将该条目值更改为如下内容：

```text
+AllTargets,-CSSPrefersColorScheme
```

> [!important] 注意配置项的拼写是否正确
> 
> 在每一次对配置选项进行搜索时，请确认搜索到的条目已经存在，否则说明所搜索的配置选项存在拼写错误。判断依据为**右侧按钮显示为「编辑」图标而非「+」符号**。
