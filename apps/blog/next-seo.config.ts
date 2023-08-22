import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  // titleTemplate: '%s | GoldenSwap',
  titleTemplate: 'GoldenSwap - Dex & Yieldfarm',
  defaultTitle: 'Blog | GoldenSwap',
  description:
    'Cheaper and faster than Uniswap? Discover PancakeSwap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for BBC.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: '🥞 PancakeSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'GoldenSwap is a community-focused DEX & Yield-Farm. Earn passive income by providing liquidity to your favourite tokens. Launching on Ethereum & PulseChain.',
    images: [{ url: 'https://pancakeswap.finance/images/hero.png' }],
  },
}
