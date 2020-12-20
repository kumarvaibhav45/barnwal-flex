import Image from 'next/image'
import SearchIcon from './search-icon'

const ZoomCard = ({ img, title = '', width, height, text }) => (
  <div
    title={title}
    className='group m-0 p-0 relative overflow-hidden member-image transition-transform duration-200 ease focus:outline-none cursor-pointer'
  >
    <span
      className={`opacity-0 transition-all duration-200 linear group-hover:opacity-100 absolute z-10 ${
        text
          ? 'inset-3 top-4 lg:top-5'
          : 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
      }`}
    >
      {text ? (
        <div className='flex'>
          <h3 className='uppercase px-2.5 py-1 border border-white text-white text-sm lg:text-lg lg:py-1.5'>
            {text}
          </h3>
        </div>
      ) : (
        <SearchIcon />
      )}
    </span>
    <Image
      src={img}
      title={title}
      alt={title}
      width={width}
      height={height}
      objectFit='cover'
      className='transition-transform duration-100 ease-linear'
    />
  </div>
)

export default ZoomCard
