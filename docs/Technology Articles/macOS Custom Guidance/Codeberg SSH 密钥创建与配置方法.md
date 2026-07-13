Codeberg 的 SSH 密钥创建与配置方法与 [GitHub SSH 密钥创建与配置方法](GitHub%20SSH%20密钥创建与配置方法.md) 几乎完全一致。如果你已经阅读过该教程，可以直接仿照该教程进行操作（为了安全考虑，不建议复用已有密钥）。

你可以在这里阅读[官方文档](https://docs.codeberg.org/security/ssh-key/)。本文篇幅会相对较短，你也可以参照 [GitHub SSH 密钥创建与配置方法](GitHub%20SSH%20密钥创建与配置方法.md) 进行更加详尽的配置。

```shell
ssh-keygen -t ed25519 -a 100 -C "your_email@example.com"
# 使用你的邮箱地址作为标签生成 SSH 公钥与私钥。你也可以不加入 -C 参数。
# 最好将存储地址改为 ~/.ssh/id_ed25519_codeberg.pub 等地址，以免覆盖 GitHub SSH 密钥。

pbcopy < ~/.ssh/id_ed25519_codeberg.pub
# 请将 id_ed25519 替换为你在 ssh-keygen 命令中输入的文件名。未输入则不用替换。
```

打开 [Codeberg SSH 密钥管理](https://codeberg.org/user/settings/keys) 页面并点击添加。之后打开 `~/.ssh/config`，向其中添加如下内容（注意将其中的 `id_ed25519_codeberg` 替换为你在第一步中输入的密钥文件名）：

```txt
Host codeberg.org
  HostName codeberg.org
  User git
  IdentityFile ~/.ssh/id_ed25519_codeberg
```

最后，你可以运行如下命令检验设置是否成功。

```shell
ssh -T git@codeberg.org
```

另外，如果你在 SSH 密钥文件中设置了密码，你可以执行如下代码避免每次都重复输入：

```shell
eval $(ssh-agent)
ssh-add
```
