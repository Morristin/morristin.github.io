# 使用 SSH 密钥向云端 Git 仓库服务验证身份

绝大多数云端 Git 仓库托管服务都支持使用 SSH 密钥进行身份的验证。本文将以 GitHub 和 Codeberg 为例，给出 SSH 密钥配置的通用流程。

> [!caution] 如果你不希望使用 SSH 密钥
> 
> 如果你不希望使用 SSH，那么你必须设置 OAuth 令牌（Personal access token）。这代表你会创建一个权限相当于 2FA 和 PassKey 的密码——作者个人强烈建议不要这么做。

需要注意，由于 SSH 在各系统实现均不相同，**下文内容只保证适用于 macOS** 。Linux 用户可能需要在配置出现问题时查阅你所使用托管平台的官方文档。

## 生成 SSH 密钥

先在终端中执行如下命令。该命令会启动交互式会话引导你创建 SSH 密钥。

```shell
ssh-keygen -t ed25519 -a 100 -C "Something about this SSH key."
```

- `-t` 选项指定创建密钥的类型。`ed25519` 是一般 SSH 密钥的默认类型。
- `-a` 选项指定利用 passphrase 加密私钥时加密过程循环的次数。Codeberg 建议将该循环次数设置为较大的数值（该选项默认值为 16），GitHub 教程中则未指定该选项。
- `-C` 选项为创建行为提供一个 comment 。GitHub 推荐使用邮箱地址作为评论的内容。

### 通过交互式会话生成 SSH 密钥

交互式会话中，主要存在以下两个环节：

1. 「Enter a file in which to save the key」：要求用户输入密钥文件的存储位置。
2. 「Enter passphrase」：要求用户输入密钥文件的加密密码。

对于第一个环节来说，如果你希望更好地管理 SSH 密钥，请为密钥文件赋予一个有意义的名称。

> [!warning] 用户输入的路径会被默认视为相对路径
> 
> 尤其需要注意的是，在第一个环节中，用户输入的路径会被默认视为相对路径。也就是说，如果用户直接填写文件名，会在当前终端工作路径下生成 SSH 密钥。
> 
> 因此，最好填写绝对路径来确保密钥生成在正确位置。一般情况下，格式应该类似于 `~/.ssh/Platform_SSH` 。

对于第二个环节来说，密码能够有效在设备受到攻击时阻止攻击者获得 SSH 密钥而造成更大范围的数据泄露。但一般来说并无此必要，因此你可以直接将其留空以不设置加密密码。

## 设置 SSH 密钥

### 在本地编写 SSH 密钥 Host 文件

> [!caution] 如果你使用 Codeberg 和 GitHub 之外的代码托管平台
> 
> 请在编写配置文件时参考所使用托管平台的官方文档来确认具体配置。作者无法保证所有代码托管平台均遵循主流平台的配置规范。

SSH 密钥的配置由 `~/.ssh/config` 文件指定。对于每个平台，配置内容应当按照如下格式：

```
Host website.address
  Hostname website.address
  User git
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/SSH-Key
```

- Host：用于匹配网址。一般来说与 Hostname 填写相同内容即可。例如 `github.com` 。
- Hostname：指定真实的网址。可以用来指定网站别名或缩略形式。例如 `github.com` 。
- User：用于指定用于登录的用户名，以防止密钥被多个设备或多个用户使用产生冲突。
- AddKeysToAgent：用于指定是否将密钥添加到 ssh-agent 当中，以简化后续调用流程。
- UseKeychain：**只适用于 macOS** 。用于指定是否将密钥添加到本地 keychain 当中。
- IdentityFile：用于指定所使用的密钥文件。请确保路径与名称真实存在。

#### 手动执行 AddKeysToAgent 和 UseKeychain

这两行配置的本质是在调用 `ssh-add` 命令。如果你有跨平台迁移或同步 SSH 密钥与配置文件的需求，你可以考虑手动执行命令而非将其写入配置文件中。

对于 AddKeysToAgent，你可以直接执行 `ssh-add` 即可将密钥添加到 ssh-agent 中。一般来说，macOS 和 Linux 均会在系统启动时同时启动 ssh-agent 。若并未启动，请先行执行如下代码：

```shell
eval $(ssh-agent)
# 该命令需要在 zsh 或 bash 环境下执行。不能保证兼容其他 Shell 类型。
```

对于 UseKeychain，则需要在 `ssh-add` 命令的基础上额外指定参数。命令如下：

```shell
ssh-add --apple-use-keychain ~/.ssh/SSH-Key
```

### 将 SSH 公钥传输到代码托管平台

请通过你所熟悉的方式（例如代码编辑器或 `pbcopy` 命令）获取生成的 SSH 密钥中的公钥，将其**完整**复制到剪贴板。（你可以通过文件名结尾的 `.pub` 来识别公钥）。

然后，在你的代码托管平台上（例如 [Codeberg](https://codeberg.org/user/settings/keys) 和 [GitHub](https://github.com/settings/keys)）导航到 SSH 验证的设置页，跟随网站的引导将 SSH 公钥传输到网站上。你可能需要为公钥设置一个有意义的标签来识别设备。

## 验证 SSH 密钥能否正常使用

为验证 SSH 密钥能否正常使用，只需要直接使用 SSH 向代码托管平台发起连接即可。

1. 运行如下代码发起 SSH 连接。你需要在代码托管平台的官方文档中查询其用于 SSH 验证连接的地址，例如 GitHub 为 `git@github.com`，Codeberg 则为 `git@codeberg.org` 。

```shell
ssh -T git@website.address
```

2. 如果这是你首次向该代码托管平台发起 SSH 连接，客户端会要求你验证以 SHA 256 加密形式呈现的远程连接地址的公钥指纹以防止被[中间人攻击](https://wikipedia.org/wiki/Man-in-the-middle_attack)。请你查阅代码托管平台的官方文档以确保指纹匹配。例如 [Codeberg](https://docs.codeberg.org/security/ssh-fingerprint/) 和 [GitHub](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)。
3. 一般而言，代码托管平台均提供了能够直接写入 `~/.ssh/known_hosts` 文件的指纹集合。你可以在互联网上获取它们并写入文件。例如 [Codeberg](https://codeberg.org/Codeberg/org/src/branch/main/Imprint.md#ssh-fingerprints) 和 [GitHub](https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints) 。

```text
github.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl

codeberg.org ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIVIC02vnjFyL+I4RHfvIGNtOgJMe769VTF1VR4EB3ZB
```

4. 验证完毕后，代码托管平台一般会通过 SSH 向你发送问候信息再关闭连接。如果问候消息匹配你的用户名和密钥名称，说明你的 SSH 密钥设置已经完成。

## 设置 Git 使用 SSH 密钥进行 remote 系列操作

为了使得 Git 使用 SSH 密钥进行身份验证，本地仓库的 remote 地址必须为 SSH 格式。请从你的托管服务提供商处获得 SSH 格式的远程地址，并使用如下命令进行设置：

```shell
git remote set-url <remote-name> <remote-url>
```

如果你需要了解更多命令，请参考 [Git 官方文档](https://git-scm.com/docs/git-remote)。