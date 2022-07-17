import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'QuantumDex',
  description:
    'The most popular AMM on AME! Earn QTS through yield farming, then stake it in Mercury Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by QuantumDex), and more, on a platform you can trust.',
  image: 'https://quantumdex.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('QuantumDex')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('QuantumDex')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('QuantumDex')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('QuantumDex')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('QuantumDex')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('QuantumDex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('QuantumDex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('QuantumDex')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('QuantumDex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('QuantumDex')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('QuantumDex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('QuantumDex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('QuantumDex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('QuantumDex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('QuantumDex')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('QuantumDex')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('QuantumDex')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('QuantumDex')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('QuantumDex Info & Analytics')}`,
        description: 'View statistics for QuantumDex exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('QuantumDex Info & Analytics')}`,
        description: 'View statistics for QuantumDex exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('QuantumDex Info & Analytics')}`,
        description: 'View statistics for QuantumDex exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('QuantumDex')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('QuantumDex')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('QuantumDex')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('QuantumDex')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('QuantumDex')}`,
      }
    default:
      return null
  }
}
