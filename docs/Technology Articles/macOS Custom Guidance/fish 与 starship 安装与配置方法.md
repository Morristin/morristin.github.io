运行如下命令安装 fish 并将其设置为系统默认 shell ：

```shell
brew install fish

echo '/opt/homebrew/bin/fish' | sudo tee -a /etc/shells
# 向操作系统允许的 shell 列表中写入新安装的 fish shell 。

# cat /etc/shells
# 如果需要，运行此行代码检查文件中是否存在 fish shell 的路径。

chsh -s /opt/homebrew/bin/fish
# 将系统默认 shell 更改为 fish。如果你不希望更改默认 shell，只需要不执行该命令即可。
```

运行如下命令为 fish 下载安装 prompt 工具 starship：

```shell
brew install starship

mkdir -p ~/.config/fish/
echo 'starship init fish | source' >> ~/.config/fish/config.fish
# 将运行时启动 starship 写入 fish shell 的配置文件。

mkdir -p ~/.config/
cp nerd-font-symbols.toml ~/.config/starship.toml
# 请将 nerd-font-symbols.toml 替换为你预先准备的 starship 配置路径和名称。
# 如果你没有准备 starship 配置，则可以直接跳过这一步。或者执行如下命令创建配置文件。
# touch ~/.config/starship.toml
```
