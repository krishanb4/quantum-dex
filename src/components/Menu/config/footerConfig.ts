import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.quantumdex.finance/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.quantumdex.finance/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.quantumdex.finance/contact-us/telegram',
      },
      {
        label: t('QTM token'),
        href: 'https://docs.quantumdex.finance/tokenomics/cake',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.quantumdex.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.quantumdex.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.quantumdex.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.quantumdex.finance',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.quantumdex.finance/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.quantumdex.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.quantumdex.finance/hiring/become-a-chef',
      },
    ],
  },
]
