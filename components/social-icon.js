import Image from 'next/image'

const SocialIcon = ({ linkTo, img, alt }) => (
  <a
    href={linkTo}
    className={`w-8 h-8 border border-solid border-lightGray flex justify-center items-center focus:outline-none transition-all duration-200 linear hover:border-orange icon`}
    aria-label={alt}
  >
    <Image
      src={img}
      alt={alt}
      title={alt}
      width='13'
      height='13'
      className='transition-all duration-200 linear'
    />
  </a>
)

export default SocialIcon
