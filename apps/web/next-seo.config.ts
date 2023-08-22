import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | GoldenSwap',
  defaultTitle: 'GoldenSwap',
  description:
    'Cheaper and faster than Uniswap? Discover PancakeSwap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for CAKE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: 'GoldenSwap on Ethereum and PulseChain',
    description:
      'DEX & Yield-Farm. Earn passive income by providing liquidity to your favourite tokens. Launching on Ethereum & PulseChain.',
    images: [{ url: 'https://pancakeswap.finance/images/hero.png' }],
  },
}
