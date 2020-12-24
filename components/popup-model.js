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
    <div className='flex justify-between items-center mt-2 text-xs md:text-sm'>
      <p className='text-sm pt-2 md:text-base'>{title}</p>
      <button
        onClick={close}
        aria-label='popup model close'
        className='text-3xl w-6 h-6 p-0 hover:text-orange transition-all duration-100'
      >
        &times;
      </button>
    </div>
  </div>
)

export default PopupModel
