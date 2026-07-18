# Fish：现代、智能且友好的 Shell

Fish 是一款极其友好的 Shell，默认提供诸如语法高亮、命令补全等功能，并且针对常用的 git 等应用有深度集成与特殊优化。它历史悠久且被广泛使用，因此主流应用均会对 Fish 做出适配。

> [!warning] 更换默认 Shell 后，你需要注意的事情
> 
> Fish 实现了与主流 Shell 不相类似的[语言](https://fishshell.com/docs/current/language.html)，会导致部分情况下无法运行适用于主流默认 Shell 的脚本。但是，主流应用一般会提供为 Fish 编写的脚本以供调用。
> 
> 例如，在进入 Python 虚拟环境时，你只需要将命令 `source venv/bin/activate` 更改为 `source venv/bin/activate.fish` 。并且一般而言，IDE 会为你完成这一项操作。

你可以访问[官方网站](https://fishshell.com/)来浏览 Fish 最具吸引力的额外功能。

## 安装

1. 运行如下命令使用 Homebrew 进行安装。

```shell
brew install fish
```

2. 安装完毕后，请向 macOS 的 Shell 列表中写入 Fish，使得 Fish 能够被操作系统识别。

```shell
command -v fish | sudo tee -a /etc/shells
```

3. 如果你希望在默认情况下使用 Fish 解释命令，可以运行如下命令更改系统默认 shell 。

```shell
chsh -s /opt/homebrew/bin/fish
```

## 配置

### 修改 Fish 启动时问候语

Fish 默认会在启动时运行预定义的函数 `fish_greeting` 。它向你输出一个简单的问候：

```text
Welcome to fish, the friendly interactive shell
Type help for instructions on how to use fish
```

你可以参考[官方文档](https://fishshell.com/docs/current/cmds/fish_greeting.html)对其进行修改。因为其本质是运行函数，你能够对启动时行为做出任意的调整。如果你只是想要禁用它，直接运行如下命令即可。

```shell
set -U fish_greeting
```

### 配置 Fish Prompt

相比更为主流的 zsh 或是最为经典的 bash，Fish 没有知名的针对其设计与编写的提示符。如果你希望使用提示符优化使用体验，建议从如下方式中选择其一：

- 使用知名的跨终端提示符「Starship」。参考 [Starship 提示符配置教程](Introduction%20to%20Starship%20Prompt.md)。
- 自行修改 Fish 用于生成提示符的函数 `fish_prompt` 。参考[官方文档](https://fishshell.com/docs/current/cmds/fish_prompt.html)。

作者不建议使用由知名的其他终端提示符迁移而来的提示符方案，例如 [Tide](https://github.com/IlanCosman/tide) 和 [Pure](https://github.com/pure-fish/pure)。