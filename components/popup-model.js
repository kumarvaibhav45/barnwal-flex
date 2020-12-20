import Image from 'next/image'

const PopupModel = ({ img, title, close, width, height }) => (
  <div className='flex flex-col'>
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
      <p>{title}</p>
      <button
        onClick={close}
        className='text-sm rounded-none border border-black hover:bg-black  hover:text-white px-1.5 transition-all duration-100'
      >
        &times;
      </button>
    </div>
  </div>
)

export default PopupModel
