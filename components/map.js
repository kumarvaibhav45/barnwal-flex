import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/map.module.css'

export default function Map({ smallIcon }) {
  const [isMapOpen, setIsMapOpen] = useState(false)

  return (
    <div className='w-full'>
      <button
        className={`w-full flex justify-center items-center py-6 border-0 bg-btnBlack text-white uppercase text-sm transition-all duration-250 ease hover:underline hover:bg-bgGray hover:text-btnBlack focus:outline-none sm:text-base md:text-xl lg:text-2xl ${styles.locateUs}`}
        onClick={() => {
          setIsMapOpen(!isMapOpen)
        }}
        aria-label='Open Map'
      >
        Locate us on map
        <span className='ml-1.5 pt-1 pb-0'>
          {isMapOpen ? (
            <Image
              src='/assets/images/icons/angle-up.svg'
              alt=''
              width={smallIcon ? '16' : '24'}
              height={smallIcon ? '16' : '24'}
            />
          ) : (
            <Image
              src='/assets/images/icons/angle-down.svg'
              alt=''
              width={smallIcon ? '16' : '24'}
              height={smallIcon ? '16' : '24'}
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
