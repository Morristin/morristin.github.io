import { defineConfig } from "vitepress";
import markdownItFootnoot from "markdown-it-footnote";

export default defineConfig({
  title: "Morristin's DreamLand",
  titleTemplate: ":title - Mo's DreamLand",

  themeConfig: {
    outline: 'deep',

    nav: [
      { text: "Home", link: "/" },
      {
        text: "macOS Custom Guidance",
        link: "/Technology Articles/macOS Custom Guidance",
        activeMatch: "/Technology Articles/macOS Custom Guidance",
      },
    ],

    socialLinks: [
      { icon: "x", link: "https://x.com/hsmorristin" },
      { icon: "reddit", link: "https://www.reddit.com/u/morristin/" },
      { icon: "github", link: "https://github.com/Morristin/" },
    ],

    sidebar: {
      "/Technology Articles/macOS Custom Guidance": [
        {
          text: "Introduction to Homebrew",
          link: "/Technology Articles/macOS Custom Guidance/Introduction to Homebrew.md",
        },
        {
          text: "mihomo VPN Service",
          items: [
            {
              text: "Installation and Setup",
              link: "/Technology Articles/macOS Custom Guidance/mihomo VPN Service/mihomo Installation and Setup.md",
            },
          ],
        },
        {
          text: "Shells and Terminals",
          items: [
            {
              text: "Introduction to Fish Shell",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Introduction to Fish Shell.md",
            },
            {
              text: "Introduction to Ghostty",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Introduction to Ghostty.md",
            },
            {
              text: "Introduction to Starship",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Introduction to Starship Prompt.md",
            },
            {
              text: "Using SSH to Authorize for Git",
              link: "/Technology Articles/macOS Custom Guidance/Shells and Terminals/Using SSH to Authorize for Git.md",
            },
          ],
        },
        {
          text: "Browser and Plugins",
          items: [
            {
              text: "Introduction to LibreWolf",
              link: "/Technology Articles/macOS Custom Guidance/Browser and Plugins/Introduction to LibreWolf.md",
            },
            {
              text: "Recommended Extensions",
              link: "/Technology Articles/macOS Custom Guidance/Browser and Plugins/Recommended Firefox Extensions.md",
            },
            {
              text: "Dark Reader Config Guidance",
              link: "/Technology Articles/macOS Custom Guidance/Browser and Plugins/Dark Reader Config Guidance.md",
            },
          ],
        },
      ],
    },
  },

  markdown: {
    theme: { light: "one-dark-pro", dark: "nord" },
    config: (md) => {
      md.use(markdownItFootnoot);
    },
  },
});
