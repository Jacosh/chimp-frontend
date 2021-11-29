import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ChimpSwap',
  description:
    'The most popular AMM on VELAS by user count! Earn WAG through yield farming or win it in the Lottery, then stake it in Sizzle Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ChimpSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://exchange.wagyusw.app/images/hero.png',
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
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ChimpSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('ChimpSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('ChimpSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('ChimpSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('ChimpSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('ChimpSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ChimpSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ChimpSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('ChimpSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ChimpSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('ChimpSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ChimpSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ChimpSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ChimpSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ChimpSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ChimpSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ChimpSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ChimpSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('ChimpSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('ChimpSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('ChimpSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('ChimpSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('ChimpSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('ChimpSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
