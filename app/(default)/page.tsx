export const metadata = {
  title: 'Hawaiian Islands Formation',
  description: 'Formation of the Hawaiian Islands',
}

import Hero from '@/components/hero'
import Inspiration from '@/components/inspiration'
import IslandChainFormation from '@/components/island-chain-formation'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'
import HotSpots from '@/components/hotspots'
import IslandSpotlights from '@/components/island-spotlights'

export default function Home() {
  return (
    <>
      <Hero />
      <HotSpots />
      <IslandChainFormation />
      <IslandSpotlights />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Inspiration />
      <Cta />
    </>
  )
}
