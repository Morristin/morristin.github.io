import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',

    title: "Morristin's DreamLand",
    titleTemplate: ":title - Mo's DreamLand",
    description: "Morristin's Personal Blog & Knowledge Base",

    markdown: {
        math: true
    },

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: '蓝莓色硅谷', link: '/blueberry-tech'},
            {text: '细细碎碎念', link: '/cloud-whisper'},
            {text: '关于', link: '/about'}
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/Morristin'}
        ],

        sidebar: {
            '/blueberry-tech/': [
                {
                    text: '蓝莓色硅谷',
                    items: [
                        {text: '鼠须管 Squirrel 皮肤配置指北', link: '/blueberry-tech/squirrel-tutorial'}
                    ]
                },
                {
                    text: '关于',
                    items: [
                        {text: '关于「蓝莓色硅谷」', link: '/blueberry-tech'}
                    ]
                }
            ],
            '/cloud-whisper/': [
                {
                    text: '细细碎碎念',
                    items: []
                }
            ],
            '/about/': [
                {
                    text: '关于',
                    items: [
                        {text: '关于 DreamLand', link: '/about/about-dreamland'}
                    ]
                }
            ]
        },

        outline: 'deep',

        footer: {
            message: 'Released under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
            copyright: 'Copyright © 2026-present <a href="https://github.com/Morristin">Morristin Lavender</a>'
        }
    }
})
