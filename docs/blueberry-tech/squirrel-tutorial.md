---
title: 鼠须管 Squirrel 皮肤配置指北
description: 介绍鼠须管与雾凇拼音的安装，鼠须管皮肤与行为的配置方法。
---

# 鼠须管 Squirrel 皮肤配置指北

这是一篇偏向实践过程的皮肤配置教程。本文不会过多探讨「输入法」这个命题本身。

## 安装鼠须管 Squirrel 与 雾凇拼音 rime-ice

### 鼠须管 Squirrel

鼠须管的安装无需赘述。中州韵官网会面向你所使用的系统简洁明了地提供下载链接。

- 中州韵官网：https://rime.im/ 。
- 写作本文时所使用的鼠须管 1.1.2 版本下载：https://github.com/rime/squirrel/releases/download/1.1.2/Squirrel-1.1.2.pkg 。

当然，笔者习惯于使用 Homebrew 包管理器下载应用：

```shell
brew install --cask squirrel-app
```

### 雾凇拼音

雾凇拼音是中州韵输入法最为有名的简体输入解决方案。中州韵、鼠须管与雾凇拼音的官方配置指南都为你详细介绍了如何定制自己的输入体验，这不是本文讨论的重点。如若你需要一个开箱即用的简体拼音输入方案，不妨简单下载雾凇拼音。

雾凇拼音提供了两种主流下载方案：git 指令和东风破 plum。如果你希望能够在未来更新拼音词库，建议你使用第二种，具体原因将在后文提及。

- 雾凇拼音 GitHub 网址：https://github.com/iDvel/rime-ice
- 东风破 GitHub 网址：https://github.com/rime/plum

#### 使用东风破安装雾凇拼音

我推荐你将 plum 与 Rime 安装在一起。毕竟东风破本身便是由 Rime 开发的配置管理工具。

在终端 Terminal 中执行下列命令以将工作环境切换至 Rime 用户目录。**注意确保你当前所处的位置是用户主目录 `~` 处**。如果无法确定，运行
`pwd` 命令，其应该输出 `/Users/Username` 格式。

```shell
cd Library/Rime
```

之后，安装东风破 plum。若要卸载，也只需将 plum 文件夹移进回收站即可。

```shell
git clone https://github.com/rime/plum.git plum
```

最后输入如下命令安装雾凇拼音即可。

```shell
bash plum/rime-install iDvel/rime-ice:others/recipes/full
```

### 将鼠须管设置为输入源

鼠须管需要被手动添加为输入源。

在菜单栏单击 Text Input 图标（显示为当前输入方案图标），点击最下方选项 `Open Keyboard Settings`
，将会为你直接导航到设置中更改输入源的界面。在该窗口的左下角单击 `+`，在左侧选择 `Chinese, Simplified`，在右侧选择
`Squirrel` 并点击 `Add` 即可。

如果你不希望使用菜单栏图标，你可以手动前往设置，在其中找到 `Keyboard - Text Input - Input Sources`，随后点击 `Edit...`
导航到更改输入源的界面。

> [!tip]
> 如果你当前菜单栏没有显示 Text Input
> 图标，建议你前往设置将其开启。接下来大量操作在开启该图标显示的情况下会得到简化。如果你执意保持该菜单项隐藏，出于另外一方面的考量，本指北也会尽量列出菜单项不可用时的替代方案。

## 配置鼠须管皮肤

在开始配置之前，你需要先确保你拥有一个能够处理 YAML 文件的文本编辑器或 IDE，例如 VSCode。如果你暂时没有并且不了解 YAML
语法，建议你下载一个临时使用。

- 如果你希望拥有一个界面美观且具有 macOS 原生风格文本编辑器，你可以选择 CotEditor：https://coteditor.com/ 。
- 如果你希望拥有一个可扩展性强且高度定制化的文本编辑器，你可以选择 Sublime Text：https://www.sublimetext.com/
- 诸如 VSCode、WebStorm 之类的 IDE 较为大型，不必为调整输入法皮肤而大费周章。

一切准备就绪后，在你的文本编辑器或 IDE 中打开鼠须管的皮肤设置文件 `squirrel.yaml`。该文件在
`/Users/morristin/Library/Rime` 下。你可以在已切换至 rime 输入法的前提下，通过点击菜单栏中的 Text Input 图标并在下拉菜单中点击
`Settings...` 来快速打开该文件夹。

> [!warning]
> Squirrel 官方推荐新建一个文件 `squirrel.custom.yaml` 来进行自己的配置重载。但是根据我的实践经历，这种重载会导致皮肤加载不正确甚至使输入法出现严重问题。

### 创建一个新的皮肤

在打开的文件中找到 `preset_color_schemes` 这一栏（绝大多数文本编辑器都提供了 `⌘ + F`
的快捷搜索功能供你使用）。模仿这下方的任意皮肤，填写你创建皮肤的名称和基本信息。

```yaml
origin_light:
  name: 原色 Light
  author: Morristin <yourmail@domain>
```

鼠须管的皮肤支持随系统是否开启暗黑模式而变化。我建议你先根据当前暗黑模式的开启情况创建对应的皮肤，之后再进行复制与修改来创建另一个皮肤。

`name` 与 `author` 都只是纯粹的描述性文本。你不需要遵循任何格式，甚至可以略去。

创建完毕后，在这一栏上方找到 `style` 更改当前选取的皮肤。

```yaml
style:
  color_scheme: origin_light
  color_scheme_dark: origin_dark
```

### 将所创建的皮肤进行部署

部署本身非常简单。你可以在菜单栏中点击 Text Input 后在下拉菜单中点击 `Deploy`，或者直接使用快捷键
`` control⌃ + option⌥ + ` ``。

而将部署单独作为一部分讲述，是因为笔者在配置过程中遇到了中州韵直接卡死，无法进行部署甚至无法将输入法切换到中州韵的情况。此时如果你不想重启电脑，可以使用命令行操作。

```shell
/Library/Input\ Methods/Squirrel.app/Contents/MacOS/Squirrel
```

执行上述命令会使得 squirrel 的运行状况被实时反映在输出当中。你可以添加后缀 `--help` 来获得所有支持的后缀选项，在此处给出最为常用的两个后缀命令：

```shell
--reload	# 部署 deploy
--build		# 编译当前目录所有方案 build all schemas in current directory
```

### 候选项与输入码的外观样式

输入法外观最为基本的属性自然是候选项与输入码的位置与排列方式。

```yaml
# 候选框与文字的排列方式  
candidate_list_layout: stacked  # stacked | linear       皮肤横竖排显示
text_orientation: horizontal    # horizontal | vertical  文字方向  
# 拼音或词句是否显示在键入位置  
inline_preedit: true            # true | false  键入码显示位置  
inline_candidate: false         # true | false  选中词显示位置
```

以上注释来源于雾凇拼音配置文件。你可以选择直接使用默认布局，从而你不再需要在自己的皮肤配置中书写这些配置项。

你也许想要更改其他的选项，例如一页中显示的候选项个数。请参考[配置鼠须管行为](#配置鼠须管行为)。

### 字体设置

笔者相当喜欢自定义字体，因而将这一部分排列在如此之前。需要注意，**鼠须管对于字体值的处理相比网页开发不太一样**。

```yaml
font_face: "Source Han Serif SC VF"
font_point: 14
label_font_face: "Source Serif 4"
label_font_point: 15
comment_font_face: "Times New Roman, LXGW WenKai"
comment_font_point: 13
```

如果你需要使用多个字体，例如分别指定不同的西文字体与中文字体，请务必**将所有字体名称用逗号分隔后统一包括在引号内**
，而不是分别使用引号包括再使用逗号分隔。

字体的名称可以通过 macOS 自带的 Font Book 应用查询。应用中显示的所有字体名称都可以被直接当作字体参数填入鼠须管配置文件中。

如果你是第一次使用中州韵，你可能会对 `comment_font` 感到疑惑。`comment_font` 在雾凇拼音中通常用作拼音纠正的提示文本。对于雾凇拼音，你可以输出
`annai` 来查看效果。

### 候选项格式调整

候选项格式由 `candidate_format` 进行控制。输入法的最终呈现是替换 candidate_format 中的占位符所得来的。

```yaml
candidate_format: "\u2004[label].\u2002[candidate] [comment]\u2002\u2006"
```

需要注意，**互联网上绝大多数鼠须管皮肤的候选项格式都是采用已经被弃用的格式编写**。即使鼠须管仍然支持解析旧候选项格式语法，将其进行手动转换可能仍然是一个好的选择。

| 旧版格式控制符 |         新版格式控制符         |
|:-------:|:-----------------------:|
|  `%@`   | `[candidate] [comment]` |
|  `%c`   |        `[label]`        |

新的格式控制与字体选择进行了对齐，整体逻辑更加清晰；同时 candidate 与 comment 的拆分也提供了更大的自主选择空间。我个人认为这是一项优秀的程序优化。

你可能注意到我在 candidate_format 中使用了大量 Unicode 字符。这些字符均为不同长度的空白，使用这些字符可以确保格式控制被正确解析且观感更好。你可以在搜索引擎或者
AI 模型中自行获取不同空白字符对应的 Unicode 编码。

### 候选项外观调整

以下这些设置项更符合我们通常对皮肤的认知，这些也是最为影响输入法皮肤观感的因素。我所贴出的结果是我个人认为比较好看的最终调整成果。
**事实上，其中许多选项的调整都无法看出明显的效果**；因而你不必拘泥于我的配置方案，官方提供的皮肤可能是一个更好的参考源。

```yaml
translucency: true                        # 磨砂： true | false  
mutual_exclusive: true                    # 色不叠加： true | false  
border_height: 2                          # 外边框 高  
border_width: 3                           # 外边框 宽  
corner_radius: 8                          # 外边框 圆角半径  
hilited_corner_radius: 5                  # 选中框 圆角半径  
surrounding_extra_expansion: 0            # 候选项背景相对大小？  
shadow_size: 20                           # 阴影大小  
line_spacing: 8                           # 行间距  
base_offset: 2                            # 字基高  
spacing: 0                                # 拼音与候选项之间的距离
```

如果你希望皮肤取得透明效果，请务必设置 `translucency` 为 `true`。如果不开启该效果，最终文字的可读性会远低于你的预期。

我非常不推荐设置 `alpha` 设置项。全局透明会导致即使是被选中的选项也会透出下方的颜色，同时全局透明与透明底色的叠加会导致可读性直线下降。

除此以外，绝大多数设置项都与给出的注释效果一致（或是在我调整的过程中未察觉明显效果）。你可能需要反复试验来敲定最终的皮肤表现，尤其是边框的圆角半径表现可能超乎你的意料。

### 候选项颜色调整

```yaml
color_space: display_p3                   # 色彩空间 srgb | display_p3  
back_color: 0x33F6F6F6                    # 底色  
hilited_candidate_back_color: 0xFFED6E2F  # 选中底色  
label_color: 0xFF808080                   # 序号颜色  
hilited_candidate_label_color: 0xFFFFFFFF # 选中序号颜色  
candidate_text_color: 0xFF4A4A4A          # 文字颜色  
hilited_candidate_text_color: 0xFFFFFFFF  # 选中文字颜色  
comment_text_color: 0xFF808080            # 注颜色  
hilited_comment_text_color: 0xFFFFFFFF    # 选中注颜色
```

如果你拥有相关专业知识，自行挑选颜色是一个很轻松的选择。笔者对色彩完全不了解，因而选择了复制 macOS Tahoe 官方输入法配色的方案：

1. 打开 macOS 自带的 Digital Color Meter 并切换到官方输入法，取色器会显示你当前鼠标指向的颜色 RGB
   值。只需要多次取色并记录即可得到各部分对应的颜色。
2. 将 RGB 值通过在线工具或者 AI 工具转换为鼠须管要求的颜色格式。鼠须管要求颜色必须以 `0x` 开头，**使用 `AABBGGRR`
   格式表示透明度与颜色**。

这里附上一份暗黑模式下通过此方法取得的成果。需要注意，输入法覆盖范围内的像素点呈现的颜色并不一致，尤其是在 Liquid Glass
高度的高光与透明的影响下。也许对你来说，你常用的工作环境下呈现出来的输入法色泽会与我给出的颜色有所偏差，建议以你自己为准。

```yaml
color_space: display_p3                   # 色彩空间： srgb | display_p3  
back_color: 0x33292828                    # 底色  
hilited_candidate_back_color: 0xFFF67834  # 选中底色  
label_color: 0xFF666666                   # 序号颜色  
hilited_candidate_label_color: 0xFFFFFFFF # 选中序号颜色  
candidate_text_color: 0xFFFFFFFF          # 文字颜色  
hilited_candidate_text_color: 0xFFFFFFFF  # 选中文字颜色  
comment_text_color: 0xFF666666            # 注颜色  
hilited_comment_text_color: 0xFFFFFFFF    # 选中注颜色
```

## 配置鼠须管行为

严格来说，配置鼠须管行为并不是我们要讨论的主题。但若是考虑到某些输入法行为对外观的影响，其中的部分行为也应该被归类到皮肤配置的范畴中。

鼠须管行为的配置方式与皮肤配置方式类似，只是位于 `default.yaml` 中。文件的打开和编辑方式参考[此处](#配置鼠须管皮肤)
。在该文件中，与皮肤样式相关的部分只有两处：

1. 候选词个数，控制在同一页显示多少备选项。位于 `menu - page_size`。
2. 中英文切换，控制按下不同修饰键时的输入法表现。位于 `ascii_composer - switch_key`。

macOS 系统级使用 CapsLock 作为中英文切换。因此，在系统级保留英文输入法并且完全禁用中州韵的英文输入模式不失为一种良好的选择，也即将
`Shift_L` 与 `Caps_Lock` 均设置为 `noop`。倘若初次设置完毕时处于英文输入模式，只需要切换到其他输入法再切换回中州韵即可。

> [!warning]
> 必须要指出的是，雾凇拼音等许多配置方案都指出不能够将 `Caps_Lock` 设置为 `noop`
> 。但从笔者亲身经历来看，如此设置不仅能够正常运行，同时还可以避免部分情况下切换到中州韵时处于英文输入状态或是弹出并不好看的中州韵输入法状态指示器。

