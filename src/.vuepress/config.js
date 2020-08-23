const { description } = require('../../package')
// Auto sidebar for Functions, MIT License
// https://techformist.com/automatic-dynamic-sidebar-vuepress/
// https://techformist.com/license/
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'PSAppDeployToolkit',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'PowerShell Application Deployment Toolkit',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    codeTheme: 'tomorrow',
    blogConfig: {
      category: {
        location: 1,     // The position occupied in the navigation bar menu, default to 2
        text: 'Blog' // Text default to "Category"
      },
      tag: {
        location: 2,     // The position occupied in the navigation bar menu, default to 3
        text: 'Tag'      // Text default to "Tag"
      }
    },
    vssueConfig: {
      platform: 'github',
      owner: 'PSAppDeployToolkit',
      repo: 'PSAppDeployToolkit-Website',
      admins: ['sintaxasn','seanlillis','luki1412','cybermoloch'],
      clientId: '4082fe8d699562c7efd3',
      clientSecret: '6e281b3d91266876e29e25ae792b118f23506124',
    },
    repo: 'https://github.com/PSAppDeployToolkit/PSAppDeployToolkit',
    docsRepo: 'https://github.com/PSAppDeployToolkit/PSAppDeployToolkit-Website',
    docsDir: 'src',
    editLinks: true,
    editLinkText: '',
    lastUpdated: true,
    logo: '/logo.svg',
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
        icon: 'reco-document'
      },
      {
        text: 'Functions',
        link: '/functions/',
        icon: 'reco-api'
      },
      {
        text: 'About',
        ariaLabel: 'About Menu',
        items: [
          { text: 'About PSADT', link: '/about/about-psadt' },
          { text: 'Screenshots', link: '/about/screenshots' },
          { text: 'Team', link: '/about/team' },
          { text: 'Donations', link: '/about/donations' },
          { text: 'Licensing', link: '/about/licensing' },
        ],
        icon: 'reco-faq'
      },
      {
        text: 'Forum',
        link: 'https://discourse.psappdeploytoolkit.com/',
        icon: 'reco-suggestion'
      }
    ],
    sidebar: {
      '/guide/':  getSideBar('guide','Guide'),
      '/functions/': getSideBar('functions','Functions')
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      item =>
        item.toLowerCase() != "readme.md" &&
        item != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: ["", ...files] }];
}
