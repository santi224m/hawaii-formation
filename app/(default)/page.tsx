export const metadata = {
  title: 'Hawaiian Islands Formation',
  description: 'Formation of the Hawaiian Islands',
}

import Hero from '@/components/hero'
import IslandChainFormation from '@/components/island-chain-formation'
import FunFacts from '@/components/fun-facts'
import HotSpots from '@/components/hotspots'
import IslandSpotlights from '@/components/island-spotlights'
import Loihi from '@/components/loihi'
import LavaAndRock from '@/components/lava-rock'

export default function Home() {
  return (
    <>
      <Hero />
      <HotSpots />
      <IslandChainFormation />
      <IslandSpotlights />
      <Loihi />
      <LavaAndRock />
      <FunFacts />
    </>
  )
}
