
> [!warning] 配置 mihomo 裸核运行的必要准备
> 
> 本教程假设读者在阅读时已经拥有一份与当前系统匹配的 mihomo 二进制文件压缩文件、一份能够被正常加载的 mihomo 配置文件和一个有效的代理隧道提供商。

> [!important] 请仔细阅读 shell 脚本中的所有注释。
> 
> 如果你遇到了任何问题，请确保你完全理解了指令的含义。

将所下载的压缩文件解压，并赋予 mihomo 可执行权限。

```shell
gunzip mihomo.gz
# 请将 mihomo.gz 替换为压缩文件在你系统上的实际位置和实际名称。

sudo chmod +x mihomo
# 赋予 mihomo 可执行权限。
# 请将 mihomo 替换为上一步指令执行完毕后得到的可执行文件在你系统上的实际位置和实际名称。

sudo xattr -d com.apple.quarantine mihomo
# 忽略 mihomo 的证书未受到 Apple 信任的问题。
# 请将 mihomo 按照与上一步相同的方法进行替换。
```

将 mihomo 可执行文件移动至受保护位置。（**这一步中展示的受保护位置是为兼容 Homebrew 而选择**。实际可以替换成其他位置，但需要同步更改守护进程描述文件。）

```shell
sudo mkdir -p /opt/homebrew/Cellar/mihomo/1.0.0/bin/
sudo cp mihomo /opt/homebrew/Cellar/mihomo/1.0.0/bin/mihomo
# 请将版本号 1.0.0 替换为你所下载程序的实际版本号。
# 如果你暂时无法确定程序对应的实际版本号，你可以暂时忽略这个问题。

sudo mkdir -p /opt/homebrew/bin/
sudo ln -s /opt/homebrew/Cellar/mihomo/1.0.0/bin/mihomo /opt/homebrew/bin/mihomo
# 为 mihomo 创建 alias。之后的守护进程将基于此别名而非源文件。
# 请确保此命令中的版本号与上一条命令保持一致，即使你使用的并非实际版本号。
```

将 mihomo 配置文件拷贝到配置目录下。需要注意，如果你的配置文件依赖 `geodata` 或 `geoip` 进行分流，可能需要异常长久的时间才能成功连接到代理服务商。

```shell
mkdir -p ~/.config/mihomo/
cp config.yaml ~/.config/mihomo/config.yaml
# 请将第一个参数 config.yaml 替换为你配置文件的实际路径与名称。
```

设置系统级别的 Wi-Fi 代理端口。

```shell
sudo networksetup -setwebproxy "Wi-Fi" "127.0.0.1" 7890
sudo networksetup -setsecurewebproxy "Wi-Fi" "127.0.0.1" 7890
# 如果你的配置文件中 port 并没有设置为默认值 7890，请修改为对应的 port 设置。

sudo networksetup -setwebproxystate "Wi-Fi" on
sudo networksetup -setsecurewebproxystate "Wi-Fi" on
```

创建 mihomo 守护进程，使得 mihomo 能够开机自启并在崩溃后自动重启。

```shell
sudo mkdir -p /Library/LaunchDaemons
sudo touch /Library/LaunchDaemons/one.metacubex.mihomo.plist
# 创建 mihomo 守护进程描述文件。

# sudo chown root:wheel "/Library/LaunchDaemons/one.metacubex.mihomo.plist"
# 如果你使用 cp 命令而非 touch ，你需要额外更改 plist 所有者才能让守护进程正常运行。

sudo vim /Library/LaunchDaemons/one.metacubex.mihomo.plist
# 使用 vim 打开守护进程描述文件，然后将下方文件内容复制粘贴到 vim 编辑器中。
# 注意，必须要将 ~ 替换为 /Users/你的用户名 。否则守护进程无法正常运行。

sudo launchctl bootstrap system /Library/LaunchDaemons/one.metacubex.mihomo.plist
# 启动 mihomo 守护进程。
```

> [!warning] 请务必替换下方配置文件中的配置文件路径。
> 
> 须要将 ProgramArguments 中第三个参数配置文件路径中的 `~` 替换为 `/Users/你的用户名` 。否则 mihomo 将无法读取配置文件。

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
        <string>~/.config/mihomo</string>
    </array>

    <key>KeepAlive</key>
    <true/>

    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```
