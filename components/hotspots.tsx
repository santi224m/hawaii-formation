import Image from 'next/image'

export default function HotSpots() {
  return (
    <section id='hot-spots'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Volcanic Hot Spots</h2>
            <p className="text-lg text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center gap-12">

            {/* Left: main image */}
            <div className="md:w-1/2">
              <Image
                unoptimized
                src="https://placehold.co/800x600?text=Hot+Spot+Diagram"
                alt="Volcanic hot spot diagram placeholder"
                width={800}
                height={600}
                className="rounded-lg w-full"
              />
            </div>

            {/* Right: text content */}
            <div className="md:w-1/2 space-y-6">

              {/* Feature 1 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">What is a Hot Spot?</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">The Mantle Plume</h3>
                <p className="text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Plate Movement</h3>
                <p className="text-gray-600">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
              </div>

              {/* Small supporting image */}
              <Image
                unoptimized
                src="https://placehold.co/600x300?text=Plate+Movement"
                alt="Plate movement placeholder"
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