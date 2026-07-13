运行如下命令下载 Ghostty 。为将 Ghostty 设置为默认终端，请手动打开 Ghostty 后单击菜单栏中的 Ghostty 文本，即可找到选项 Make Ghostty the Default Terminal 。

```shell
brew install ghostty

# vim ~/Library/Application\ Support/com.mitchellh.ghostty/config.ghostty
# 如果你希望调整 Ghostty 的文本表现和主题颜色，请执行该命令打开配置文件并修改。
```

笔者在此给出自用的外观设置。其最终效果类似于无边框无按键的 Linux 终端。

```toml
theme = light:nord light, dark:nord

font-family = ""
font-family = "Jetbrains Mono"
font-family = "JetbrainsMono Nerd Font"
font-family = "LXGW WenKai Mono"

macos-titlebar-style = hidden
window-padding-x = 16
window-padding-y = 12
```
