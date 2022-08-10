import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.quantumdex.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://quantumdex.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.quantumdex.finance/contact-us/telegram",
      },
      {
        label: "QTS",
        href: "https://docs.quantumdex.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.quantumdex.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.quantumdex.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.quantumdex.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.quantumdex.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.quantumdex.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.quantumdex.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/QuantumDEX",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/quantumdex",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/QuantumDexIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/QuantumDex_CN",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/QuantumDexVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/QuantumDexPortuguese",
      // },
      // {
      //   label: "Español",
      //   href: "https://t.me/PancakeswapEs",
      // },
      // {
      //   label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      // },
      // {
      //   label: "Deutsch",
      //   href: "https://t.me/QuantumDex_DE",
      // },
      // {
      //   label: "Filipino",
      //   href: "https://t.me/Pancakeswap_Ph",
      // },
      // {
      //   label: "ქართული ენა",
      //   href: "https://t.me/QuantumDexGeorgia",
      // },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/QuantumDexAnn",
      // },
    ],
  },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  // {
  //   label: "Instagram",
  //   icon: InstagramIcon,
  //   href: "https://instagram.com/pancakeswap_official",
  // },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   href: "https://github.com/pancakeswap/",
  // },
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "https://discord.gg/pancakeswap",
  // },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://quantumdex.medium.com/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
