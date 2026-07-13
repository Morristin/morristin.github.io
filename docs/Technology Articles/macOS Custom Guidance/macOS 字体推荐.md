字体的好看与否取决于个人审美。本文只着重于推荐那些知名的、对 macOS 适配极佳的、便于长时间阅读大量问题的字体。

对于 UI 字体来说，显示的清晰度和适配性是最为重要的。使用 Apple 推出的 San Francisco 和 苹方系列字体能够确保系统字体显示始终清晰锐利。

```shell
brew install font-sf-pro
brew install font-new-york
```

对于正文字体的选择来说，字体的美观度和视觉吸引力需要占据更大的比重。使用 Google 和 Adobe 共同设计的 Noto Serif 和 Noto Sans 系列[^1]是一个比较妥善的处理办法。

[^1]: Noto Serif 和 Noto Sans 是 Google 字体发行版的名称。Adobe 字体发行版的名称为 Source Han Serif 和 Source Han Sans （翻译为思源宋体 / 思源黑体）。两者的区别主要在于内嵌拉丁字符集字体的不同。

```shell
brew install font-noto-serif-sc
brew install font-noto-sans-sc
```

等宽字体的情况则略微复杂。对于代码编辑等场景来说，等宽字体必须保持克制与理性，并提供诸如连字和 Nerd Font 字符集等特性；而对于与正文同等级的代码引用来说，等宽字体则需要保持和正文一致的视觉重量。笔者推荐两者分别选用 JetBrains Mono 和 Maple 系列。

```shell
brew install font-maple-mono
brew install font-jetbrains-mono
brew install font-jetbrains-mono-nerd-font
```

一般而言，使用楷体能够有效将文本与正文区分，并且在较小的字体大小下保持辨识度。这是中文环境下与英文环境斜体相对应的处理办法。笔者推荐使用楷体类别最为知名的霞鹜文楷。

```shell
brew install font-lxgw-wenkai
```

