# Starship：极简、高速和高度自定义的跨终端 Prompt

Starship 是一款由 Rust 编写的跨终端 Prompt。其提供丰富的自定义选项与拓展功能，并且不涉及 Shell 等语言的代码编写。

## 安装

1. 运行如下命令从 Homebrew 安装 Starship。

```shell
brew install starship
```

2. **根据你当前使用的终端，运行如下命令之一**将启动 Starship 的脚本写入配置文件。

```shell
# 如果你使用 Bash，配置文件位于默认位置 ~/.bashrc。
echo 'eval "$(starship init bash)"' >> ~/.bashrc

# 如果你使用 zsh，配置文件位于默认位置 ~/.zshrc。
echo 'eval "$(starship init zsh)"' >> ~/.zshrc

# 如果你使用 Fish，配置文件位于默认位置 ~/.config/fish/config.fish。
echo 'starship init fish | source' >> ~/.config/fish/config.fish
```

## 配置

在进行配置工作之前，运行如下命令创建 Starship 的配置文件。Starship 配置文件的路径由环境变量 `$STARSHIP_CONFIG` 控制，默认为 `~/.config/starship.toml` 。

```shell
mkdir -p ~/.config && touch ~/.config/starship.toml
```

如果你希望自己进行配置，请参考[官方文档](https://starship.rs/config/)编写配置文件。

### 使用社区预设配置

Starship 在安装时已经包括了绝大部分社区知名预设配置。若需要使用它们，只需要将如下指令中的替换为预设名称并运行该指令即可。

```shell
starship preset preset-name -o ~/.config/starship.toml
```

> [!tip] 如果你希望结合多种预设进行使用
> 
> 你需要访问[官方网站](https://starship.rs/presets/)，寻找到预设对应的源文件并将其手动追加到配置文件中。

如果你不希望做出外观上的大幅变动，你可以只修改提示符中的符号。请你根据当前系统支持的字符集和开发环境的设置等隐私，在如下三种预设中进行选择。

- 如果你的系统不支持 Unicode 或你不喜欢使用图标，可以考虑 `plain-text-symbols` 。
- 如果你并未将环境均设置为使用 Nerd Font 且希望使用图标，可以考虑 `no-nerd-font` 。
- 如果你的环境完全支持 Nerd Font 且希望使用 Nerd 图标，可以考虑 `nerd-font-symbols` 。

如果你希望做出外观上的一定变动，你可以使用如下预设：

- 如果你喜欢 [Pure](https://github.com/sindresorhus/pure) 提示符的简约感，可以考虑 `pure-preset` 。
- 如果你希望使用稍显极客感的几何图标，并且 Shell 支持右侧提示符，可以考虑 `jetpack` 。它使用 Terminal 的配色方案并且按照 JetBrains Mono 字体做出了精细的调整。

