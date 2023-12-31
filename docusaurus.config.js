// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neosuite',
  tagline: 'Autonomous Global Payroll Now, a Reality!',
  favicon: 'img/Neosuite_logo.svg',

  // Set the production url of your site here
  url: 'https://neosuite-uat.neeyamo.works',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NeeyamoWorks', // Usually your GitHub org/user name.
  projectName: 'neeyamoworks.github.io', // Usually your repo name.
  deploymentBranch:"gh-pages",
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NeeyamoWorks/neosuite-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NeeyamoWorks/neosuite-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark'
      },
      navbar: {
        title: 'Neosuite',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Neosuite_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
         { to: '/api', label: 'API', position: 'left' },
		
		    { to: '/blog', label: 'Blog', posion: 'left'},
		    { to: '/solutions', label: 'Solutions', position: 'left' },
		    { to: '/resources', label: 'Resources', position: 'left' },
		    { to: '/partner-network', label: 'Partner Network', position: 'left' },
		    { to: '/customer-enablement', label: 'Customer Enablement', position: 'left' },
		    { to: '/event', label: 'Event', position: 'left' },
		    {
           to: '/login',
           label: 'Sign in',
           position: 'right',
           className: 'button button--secondary button--lg'
         },
        {
            href: 'https://github.com/NeeyamoWorks',
            label: 'GitHub',
            position: 'right',
         },
       ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/neosuite',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/neosuite',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/neosuite',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NeeyamoWorks/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} neeyamoworks.github.io, Inc. Built with Neeyamo.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
