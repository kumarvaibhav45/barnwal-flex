import Image from 'next/image'

const PopupModel = ({ img, title, close, width, height }) => (
  <div className='flex flex-col h-full'>
    <Image
      src={img}
      width={width}
      height={height}
      alt={title}
      title={title}
      objectFit='fill'
      unoptimized={true}
    />
    <div className='flex justify-between mt-2 text-xs md:text-sm'>
      <p className='text-sm md:text-base'>{title}</p>
      <button
        onClick={close}
        className='text-xl w-5 h-5 flex justify-center items-center rounded-none border border-black hover:bg-black  hover:text-white transition-all duration-100 lg:w-6 lg:h-6'
      >
        &times;
      </button>
    </div>
  </div>
)

export default PopupModel
