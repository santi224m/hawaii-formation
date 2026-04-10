import Image from 'next/image'

export default function IslandChainFormation() {
  return (
    <section id='island-chain-formation' className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">How The Island Chain Formed</h2>
            <p className="text-lg text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12 mb-16">
            {[
              { label: '5.1 Million Years Ago', title: 'Kauai Emerges', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.' },
              { label: '3.7 Million Years Ago', title: 'Oahu Rises', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
              { label: '1.9 Million Years Ago', title: 'Maui Forms', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
              { label: '300,000 Years Ago', title: 'Big Island Begins', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
            ].map((item, index) => (
              <div key={index} className="flex gap-8 items-start">
                {/* Timeline indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1" />
                  {index < 3 && <div className="w-px h-20 bg-gray-600 mt-2" />}
                </div>
                {/* Content */}
                <div className="pb-4">
                  <span className="text-blue-400 text-sm font-medium uppercase tracking-wide">{item.label}</span>
                  <h3 className="text-xl font-semibold text-gray-100 mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom image + text */}
          <div className="flex flex-col md:flex-row gap-12 items-center">

            <div className="md:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">The Pacific Plate</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Northwest Drift</h3>
                <p className="text-gray-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/800x500?text=Pacific+Plate+Map"
                alt="Pacific plate map placeholder"
                width={800}
                height={500}
                unoptimized
                className="rounded-lg w-full"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}