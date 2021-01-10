import Image from 'next/image'
const SearchIcon = () => (
  <div
    className={`w-8 h-8 border border-solid border-white flex justify-center items-center focus:outline-none transition-all duration-200 ease-linear focus:outline-none`}
  >
    <Image
      src='/assets/images/icons/search.svg'
      alt='Search Icon'
      width='13'
      height='13'
      className='transition-all duration-200 linear'
    />
  </div>
)

export default SearchIcon
