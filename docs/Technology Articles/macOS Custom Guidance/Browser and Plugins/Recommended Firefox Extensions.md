# Firefox 扩展推荐

以下是作者个人认为值得推荐的 Firefox 扩展。部分扩展也提供 Chromium[^1] 版本或 Safari 版本，因此也能构成适用于其他浏览器的扩展推荐。

[^1]: 下文中，所有的基于 Chromium 内核的浏览器统一使用 Chromium 进行指代。

> [!tip] 各平台浏览器扩展的下载与安装简要指南
> 
> 本文只会给出适用于 Firefox 的 Firefox ADD-ONS 地址。如果您需要安装到其他浏览器平台，建议访问对应平台官方提供的插件商城地址进行下载与安装。
> 
> - 如果您使用基于 Chromium 内核的浏览器，请访问 [Chrome Web Store](https://chromewebstore.google.com/)。
> 
> - 如果您使用 Edge 或者 Opera，请访问 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/) 或者 [Opera addons](https://addons.opera.com/)。
> 
> - 如果您使用 Safari，请直接在设备中的 App Store 进行插件获取。

本文中绝大多数扩展都是开源的，会在介绍中标记其开源仓库地址以供读者自行进行代码审查或者从源代码进行编译；闭源的插件会被特殊标注以警示读者。

### 广告拦截 - uBlock Origin & uBlock Origin Lite

- 开源仓库地址（uBlock Origin）： https://github.com/gorhill/uBlock 。
- 开源仓库地址（uBlock Origin Lite）： https://github.com/uBlockOrigin/uBOL-home 。
- Firefox ADD-ONS 地址： https://addons.mozilla.org/addon/ublock-origin/ 。
- 适用浏览器范围： Firefox[^2] 与 Chromium[^3]。

[^2]: uBlock Origin Lite 提供 Firefox 版本，但是**并未上架 Firefox ADD-ONS**。如果你正在使用 Firefox 内核的浏览器，你需要访问[该仓库的 GitHub Release](https://github.com/uBlockOrigin/uBOL-home/releases)，手动下载插件并通过开发者模式将插件载入到浏览器当中。

[^3]: uBlock Origin 本身提供 Chromium 的插件版本，但 Chrome 宣布将在 2026 August 不再支持 uBlock Origin 所遵循的 Manifest V2 标准。并且，uBlock Origin 在 Firefox 上的[表现更加优异](https://github.com/gorhill/uBlock/wiki/uBlock-Origin-works-best-on-Firefox)。

uBlock Origin 是一款历史悠久的广告拦截插件，因其优秀的性能在广告拦截插件中经久不衰。

相较于 AdGuard 等专业广告拦截服务公司，uBlock Origin 完全由社区驱动，没有赞助商或捐赠渠道。且其用户群体庞大，至今仍然在积极维护。

uBlock Origin Lite 则是 uBlock Origin 基于更新的 Manifest V3 标准构建的声明式运行广告拦截器。如果你正在使用 Chromium 内核的浏览器，可以考虑使用 uBlock Origin Lite。

### 隐私处理 - DuckDuckGo

- 开源仓库地址： https://github.com/duckduckgo/duckduckgo-privacy-extension 。
- Firefox ADD-ONS 地址： https://addons.mozilla.org/addon/duckduckgo-for-firefox/ 。
- 适用浏览器范围： Firefox 与 Chromium 与 Safari 。

DuckDuckGo 的 slogan 是「Protection. Privacy. Peace of Mind.」。如果你信任作为商业公司的 DuckDuckGo，那么使用它提供的隐私插件也是一个不错的选择。

不过，如果你希望使用 DuckDuckGo 服务，或许可以直接使用它提供的[浏览器](https://duckduckgo.com/app)。

### 暗色模式 - Dark Reader

- 开源仓库地址： https://github.com/darkreader/darkreader 。
- Firefox ADD-ONS 地址： https://addons.mozilla.org/addon/darkreader/ 。
- 适用浏览器范围： Firefox 与 Chromium 与 Safari 。

Dark Reader 是一款通过注入 CSS 代码实现网页外观更改的插件。需要注意，虽然 Dark Reader 开源且不要求许可证即可使用，但它**事实上是一款付费插件**。

如果你希望更加深入地了解 Dark Reader 的用法，请参考 [Dark Reader 配置指南](Dark%20Reader%20Config%20Guidance.md) 。

### 主题美化 - Adaptive Tab Bar Colour

- 开源仓库地址： https://github.com/easonwong-de/Adaptive-Tab-Bar-Colour 。
- Firefox ADD-ONS 地址： https://addons.mozilla.org/addon/adaptive-tab-bar-colour/ 。
- 适用浏览器范围：Firefox 。

Adaptive Tab Bar Colour 是一款根据当前网页外观切换浏览器配色的插件，类似于 macOS Safari 中提供的「Show color in tab bar」选项。

### 密码管理 - KeePassXC Browser

- 开源仓库地址： https://github.com/keepassxreboot/keepassxc-browser 。
- Firefox ADD-ONS 地址： https://addons.mozilla.org/addon/keepassxc-browser/ 。
- 适用浏览器范围：Firefox 与 Chromium 。

KeePassXC 是一款基于 KeePass 的本地钥匙串管理软件。KeePassXC Browser 则实现了 KeePassXC 与浏览器的集成，允许进行网页密码自动填充和使用 PassKey 验证。

若想了解更多有关 KeePass 的内容，请访问 [Introduction to KeePass](../KeePass%20Password%20Manager/Introduction%20to%20KeePass.md) 。