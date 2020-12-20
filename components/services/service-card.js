import { useState } from 'react'
import Image from 'next/image'
import ReactCardFlip from 'react-card-flip'

export default function ServiceCard({ img, label, message }) {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <div className='group w-64 h-80 mx-auto'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <div
          onClick={() => {
            setIsFlipped(!isFlipped)
          }}
          className='flex flex-col text-center border border-lightGray group-hover:bg-brightRed group-hover:border-brightRed transition-all duration-200 cursor-pointer'
        >
          <Image
            unoptimized={true}
            title={label}
            src={img}
            width='256'
            height='260'
            objectFit='fill'
          />
          <h3 className='uppercase py-4 text-sm font-bold bg-transparent group-hover:text-white lg:text-sm lg:py-5'>
            {label}
          </h3>
        </div>
        <div
          onClick={() => {
            setIsFlipped(!isFlipped)
          }}
          className='bg-darkGray w-full h-80 px-4 py-6 cursor-pointer overflow-auto text-white border border-white'
        >
          <h3 className='text-sm font-bold mb-2 uppercase sm:text-base'>
            {label}
          </h3>
          <p className='text-xs sm:text-sm'>{message}</p>
        </div>
      </ReactCardFlip>
    </div>
  )
}
