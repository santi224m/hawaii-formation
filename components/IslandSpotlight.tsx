import Image from 'next/image'

const statusColors = {
  active:   { bg: 'bg-red-900/40',    text: 'text-red-300',    dot: 'bg-red-400'    },
  dormant:  { bg: 'bg-yellow-900/40', text: 'text-yellow-300', dot: 'bg-yellow-400' },
  extinct:  { bg: 'bg-gray-700/60',   text: 'text-gray-300',   dot: 'bg-gray-400'   },
}

export default function IslandSpotlight({ island, index }) {
  const imageOnLeft = index % 2 === 0
  const isGreenBg = index % 2 === 0
  const status = statusColors[island.status] ?? statusColors.dormant

  return (
    <section
      id={island.id}
      className={isGreenBg ? 'bg-gray-50' : 'bg-gray-800'}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>

            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src={island.image || `https://placehold.co/800x600?text=${encodeURIComponent(island.name)}`}
                alt={`${island.name} placeholder`}
                width={800}
                height={600}
                unoptimized
                className="rounded-lg w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 space-y-6">

              {/* Header */}
              <div>
                <p className="text-green-400 text-sm font-medium uppercase tracking-wide mb-1">Island Spotlight</p>
                <h2 className="h2 font-cabinet-grotesk text-gray-100">{island.name}</h2>
                <p className="text-gray-400 mt-3">{island.description}</p>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Age</p>
                  <p className="text-gray-100 font-medium">{island.age}</p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Area</p>
                  <p className="text-gray-100 font-medium">{island.area}</p>
                </div>
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Highest peak</p>
                  <p className="text-gray-100 font-medium">{island.highestPeak}</p>
                </div>
                <div className={`${status.bg} rounded-lg p-4`}>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${status.dot} flex-shrink-0`} />
                    <p className={`${status.text} font-medium capitalize`}>{island.status}</p>
                  </div>
                </div>
              </div>

              {/* Volcanoes */}
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">Key volcanoes</p>
                <div className="flex flex-wrap gap-2">
                  {island.volcanoes.map((v) => (
                    <span key={v} className="bg-black/20 text-gray-300 text-sm px-3 py-1 rounded-full">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}