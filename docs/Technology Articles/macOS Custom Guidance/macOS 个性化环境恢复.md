
> [!note] 命令硬编码说明
> 
> 本系列教程绝大多数命令使用硬编码。这要求你的 macOS 运行在 ARM 芯片架构上，并且环境变量 HOMEBREW_PREFIX 与 Homebrew 默认值保持一致（`/opt/homebrew`） 。
> 
> 如果你使用 Intel 架构的 macOS，请将所有 `/opt/homebrew` 改为 `/usr/local` 。

> [!important] 网络环境的准备工作
> 
> 本文所有指令均假设系统已经配置完毕良好的网络环境。如果你需要网络环境的恢复方案，请参见 [mihomo 安装与配置方法](mihomo%20安装与配置方法.md) 。

运行如下命令安装 Xcode Command Line Tools 和 Homebrew 。

```shell
xcode-select --install

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

执行如下命令将 Homebrew 添加到 zsh 终端环境变量。

```shell
echo >> ~/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv zsh)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv zsh)"
```

如果你希望之后使用 fish 终端，你可以预先执行如下命令将 Homebrew 写入 fish 配置文件。

```shell
mkdir -p ~/.config/fish/
echo >> ~/.config/fish/config.fish
echo 'eval "$(/opt/homebrew/bin/brew shellenv fish)"' >> ~/.config/fish/config.fish
```

在执行其余操作之前，如果你正在以离线形式访问本系列教程，你可以先执行 `brew install --cask obsidian` 安装 Obsidian 以获得更加良好的阅读体验。

之后，你可以按照任意顺序阅读本系列教程文章并进行系统基础功能的个性化配置。但作者推荐继续阅读完毕本文余下内容，其中包含了部分最为重要的设置。

- 参照 [fish 与 starship 安装与配置方法](fish%20与%20starship%20安装与配置方法.md) 安装 fish shell 与对应的 prompt 。

如果你希望使用 starship 但是不希望使用 zsh ，使用如下指令在 zsh 中启用 starship 。

```shell
brew install starhip
echo 'eval "$(starship init zsh)"' >> ~/.zshrc
```

如果你希望使用 zsh 配合更加轻量化的 prompt 实现，可以尝试 `powerlevel10k` 。

```shell
brew install powerlevel10k
echo 'source /opt/homebrew/share/powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc
```

- 参照 [macOS 字体推荐](macOS%20字体推荐.md) 安装笔者所推荐的字体。

本系列所有教程都假设你安装了这些字体。如果没有，请你根据你所拥有的字体自行更改后续的配置文件。

- 参照 [VSCodium 安装与配置方法](VSCodium%20安装与配置方法.md) 安装并配置 VSCodium 。

你暂时无法获得针对特定技术栈的 VSCodium 配置方法。敬请关注本系列未来的更新。

- 参照 [LibreWolf 安装与配置方法](LibreWolf%20安装与配置方法.md) 安装并配置 LibreWolf 。

如果你希望使用 Dark Reader，你可以阅读 [Dark Reader 配置技巧](Dark%20Reader%20配置技巧.md) 进行更加深入的配置；同时，你也可能需要阅读 [Dark Reader 与 LibreWolf 冲突解决方法](Dark%20Reader%20与%20LibreWolf%20冲突解决方法.md) 来考虑是否需要舍弃一部分隐私修复 Dark Reader 无法自动跟随系统暗黑模式的问题。
