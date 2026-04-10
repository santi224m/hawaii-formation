import Image from 'next/image'

export default function LavaAndRock() {
  return (
    <section id="lava-and-rock" className="bg-orange-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-orange-50">Types of Lava & Rock</h2>
            <p className="text-lg text-orange-200/70 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Pāhoehoe */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center gap-12 mb-20">

            {/* Left: image */}
            <div className="md:w-1/2">
              <Image
                unoptimized
                src="https://placehold.co/800x600/7c2d12/fed7aa?text=Pahoehoe+Lava"
                alt="Pahoehoe lava placeholder"
                width={800}
                height={600}
                className="rounded-lg w-full"
              />
            </div>

            {/* Right: text */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-orange-800/50 text-orange-300 text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full">
                Lava Type 01
              </div>
              <h3 className="text-3xl font-semibold text-orange-50 -mt-2">Pāhoehoe</h3>

              <div>
                <h4 className="text-base font-semibold text-orange-100 mb-2">Smooth & Ropy Surface</h4>
                <p className="text-orange-200/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-orange-100 mb-2">Low Viscosity Flow</h4>
                <p className="text-orange-200/70">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: 'Temperature', value: '~1,200°C' },
                  { label: 'Viscosity', value: 'Low' },
                  { label: 'Flow speed', value: 'Up to 10 km/h' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-black/20 rounded-lg px-4 py-3">
                    <p className="text-orange-400/60 text-xs uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-orange-100 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-orange-900 mb-20" />

          {/* ʻAʻā */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row-reverse md:items-center gap-12 mb-20">

            {/* Right: image (flipped) */}
            <div className="md:w-1/2">
              <Image
                unoptimized
                src="https://placehold.co/800x600/7c2d12/fed7aa?text=Aa+Lava"
                alt="A'a lava placeholder"
                width={800}
                height={600}
                className="rounded-lg w-full"
              />
            </div>

            {/* Left: text */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-orange-800/50 text-orange-300 text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full">
                Lava Type 02
              </div>
              <h3 className="text-3xl font-semibold text-orange-50 -mt-2">ʻAʻā</h3>

              <div>
                <h4 className="text-base font-semibold text-orange-100 mb-2">Rough & Jagged Surface</h4>
                <p className="text-orange-200/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-orange-100 mb-2">High Viscosity Flow</h4>
                <p className="text-orange-200/70">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: 'Temperature', value: '~1,000°C' },
                  { label: 'Viscosity', value: 'High' },
                  { label: 'Flow speed', value: 'Up to 1 km/h' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-black/20 rounded-lg px-4 py-3">
                    <p className="text-orange-400/60 text-xs uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-orange-100 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-orange-900 mb-20" />

          {/* Basalt */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center gap-12">

            {/* Left: image */}
            <div className="md:w-1/2">
              <Image
                unoptimized
                src="https://placehold.co/800x600/7c2d12/fed7aa?text=Basalt+Rock"
                alt="Basalt rock placeholder"
                width={800}
                height={600}
                className="rounded-lg w-full"
              />
            </div>

            {/* Right: text */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-orange-800/50 text-orange-300 text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full">
                Rock Type
              </div>
              <h3 className="text-3xl font-semibold text-orange-50 -mt-2">Basalt</h3>

              <div>
                <h4 className="text-base font-semibold text-orange-100 mb-2">The Building Block of Hawaii</h4>
                <p className="text-orange-200/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-orange-100 mb-2">Composition & Properties</h4>
                <p className="text-orange-200/70">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: 'Type', value: 'Igneous' },
                  { label: 'Silica content', value: '45–52%' },
                  { label: 'Origin', value: 'Mantle melt' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-black/20 rounded-lg px-4 py-3">
                    <p className="text-orange-400/60 text-xs uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-orange-100 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}