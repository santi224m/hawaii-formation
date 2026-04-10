import Image from 'next/image'

export default function Loihi() {
  return (
    <section id="loihi" className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">Lō'ihi: The Island Being Born</h2>
            <p className="text-lg text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row-reverse md:items-center gap-12">

            {/* Right: main image (flipped for visual variety) */}
            <div className="md:w-1/2">
              <Image
                unoptimized
                src="https://placehold.co/800x600?text=Loihi+Seamount"
                alt="Loihi seamount placeholder"
                width={800}
                height={600}
                className="rounded-lg w-full"
              />
            </div>

            {/* Left: text content */}
            <div className="md:w-1/2 space-y-6">

              {/* Feature 1 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">An Underwater Volcano</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Still Actively Erupting</h3>
                <p className="text-gray-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">~10,000-100,000 Years Away</h3>
                <p className="text-gray-400">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: 'Depth', value: '3,200 ft below sea level' },
                  { label: 'Distance from Big Island', value: '22 miles SE' },
                  { label: 'Est. emergence', value: '~10,000-100,000 years' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-black/20 rounded-lg px-4 py-3">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-gray-100 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>

              {/* Small supporting image */}
              <Image
                unoptimized
                src="https://placehold.co/600x300?text=Loihi+Map"
                alt="Loihi cross section placeholder"
                width={600}
                height={300}
                className="rounded-lg w-full"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}