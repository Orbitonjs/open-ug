import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Open UG",
  tagline: "Enhancing the developer community in Uganda through Open Source",
  favicon: "img/open-ug.png",

  // Set the production url of your site here
  url: "https://open.cranom.cloud",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "open-ug", // Usually your GitHub org/user name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-HNFVP2H2EX",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ugmobilemoney",
        path: "ugmobilemoney",
        routeBasePath: "ugmobilemoney",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "reactjs-media",
        path: "reactjs-media",
        routeBasePath: "reactjs-media",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "crane-operator",
        path: "crane-operator",
        routeBasePath: "crane-operator",
        // ... other options
      },
    ],
  ],

  themeConfig: {
    metadata: [
      { name: "google-adsense-account", content: "ca-pub-4708563499603847" },
    ],
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: "meta",
        attributes: {
          name: "monetag",
          content: "937d7fedcdcf00e8eab3779fc48fc1cc",
        },
      },
    ],
    // Replace with your project's social card
    image: "img/open-ug.png",
    navbar: {
      title: "OPEN UG",
      logo: {
        alt: "open-ug-logo",
        src: "img/open-ug.png",
      },
      items: [
        {
          position: "left",
          to: "/#projects",
          label: "Projects",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/open-ug",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Platforms",
          items: [
            {
              label: "Cranom Cloud",
              href: "https://cranom.cloud",
            },
            {
              label: "Cranom Store",
              href: "https://store.cranom.cloud",
            },
          ],
        },
        {
          title: "Projects",
          items: [
            {
              label: "UG Mobile Money",
              href: "https://github.com/open-ug/ugmobilemoney-py",
            },
            {
              label: "ReactJS Media",
              href: "https://github.com/jim-junior/reactjs-media",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Site Map",
              href: "https://open.cranom.cloud/sitemap.xml",
            },
            {
              label: "GitHub",
              href: "https://github.com/open-ug",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open UG, Beingana Jim Junior.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4708563499603847",
      async: true,
      crossorigin: "anonymous",
    },
  ],
};

export default config;
