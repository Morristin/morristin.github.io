# mihomo 裸内核运行教程

> [!warning] 本教程着重面向 macOS 系统
> 
> 本文着重面向于 macOS。如果你使用其他系统，请自行查询你使用的系统中与之对应的路径和代码。你可以参考官方文档提供的[创建 Linux 运行服务](https://wiki.metacubex.one/startup/service/)。

## 在 macOS 中安装 mihomo 内核

如果你当前已经安装 Homebrew，并且能够不依赖网络代理工具高速且稳定地通过 Homebrew 进行软件的下载与安装，你可以直接运行如下指令，并跳转到下一部分。

```shell
brew install mihomo
```

如果你当前网络环境无法访问到 Homebrew，或者你希望为一台暂时无网络连接的 mac 设备安装并配置 mihomo 代理软件，请继续阅读后续章节并跟随指令完成操作。

### 获取 mihomo 可执行程序

1. 从 [GitHub 上最新的 Release 处](https://github.com/MetaCubeX/mihomo/releases/latest)获取 mihomo 压缩文件[^1]。

[^1]: 如果你使用 ARM 架构（M 系列）芯片的 Mac，请在 Assets 中找到 `mihomo-darwin-arm64` 开头的文件。否则，请你根据[官方提供的帮助文档](https://github.com/MetaCubeX/mihomo/wiki/FAQ)寻找你的设备所需。

2. 将下载完毕的压缩文件移动到 Downloads 文件夹，重命名为 `mihomo.gz` 并执行如下命令。

```shell
cd ~/Downloads/
# 如果你知晓你所下载文件的具体位置，也可以将 ~/Downloads/ 进行替换。

gunzip mihomo.gz
# 此命令将 mihomo.gz 解压为当前工作目录下的同名文件。
# 如果需要，你可以额外增加第二个参数作为解压的目标路径。
```

3. 运行如下命令，赋予 mihomo 可执行权限。

```shell
sudo chmod +x mihomo
```

> [!tip] 如果你是第一次执行 sudo 命令
> 
> sudo 命令会要求你输入具有 root 权限的用户密码。在计算机发展长久的历史上，sudo 命令输入的密码均不会显示在屏幕上；你需要凭借感觉输入全部的密码并按下回车键。

### 手动安装 mihomo 内核

在上一步我们获取了可执行的 mihomo 内核文件。接下来，我们手动模拟 Homebrew 将其安装。请你逐步执行以下命令，并**将其中的 `1.0.0` 全部替换为内核的实际版本号**。

```shell
sudo mkdir -p /opt/homebrew/Cellar/mihomo/1.0.0/bin/
sudo cp mihomo /opt/homebrew/Cellar/mihomo/1.0.0/bin/mihomo
# 将 mihomo 二进制文件移入 Homebrew 的二进制源码库。

sudo mkdir -p /opt/homebrew/bin/
sudo ln -s /opt/homebrew/Cellar/mihomo/1.0.0/bin/mihomo /opt/homebrew/bin/mihomo
# 创建 alias 。之后所有的命令全部指向 alias 而非随版本变动其路径的内核本体。
```

> [!important] 手动安装 Homebrew 应用的前置条件
> 
> 请务必注意，上述命令假设环境变量 `$HOMEBREW_PREFIX` 为 `/opt/homebrew` 。这要求你使用ARM 架构（M 系列）芯片的 Mac，并且不对该环境变量进行手动更改。
> 
> 如果你使用 x86 架构芯片的 Mac，请将 `/opt/homebrew` 全部替换为 `usr/local`。

在你完成 Homebrew 的安装后，请运行如下代码将手动安装的 mihomo 内核与 Homebrew 进行连接。连接完成后，Homebrew 便能够自动为你管理 mihomo 内核的版本更新。

## 为 mihomo 设定配置文件

如果你暂时没有 mihomo 配置文件，请进行如下操作之一来获取：

- 如果你已经拥有代理服务商提供的订阅链接，直接在浏览器中访问该链接。部分代理提供商的订阅链接会直接给出 yaml 格式文件，直接使用该文件作为临时配置文件即可。
- 如果你拥有代理服务商提供的订阅链接，但是访问链接的结果为 URL 格式或人类无法直接理解的 base64 编码，可以考虑使用[官方提供的快捷配置文件](https://wiki.metacubex.one/example/conf/#__tabbed_1_2)。
- 如果你希望自己编写高度自定义的配置文件，请参考[如何撰写 mihomo 配置文件](How%20to%20Write%20mihomo%20Config.md)。

> [!caution] 如果你使用官方提供的快捷配置文件
> 
> 必须注意，官方提供的快捷配置文件中需要使用 GitHub 中下载的分流规则。请务必确保你能够稳定访问 GitHub，否则 mihomo 有可能长久停留在下载分流规则的阶段。

执行如下代码将你的配置文件拷贝到 mihomo 工作目录下。注意**将代码中的 `config.yaml` 更改为你的配置文件的实际路径**。

```shell
mkdir -p ~/.config/mihomo/

cp config.yaml ~/.config/mihomo/config.yaml
# 请将此命令第一个参数 config.yaml 替换为你配置文件的实际路径与名称。
```

## 设置守护进程运行 mihomo 内核

为使得 mihomo 能够开机自启并在在后台始终保持活跃，需要设置守护进程。请严格按照如下步骤进行，因为守护进程配置的问题可能难以暴露与排查。

1. 创建 mihomo 守护进程描述文件，并使用 macOS 默认的文本编辑器打开。

```shell
sudo mkdir -p /Library/LaunchDaemons
sudo touch /Library/LaunchDaemons/one.metacubex.mihomo.plist
sudo open -a textEdit /Library/LaunchDaemons/one.metacubex.mihomo.plist
```

2. 将如下的 PropertyList 文件完整拷贝到打开的守护进程描述文件中，**并且务必将其中 ProgramArguments 键对应数组第三个值中的 `username` 替换为当前用户名**。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>one.metacubex.mihomo</string>

    <key>ProgramArguments</key>
    <array>
        <string>/opt/homebrew/bin/mihomo</string>
        <string>-d</string>
        <string>/Users/username/.config/mihomo</string>
    </array>

    <key>KeepAlive</key>
    <true/>

    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

3. 运行如下命令启动守护进程。这之后，守护进程将根据描述文件中的设置在登录时自动启动，并且在因任意原因退出时均重新启动该进程。

```shell
sudo launchctl bootstrap system /Library/LaunchDaemons/one.metacubex.mihomo.plist
```

## 为系统设置 Wi-Fi 代理端口

运行如下代码设置系统级别的 Wi-Fi 代理端口。其中的 7890 为 mihomo 配置文件的默认值；如果这与你的配置文件不符，请修改为配置文件对应的 port 。

```shell
sudo networksetup -setwebproxy "Wi-Fi" "127.0.0.1" 7890
sudo networksetup -setsecurewebproxy "Wi-Fi" "127.0.0.1" 7890

sudo networksetup -setwebproxystate "Wi-Fi" on
sudo networksetup -setsecurewebproxystate "Wi-Fi" on
```
