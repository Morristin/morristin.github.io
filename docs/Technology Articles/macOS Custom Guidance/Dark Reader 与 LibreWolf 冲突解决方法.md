为了防止跟踪，LibreWolf 启用了 `ResistFingerprinting` 。这限制了 Dark Reader 跟随操作系统变化暗黑模式。如果你愿意舍弃这一部分隐私来换取 Dark Reader 自动切换暗黑模式的遍历（请务必先阅读[官方文档](https://librewolf.net/docs/faq/#what-are-the-most-common-downsides-of-rfp-resist-fingerprinting) 来确保你理解这是在做什么），请按照如下方法操作：

- 在 LibreWolf 地址栏输入 `about:config`，进入 LibreWolf 配置页面。
- 在该页面搜索 `privacy.resistFingerprinting` ，将其切换为 `false` 。
- 在该页面搜索 `privacy.fingerprintingProtection.overrides` ，将该条目值更改为如下内容：

```text
+AllTargets,-CSSPrefersColorScheme
```

> [!important] 注意配置项的拼写是否正确
> 
> 为防止拼写出现错误，请确认该条目已经存在，右侧按钮显示为「编辑」图标而非「+」。

或者，你也可以在终端中运行如下命令以创建 LibreWolf 配置覆写文件，并复制如下内容到覆写文件中。该配置文件会覆盖 LibreWolf 中 `about:config` 界面的配置选项。

```shell
mkdir -p ~/.librewolf/
vim ~/.librewolf/librewolf.overrides.cfg
```

```json
defaultPref("privacy.resistFingerprinting", false);
defaultPref("privacy.fingerprintingProtection", true);
defaultPref(
	"privacy.fingerprintingProtection.overrides",
	"+AllTargets,-CSSPrefersColorScheme"
);
```
