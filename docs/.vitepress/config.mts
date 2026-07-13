import { defineConfig } from "vitepress";
import markdownItFootnoot from "markdown-it-footnote";

export default defineConfig({
  title: "Morristin's DreamLand",
  titleTemplate: ":title - Mo's DreamLand",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "macOS Custom Guidance",
        link: "/Technology Articles/macOS Custom Guidance",
        activeMatch: "/Technology Articles/macOS Custom Guidance",
      },
    ],

    sidebar: {
      "/Technology Articles/macOS Custom Guidance": [
        {
          text: "macOS 个性化恢复综述",
          items: [
            {
              text: "macOS 个性化环境恢复",
              link: "/Technology Articles/macOS Custom Guidance/macOS 个性化环境恢复.md",
            },
          ],
        },
        {
          text: "mihomo 代理工具配置方法",
          collapsed: true,
          items: [
            {
              text: "mihomo 安装与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/mihomo 安装与配置方法.md",
            },
            {
              text: "mihomo 配置文件编写技巧",
              link: "/Technology Articles/macOS Custom Guidance/mihomo 配置文件编写技巧.md",
            },
          ],
        },
        {
          text: "终端安装与配置方法",
          collapsed: true,
          items: [
            {
              text: "fish 与 starship 安装与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/fish 与 starship 安装与配置方法.md",
            },
            {
              text: "Ghostty 安装与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/Ghostty 安装与配置方法.md",
            },
          ],
        },
        {
          text: "中州韵输入法安装与配置方法",
          collapsed: true,
          items: [
            {
              text: "Squirrel 鼠须管 与 雾凇拼音 安装与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/Squirrel 鼠须管 与 雾凇拼音 安装与配置方法.md",
            },
          ],
        },
        {
          text: "Obsidian 安装与配置方法",
          collapsed: true,
          items: [
            {
              text: "Obsidian 仓库配置方法",
              link: "/Technology Articles/macOS Custom Guidance/Obsidian 仓库配置方法.md",
            },
          ],
        },
        {
          text: "浏览器与插件安装与配置方法",
          collapsed: true,
          items: [
            {
              text: "Dark Reader 配置技巧",
              link: "/Technology Articles/macOS Custom Guidance/Dark Reader 配置技巧.md",
            },
            {
              text: "LibreWolf 安装与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/LibreWolf 安装与配置方法.md",
            },
            {
              text: "Dark Reader 与 LibreWolf 冲突解决方法",
              link: "/Technology Articles/macOS Custom Guidance/Dark Reader 与 LibreWolf 冲突解决方法.md",
            },
          ],
        },
        {
          text: "代码编辑器与 IDE 安装与配置方法",
          collapsed: true,
          items: [
            {
              text: "VSCodium 安装与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/VSCodium 安装与配置方法.md",
            },
            {
              text: "Codeberg SSH 密钥创建与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/Codeberg SSH 密钥创建与配置方法.md",
            },
            {
              text: "GitHub SSH 密钥创建与配置方法",
              link: "/Technology Articles/macOS Custom Guidance/GitHub SSH 密钥创建与配置方法.md",
            },
          ],
        },
        {
          text: "其他",
          collapsed: true,
          items: [
            {
              text: "macOS 字体推荐",
              link: "/Technology Articles/macOS Custom Guidance/macOS 字体推荐.md",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "x", link: "https://x.com/hsmorristin" },
      { icon: "reddit", link: "https://www.reddit.com/u/morristin/" },
      { icon: "github", link: "https://github.com/Morristin/" },
    ],
  },

  markdown: {
    theme: { light: "one-dark-pro", dark: "nord" },
    config: (md) => {
      md.use(markdownItFootnoot);
    },
  },
});
