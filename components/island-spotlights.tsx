'use client'

import { useState } from 'react'
import Image from 'next/image'

const statusColors = {
  all: { bg: 'bg-gray-100', activeBg: 'bg-gray-100', border: 'border-gray-300', dot: 'bg-gray-400', text: 'text-gray-700' },
  active: { bg: 'bg-red-50', activeBg: 'bg-red-100', border: 'border-red-300', dot: 'bg-red-400', text: 'text-red-600' },
  dormant: { bg: 'bg-amber-50', activeBg: 'bg-amber-100', border: 'border-amber-300', dot: 'bg-amber-400', text: 'text-amber-600' },
  extinct: { bg: 'bg-gray-100', activeBg: 'bg-gray-200', border: 'border-gray-300', dot: 'bg-gray-400', text: 'text-gray-500' },
}

const islands: Island[] = [
  {
    id: 'big-island',
    name: "Hawai'i (Big Island)",
    nickname: 'The Big Island',
    age: '~0.4 Ma',
    area: '4,028 sq mi',
    highestPeak: 'Mauna Kea (13,796 ft)',
    status: 'active',
    volcanoes: ['Kilauea', 'Mauna Loa', 'Mauna Kea', 'Hualalai', 'Kohala'],
    image: null,
  },
  {
    id: 'maui',
    name: 'Maui',
    nickname: 'The Valley Isle',
    age: '~0.8-1.3 Ma',
    area: '727.2 sq mi',
    highestPeak: 'Haleakalā (10,023 ft)',
    status: 'dormant',
    volcanoes: ['Haleakalā', 'West Maui'],
    image: null,
  },
  {
    id: 'oahu',
    name: "O'ahu",
    nickname: 'The Gathering Place',
    age: '~2.6-3.7 Ma',
    area: '596.7 sq mi',
    highestPeak: "Mount Ka'ala (4,003 ft)",
    status: 'extinct',
    volcanoes: ["Wai'anae", "Ko'olau"],
    image: null,
  },
  {
    id: 'kauai',
    name: "Kaua'i",
    nickname: 'The Garden Isle',
    age: '~5.1 Ma',
    area: '552.3 sq mi',
    highestPeak: 'Kawaikini (5,243 ft)',
    status: 'extinct',
    volcanoes: ['Waimea Canyon Shield'],
    image: null,
  },
  {
    id: 'molokai',
    name: "Moloka'i",
    nickname: 'The Friendly Isle',
    age: '~1.8-1.9 Ma',
    area: '260.0 sq mi',
    highestPeak: 'Kamakou (4,961 ft)',
    status: 'extinct',
    volcanoes: ['East Molokai', 'West Molokai'],
    image: null,
  },
  {
    id: 'lanai',
    name: "Lāna'i",
    nickname: 'The Pineapple Isle',
    age: '~1.3 Ma',
    area: '140.5 sq mi',
    highestPeak: "Lāna'ihale (3,366 ft)",
    status: 'extinct',
    volcanoes: ["Lāna'i Shield"],
    image: null,
  },
  {
    id: 'niihau',
    name: "Ni'ihau",
    nickname: 'The Forbidden Isle',
    age: '~4.9 Ma',
    area: '69.5 sq mi',
    highestPeak: "Mount Pānī'au (1,250 ft)",
    status: 'extinct',
    volcanoes: ["Ni'ihau Shield"],
    image: null,
  },
  {
    id: 'kahoolawe',
    name: "Kaho'olawe",
    nickname: 'The Target Isle',
    age: '~1.0 Ma',
    area: '44.6 sq mi',
    highestPeak: "Pu'uomoa'ula Nui (1,483 ft)",
    status: 'extinct',
    volcanoes: ["Kaho'olawe Shield"],
    image: null,
  },
]

type FilterKey = 'all' | 'active' | 'dormant' | 'extinct'

const filters: { key: FilterKey; label: string; count: number }[] = [
  { key: 'all', label: 'All Islands', count: islands.length },
  { key: 'active', label: 'Active', count: islands.filter(i => i.status === 'active').length },
  { key: 'dormant', label: 'Dormant', count: islands.filter(i => i.status === 'dormant').length },
  { key: 'extinct', label: 'Extinct', count: islands.filter(i => i.status === 'extinct').length },
]

type Island = {
  id: string
  name: string
  nickname: string
  age: string
  area: string
  highestPeak: string
  status: 'active' | 'dormant' | 'extinct'
  volcanoes: string[]
  image: string | null
}

type Props = {
  island: Island
}

function IslandCard({ island }: Props) {
  const status = statusColors[island.status]

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl shadow-sm border border-gray-100">

      {/* Image */}
      <div className="relative h-44 w-full">
        <Image
          src={island.image || `https://placehold.co/800x400?text=${encodeURIComponent(island.name)}`}
          alt={island.name}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1 space-y-4">

        {/* Name + nickname */}
        <div>
          <p className="text-green-600 text-xs font-medium uppercase tracking-widest mb-1">{island.nickname}</p>
          <h3 className="text-lg font-semibold text-gray-800">{island.name}</h3>
        </div>

        {/* Stats row */}
        <div className="flex gap-4 text-sm">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Age</p>
            <p className="text-gray-700 font-medium">{island.age}</p>
          </div>
          <div className="w-px bg-gray-100" />
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Area</p>
            <p className="text-gray-700 font-medium">{island.area}</p>
          </div>
          <div className="w-px bg-gray-100" />
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Peak</p>
            <p className="text-gray-700 font-medium">{island.highestPeak}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Footer: status + volcanoes */}
        <div className="flex items-center justify-between gap-3">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${status.bg} ${status.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            <span className="capitalize">{island.status}</span>
          </span>
          <div className="flex flex-wrap gap-1 justify-end">
            {island.volcanoes.slice(0, 2).map((v) => (
              <span key={v} className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">{v}</span>
            ))}
            {island.volcanoes.length > 2 && (
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
                +{island.volcanoes.length - 2}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default function IslandSpotlights() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = filter === 'all' ? islands : islands.filter(i => i.status === filter)

  return (
    <section id="island-spotlights" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-10 md:pb-12">
            <h2 className="h2 font-cabinet-grotesk text-gray-800">Island Spotlights</h2>
            <p className="text-lg text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map(({ key, label, count }) => {
              const colors = statusColors[key]
              const isActive = filter === key
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`inline-flex items-center gap-2 text-sm font-medium pl-3 pr-2 py-1.5 rounded-full border transition-all duration-150 ease-in-out
                    ${isActive
                      ? `${colors.activeBg} ${colors.border} ${colors.text}`
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                  {label}
                  <span className={`text-xs font-semibold px-1.5 py-px rounded-full ml-0.5
                    ${isActive ? 'bg-white/60 text-current' : 'bg-gray-100 text-gray-400'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((island) => (
              <IslandCard key={island.id} island={island} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}