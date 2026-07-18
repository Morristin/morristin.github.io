# Homebrew：macOS 最为著名的包管理器

Homebrew 是 macOS 与 Linux 上最为著名的包管理器之一。几乎所有的 Mac 软件都会官方或者社区性质地提供使用 Homebrew 安装的方式。

## 安装

Homebrew 依赖 Xcode Command Line Tools 。作者建议**先单独安装后者**，这样会大大加快整体的下载速度；当然你也可以直接运行 Homebrew 安装脚本来自动安装依赖。

> [!note] 关于 Xcode Command Line Tools
> 
> Xcode Command Line Tools 是 macOS 的官方开发者工具包。其与系统深度结合，与 macOS 一致使用系统设置中的 Software Update 进行版本更新。

```shell
# 作者建议先运行此命令单独安装 Xcode Command Line Tools。
xcode-select --install

# 从 GitHub 下载 Homebrew 官方提供的下载与安装脚本并运行。
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 在终端配置文件中指定 Homebrew 环境

Homebrew 需要获取当前 Shell 类型。为保证当前 Shell 类型能够被实时获取，你需要在所使用的 Shell 配置文件中进行设置，使得每次创建 Shell 实例时均对 Homebrew 环境进行更新。

请将如下命令中的 config 替换为你所使用的终端对应的配置文件路径并执行。例如，macOS 默认终端 zsh 的配置文件位于 `~/.zprofile` ，Fish 则位于 `~/.config/fish/config.fish` 。

```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> config
```
