const commonHeads = [
  ['meta', { name: 'google-site-verification', content: 'JrmhhHwR9CgKUyPUL9cqjJGDpDnK_E72RP0tK8OwNBs' }],
  ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.css' }],
  [
    'script',
    {
      src: 'https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.js',
    },
  ],
];

export default {
  outDir: '../dist',
  base: process.env.NODE_ENV === 'production' ? '/doc/' : '/',
  title: 'Visual-DDD',
  description: 'DDD开发云',
  lastUpdated: true,
  logo: '/logo.svg',
  head:
    process.env.NODE_ENV === 'production'
      ? [
          ...commonHeads,
          [
            'script',
            {},
            `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8f89c6abfda75f0236c445c32f4940aa";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
          ],
        ]
      : [...commonHeads],
  footer: {
    message: '让 AI 成为你的工作利器，轻松解决繁琐工作',
    copyright: 'Copyright © 2022-present Visual-ddd',
  },
  themeConfig: {
    nav: [
      {
        text: '文档',
        link: '/base/install',
      },
      {
        text: 'API',
        link: '/api/index',
      },
      {
        text: '变更记录',
        link: '/base/change-log',
      }
    ],
    sidebar: {
      '/': [
        {
          text: '开始',
          items: [
            {
              text: '安装',
              link: '/base/install',
            }
          ],
        },
      ],
      "/api/":[]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/visual-ddd/visual-ddd-client',
      },
      // {
      //   icon: {
      //     svg: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="codesandbox-icon"><title>codesandbox</title><path d="M14 4.69998L8.01676 7.99562C8.00621 8.00143 7.99379 8.00143 7.98324 7.99562L2 4.69998M8 7.99998V14.6666M13.9897 11.3381L8.00838 14.6644C8.00311 14.6674 7.99689 14.6674 7.99162 14.6644L2.01033 11.3381C2.004 11.3346 2 11.3274 2 11.3195L2 4.70712C2 4.69929 2.00397 4.69212 2.01027 4.68859L7.99156 1.33554C7.99687 1.33257 8.00313 1.33257 8.00843 1.33554L13.9897 4.68859C13.996 4.69212 14 4.69929 14 4.70712V11.3195C14 11.3274 13.996 11.3346 13.9897 11.3381Z" stroke="currentColor" stroke-linejoin="round"></path></svg>`,
      //   },
      //   link: 'https://codesandbox.io/p/sandbox/wakeadmin-components-fc4x8x',
      //   ariaLabel: 'codesandbox',
      // },
    ],
  },
};
