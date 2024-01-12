const commonHeads = [
  [
    'meta',
    {
      name: 'google-site-verification',
      content: 'JrmhhHwR9CgKUyPUL9cqjJGDpDnK_E72RP0tK8OwNBs',
    },
  ],
  [
    'link',
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.css',
    },
  ],
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
        link: '/base/product/DDD可视化开发平台文档/产品概述/产品简介.md',
      },
      {
        text: 'API',
        link: '/api/index',
      },
      {
        text: '变更记录',
        link: '/base/change-log',
      },
    ],
    sidebar: {
      '/': [
        {
          text: '产品概述',
          items: [
            {
              text: '欢迎使用Visal-DDD',
              link: '/base/product/DDD可视化开发平台文档/产品概述/欢迎使用Visual-DDD.md'
            },
            {
              text: '产品简介',
              link: '/base/product/DDD可视化开发平台文档/产品概述/产品简介.md',
            },
            {
              text: '平台基础概念',
              link: '/base/product/DDD可视化开发平台文档/产品概述/平台基础概念.md',
            },
            {
              text: '最新动态',
              link: '/base/product/DDD可视化开发平台文档/产品概述/最新动态.md',
              items: [
                {
                  text: '功能发布记录',
                  link: '/base/product/DDD可视化开发平台文档/产品概述/产品公告/功能发布记录.md',
                },
              ],
              collapsible: true,
              collapsed: true,
            },
          ],
          collapsible: true,
          collapsed: true,
        },

        {
          text: '快速入门',
          items: [
            {
              text: '部署文档',
              link: '/base/product/DDD可视化开发平台文档/快速入门/部署文档.md'
            },
            {
              text: '快速入门概述',
              link: '/base/product/DDD可视化开发平台文档/快速入门/快速入门概述.md'
            },{
                text: '示例项目',
                items:[
                  {
                    text:'示例项目简介',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/示例项目简介.md'
                  },
                  {
                    text: '示例项目的使用限制说明',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/示例项目限制说明.md'
                  },
                  {
                    text: '步骤一：业务场景分析',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤一：业务场景分析.md'
                  },
                  {
                    text: '步骤二：场景过程分析',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤二：场景过程分析.md'
                  },
                  {
                    text: '步骤三：领域建模',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤三：领域建模.md'
                  },
                  {
                    text: '步骤四：设计评审与校验',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤四：设计评审与校验.md'
                  },
                  {
                    text: '步骤五：模型即代码',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤五：模型即代码.md'
                  },

                  {
                    text: '步骤六：AI辅助编码',
                    link: '/base/product/DDD可视化开发平台文档/快速入门/示例项目/步骤六：AI辅助编码.md'
                  }
                ],
                collapsible: true,
                collapsed: true,
            }

            ],
          collapsible: true,
          collapsed: true,
        },

        {
          text: '操作指南',
          items: [
            {
              text: '平台和项目管理',
              link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理.md',
              items: [
                {
                  text: '系统管理',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/系统管理.md',
                  items: [
                    {
                      text: '组织管理',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/系统管理/组织管理.md',
                    },
                    {
                      text: '用户管理',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/系统管理/用户管理.md',
                    },
                  ],
                  collapsible: true,
                  collapsed: true,
                },
                {
                  text: '组织团队管理',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/组织团队管理.md',
                  items: [
                    {
                      text: '团队管理',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/组织团队管理/团队管理.md',
                    },
                    {
                      text: '团队成员管理',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/组织团队管理/团队成员管理.md',
                    },
                  ],
                  collapsible: true,
                  collapsed: true,
                },
                {
                  text: '团队应用管理',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/团队应用管理.md',
                  items: [
                    {
                      text: '统一语言',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/团队应用管理/统一语言.md',
                    },
                    {
                      text: '业务场景管理',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/团队应用管理/业务场景管理.md',
                    },
                    {
                      text: '业务域管理',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/团队应用管理/业务域管理.md',
                    },
                    {
                      text: '应用管理',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/平台和项目管理/团队应用管理/应用管理.md',
                    },
                  ],
                  collapsible: true,
                  collapsed: true,
                },
              ],
              collapsible: true,
              collapsed: true,
            },

            {
              text: '业务建模平台',
              link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台.md',
              items: [
                {
                  text: '业务建模概述',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务建模平台概述.md',
                },
                {
                  text: '业务场景建模',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务场景建模.md',
                  items: [
                    {
                      text: '业务流程',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务场景建模/业务流程图.md',
                    },
                    {
                      text: '服务模型',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务场景建模/服务模型.md',
                    },
                  ],
                  collapsible: true,
                  collapsed: true,
                },
                {
                  text: '业务域建模',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务域建模.md',
                  items: [
                    {
                      text: '需求文档',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务域建模/需求文档.md',
                    },
                    {
                      text: '统一语言',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务域建模/统一语言.md',
                    },
                    {
                      text: '领域模型',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务域建模/领域模型.md',
                    },
                    {
                      text: '查询模型',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务域建模/查询模型.md',
                    },
                    {
                      text: '数据模型',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务域建模/数据模型.md',
                    },
                    {
                      text: '对象映射关系模型',
                      link: '/base/product/DDD可视化开发平台文档/操作指南/业务建模平台/业务域建模/对象映射关系模型.md',
                    },
                  ],
                  collapsible: true,
                  collapsed: true,
                },
              ],
              collapsible: true,
              collapsed: true,
            },

            {
              text: '应用开发平台',
              link: '/base/product/DDD可视化开发平台文档/操作指南/应用开发平台.md',
              items: [
                {
                  text: '应用开发平台概述',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/应用开发平台/应用开发平台概述.md',
                },
                {
                  text: 'IDEA插件集成',
                  link: '/base/product/DDD可视化开发平台文档/操作指南/应用开发平台/IDEA插件集成.md',
                },
              ],
              collapsible: true,
              collapsed: true,
            },
          ],
          collapsible: true,
          collapsed: true,
        },

        {
          text: '最佳实践',
          items: [
            // {
            //   text: 'DDD产物规范',
            //   link: '/base/product/DDD可视化开发平台文档/最佳实践/DDD产物规范.md',
            // },
            {
              text: 'DDD可视化平台的DSL设计',
              link: '/base/product/DDD可视化开发平台文档/最佳实践/DDD可视化平台的DSL设计.md',
            },
            {
              text: '代码生成模块最佳实践',
              link: '/base/product/DDD可视化开发平台文档/最佳实践/代码生成模块最佳实践.md',
            },
          ],
          collapsible: true,
          collapsed: true,
        },
      ],
      '/api/': [],
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
