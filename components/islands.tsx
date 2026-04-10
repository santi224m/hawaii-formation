import IslandSpotlight from '@/components/IslandSpotlight'

const islands = [
  {
    id: 'kauai',
    name: 'Kauai',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    age: '~5.1 million years',
    area: '562 sq miles',
    highestPeak: "Mt. Kawaikini (5,243 ft)",
    status: 'extinct',
    volcanoes: ['Waimea Canyon Shield'],
    image: null,
  },
  {
    id: 'oahu',
    name: 'Oahu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    age: '~3.7 million years',
    area: '597 sq miles',
    highestPeak: "Mt. Ka'ala (4,003 ft)",
    status: 'extinct',
    volcanoes: ["Wai'anae", "Ko'olau"],
    image: null,
  },
  {
    id: 'maui',
    name: 'Maui',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    age: '~1.9 million years',
    area: '727 sq miles',
    highestPeak: 'Haleakala (10,023 ft)',
    status: 'dormant',
    volcanoes: ['Haleakala', 'West Maui'],
    image: null,
  },
  {
    id: 'big-island',
    name: 'Hawaii (Big Island)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    age: '~300,000 years',
    area: '4,028 sq miles',
    highestPeak: 'Mauna Kea (13,796 ft)',
    status: 'active',
    volcanoes: ['Kilauea', 'Mauna Loa', 'Mauna Kea', 'Hualalai', 'Kohala'],
    image: null,
  },
]

export default function Page() {
  return (
    <>
      {islands.map((island, index) => (
        <IslandSpotlight key={island.id} island={island} index={index} />
      ))}
    </>
  )
}