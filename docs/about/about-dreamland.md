---
title: 关于 Morristin's DreamLand
description: 关于本网站的内容与技术架构
---

# 关于 Morristin's DreamLand

## 网站内容

正如[网站主页](https://morristin.github.io/)所言，此网站主要由「科技 · 文艺 · 知识库」三部分所构成。

- 「科技」主要发布一些简短的软件折腾指北。Morristin 很喜欢尝试一些软件——尤其是那些设计美观代码开源的宝藏。即便折腾的结果很可能是删除所有文件并且心情迎来低谷。
- 「文艺」主要发布 OC 与小说相关的内容。不过考虑到 Morristin 的心境一直不怎么平静，恐怕这里的内容会在暗无天日的互联网角落长久地蒙上薄薄的灰尘。
- 「知识库」主要发布专业且成体系的学习笔记。只不过 Morristin 依赖能量高峰进行学习与工作的节奏很难真正产出能让自己满意的作品；大多数废稿都只能在接触不良的
  U 盘中度过余生。

## 技术架构

这个网站的技术架构相当简洁。网站的文档在 [Obsidian](https://obsidian.md/) 中以 Markdown
格式写就，再通过 [WebStorm](https://www.jetbrains.com/webstorm/) 导入到 [VitePress](https://vitepress.dev/)
的项目库中进行微调，随后使用 git 推送到 GitHub 自动部署至 GitHub Pages。

### VitePress

VitePress 是一款面向技术产品文档的 SSG（*Static Site Generator*）。Morristin 在一个偶然却又命中注定的午后发现了使用该项目制作的网页，便一见钟情地将它用来搭建了个人主页。

也许你知道，这个网站的主人曾数次尝试过搭建个人主页，但是无不以放弃并删库作为终点。一般这种放弃是从发现网站的自定义选项无法满足自己开始萌芽的，伴随着对于所持数据被特化为其他引擎无法兼容的格式而前功尽弃的焦虑，最终爆发为在
GitHub 上复制粘贴自己的仓库名称。

VitePress 则完美符合了 Morristin 对一个 SSG 的所有期待：

1. 界面清晰、设计美观、适配暗黑模式，且外观能高度自定义。
2. **所有代码和配置文件都使用公开通用的格式进行写作**。
3. **对诸如 Callout 和数学公式等 markdown 格式具有完善的支持**。

## 开源许可

此网站内容内容基于 [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)
协议开源，源代码根据 [MIT License](https://mit-license.org/)
进行开源。如有需要，可以访问[此网站仓库页面](https://github.com/Morristin/Morristin.github.io)获取此网站源代码作为参考。