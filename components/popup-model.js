import Image from 'next/image'

const PopupModel = ({ img, title, close, width, height }) => (
  <div className='flex flex-col'>
    <Image src={img} width={width} height={height} alt={title} title={title} />
    <div className='flex justify-between items-center mt-0.5 text-xs md:text-sm'>
      <p className='text-sm pt-2 capitalize md:text-base'>{title}</p>
      <button
        onClick={close}
        aria-label='Close Popup Modal'
        className='text-3xl w-6 h-6 px-0 mb-1 hover:text-orange transition-all duration-100 focus:outline-none'
      >
        &times;
      </button>
    </div>
  </div>
)

export default PopupModel
