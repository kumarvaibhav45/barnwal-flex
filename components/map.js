import Image from 'next/image'
import { useState } from 'react'

export default function GoogleMap({ smallIcon }) {
  const [isMapOpen, setIsMapOpen] = useState(false)
  return (
    <div className='w-full'>
      <button
        className='w-full border-0 bg-black text-white uppercase py-6 text-sm locate-us transition-all duration-250 ease hover:underline focus:outline-none sm:text-base md:text-xl lg:text-2xl'
        onClick={() => {
          setIsMapOpen(!isMapOpen)
        }}
      >
        Locate us on map
        <span className='ml-1.5'>
          {isMapOpen ? (
            <Image
              src='/assets/images/icons/angle-up.svg'
              width={smallIcon ? '16' : '20'}
              height={smallIcon ? '16' : '20'}
            />
          ) : (
            <Image
              src='/assets/images/icons/angle-down.svg'
              width={smallIcon ? '16' : '20'}
              height={smallIcon ? '16' : '20'}
            />
          )}
        </span>
      </button>
      <div
        className={`transition-all duration-200 ease-linear ${
          isMapOpen ? 'h-80 bg-lightGray' : 'h-0 overflow-none'
        }`}
      ></div>
    </div>
  )
}
