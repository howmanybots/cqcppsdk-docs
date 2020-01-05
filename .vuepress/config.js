module.exports = {
    title: 'CoolQ C++ SDK',
    description: '使用现代 C++ 开发酷Q插件',
    markdown: {
        // lineNumbers: true,
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'application-name', content: 'NoneBot' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'NoneBot' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#00aba9' }]
    ],
    plugins: {
        'container': {
            type: 'tree',
            before: '<pre class="tree-container"><code>',
            after: '</code></pre>'
        },
        '@vuepress/google-analytics': {
            'ga': 'UA-115509121-3'
        },
        '@vuepress/back-to-top': true,
        '@vuepress/medium-zoom': true,
    },
    themeConfig: {
        logo: '/logo.png',
        repo: 'cqmoe/cqcppsdk',
        lastUpdated: '上次更新',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '术语表', link: '/glossary.html' },
            { text: '更新日志', link: '/changelog.html' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                        'before-getting-started',
                        'getting-started',
                        'getting-started-advanced',
                        'macros',
                        'events',
                        'lifecycle-events',
                        'apis',
                        'useful-modules',
                        'app-json',
                        'third-party-libs',
                        'windows-free',
                        'packaging',
                    ]
                }
            ]
        },
    }
}