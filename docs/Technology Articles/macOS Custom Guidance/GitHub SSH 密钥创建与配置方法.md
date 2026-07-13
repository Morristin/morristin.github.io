GitHub SSH 配置流程参照[官方文档](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/)。

执行如下命令创建 SSH 公钥与私钥，书写相关配置文件并将密钥添加到 Apple Keychain。在执行 `ssh-keygen` 时，程序所询问的文件名和密码可以任意输入。

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
# 使用你的邮箱地址作为标签生成 SSH 公钥与私钥。邮箱地址可以任意填写。

# exec ssh-agent zsh
# 如果你使用 fish ，请先运行此命令。下一步命令的语法不符合 fish 规范。

eval "$(ssh-agent -s)"
# 在后台启动 SSH Agent。

vim ~/.ssh/config
# 创建 SSH 配置文件并打开。将如下内容复制到该配置文件当中。

ssh-add --apple-use-keychain ~/.ssh/id_ed25519
# 请将 id_ed25519 替换为你在第一步中输入的密钥文件名。未输入则不用替换。
```

```text
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

> [!info]- 如果发生了 Bad configuration option 错误
> 
> 请在配置文件中刚刚写入的 `Host github.com` 下方增加一行 `IgnoreUnknown UseKeychain`。其缩进层级与 `UseKeychain` 等配置项保持一致。

之后，运行如下命令将 SSH 公钥拷贝到粘贴板。

```shell
pbcopy < ~/.ssh/id_ed25519.pub
# 请将 id_ed25519 替换为你在 ssh-keygen 命令中输入的文件名。未输入则不用替换。

# cat ~/.ssh/id_ed25519.pub
# 如果上一步命令无法正常生效，请使用这一条命令打印文件的所有内容并手动复制其中的密钥。
```

按照 Settings - SSH and GPG keys - New SSH key / Add SSH key 的顺序在 GitHub 中导航到添加 SSH 密钥的位置。按照提示填写标题，选择密钥类型并粘贴密钥。执行完毕后，运行如下命令进行连通性测试，如若打印了你的用户名并做出正确提示，则配置完毕。

```shell
ssh -T git@github.com
```

