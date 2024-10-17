import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Mailguard",
  tagline: "Mailguard Knowledge Center",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://learn.mailguard.codes",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "knowledge-center", // Custom folder path for your documentation
          routeBasePath: "knowledge-center", // The URL base path will be /knowledge-center
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: "",
      logo: {
        alt: "Mailguard logo",
        src: "/img/mailguard-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Knowledge Center",
        },

        { type: "localeDropdown", position: "right" },

        {
          href: "https://github.com/frontline-hq/mailguard-kc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: " ",
          items: [
            {
              label: "MailGuard",
              href: "https://mailguard.codes",
            },
            {
              label: "frontline",
              href: "https://frontline.codes",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MailGuard - Powered by frontline`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
