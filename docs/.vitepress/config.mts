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
          text: "Homebrew: macOS 最为著名的包管理器",
          link: "/Technology Articles/macOS Custom Guidance/Introduction to Homebrew.md",
        },
        {
          text: "mihomo VPN Service",
          items: [
            {
              text: "mihomo 裸内核运行教程",
              link: "/Technology Articles/macOS Custom Guidance/mihomo VPN Service/mihomo Installation and Setup.md",
            },
          ],
        },
        {
          text: "Shells and Terminals",
          items: [
            {
              text: "Fish: 现代、智能且友好的 Shell",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Introduction to Fish Shell.md",
            },
            {
              text: "Ghostty: 功能丰富、渲染高速的跨平台终端仿真器",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Introduction to Ghostty.md",
            },
            {
              text: "Starship: 极简、高速和高度自定义的跨终端 Prompt",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Introduction to Starship Prompt.md",
            },
            {
              text: "使用 SSH 密钥向云端 Git 仓库服务验证身份",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Using SSH to Authorize for Git.md",
            },
          ],
        },
        {
          text: "Browser and Plugins",
          items: [
            {
              text: "LibreWolf: 注重隐私、安全与自由的浏览器",
              link: "/Technology Articles/macOS Custom Guidance/Browser and Plugins/Introduction to LibreWolf.md",
            },
            {
              text: "Firefox 扩展推荐",
              link: "/Technology Articles/macOS Custom Guidance/Browser and Plugins/Recommended Firefox Extensions.md",
            },
            {
              text: "Dark Reader 配置指南",
              link: "/Technology Articles/macOS Custom Guidance/Browser and Plugins/Dark Reader Config Guidance.md",
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
