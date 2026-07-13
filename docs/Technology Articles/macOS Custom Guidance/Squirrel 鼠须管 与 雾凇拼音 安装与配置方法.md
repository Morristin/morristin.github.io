运行如下命令安装鼠须管与雾凇拼音。安装完毕后，请打开系统键盘设置添加鼠须管输入法。

```shell
brew install --cask squirrel-app

git clone https://github.com/rime/plum.git ~/Library/Rime/plum
# 从 GitHub 下载并安装中州韵输入法配置工具 东风破 plum。

bash plum/rime-install iDvel/rime-ice:others/recipes/full
# 运行 东风破 plum，执行雾凇拼音的下载命令。
```

之后，将自定义输入法皮肤导入配置文件，并参照注释手动做出更改：

```shell
echo "" >> ~/Library/Rime/squirrel.yaml
# 向配置文件中写入一个空行，使得视觉上更加美观。
sed 's/^/  /' squirrel.yaml >> ~/Library/Rime/squirrel.yaml
# 向配置文件中添加额外缩进一级的自定义批复文件，使之与原来的缩进层级匹配。
# 请将 squirrel.yaml 更改为你自定义皮肤的路径与名称。

vim ~/Library/Rime/squirrel.yaml
# 打开 squirrel 皮肤配置文件，找到 style 项修改鼠须管的皮肤主题。

vim ~/Library/Rime/default.yaml
# 打开 squirrel 输入法配置文件，找到 menu 和 ascii_composer 项参照下方进行修改。
```

```yaml
# default.yaml
menu:
  page_size: 7 
  
ascii_composer:
  switch_key:
    Caps_Lock: noop
    Shift_L: noop
```

