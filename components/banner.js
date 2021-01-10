import { useRef, forwardRef } from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import styles from '../styles/banner.module.css'

const Slide = ({ text, banner, fullBanner }) => {
  return (
    <div>
      <div
        className={`${
          fullBanner ? styles.fullBanner : styles.banner
        } flex flex-col justify-center items-center`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className={`flex flex-col justify-center items-center`}>
          <h1 className='px-2 py-1 text-2xl text-center w-10/12 uppercase text-white font-sansBold text-extraBold border border-white sm:text-3xl sm:w-auto sm:py-1.5 sm:px-3 md:text-4xl lg:text-5xl lg:px-8 lg:py-4'>
            {text}
          </h1>
          <div className='mt-6 group lg:mt-8'>
            <Link href='/#contact'>
              <a className='px-3.5 py-2.5 uppercase text-xs font-sansBold rounded text-white bg-btnOrange hover:underline focus:underline sm:px-4 lg:text-sm lg:px-5 lg:py-3'>
                Request a quote
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Banner = forwardRef(({ id, fullBanner }, ref) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 9000,
    cssEase: 'linear',
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '10px' }}>
        <ul className='m-0'>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className='w-4 h-1 border border-white hover:bg-white mr-1 focus:outline-none lg:w-6 lg:h-1.5 lg:mr-1.5'></div>
    ),
  }
  const sliderRef = useRef(null)

  return (
    <div
      id={id}
      ref={ref}
      className={`${
        fullBanner ? styles.fullHome : styles.home
      } relative mx-auto lg:pt-4`}
    >
      <Slider {...settings} ref={sliderRef}>
        <Slide
          text='An agency dedicated to serve brands'
          banner='/assets/images/banner1.png'
          fullBanner={fullBanner}
        />
        <Slide
          text='We foster dynamic business'
          banner='/assets/images/banner2.png'
          fullBanner={fullBanner}
        />
      </Slider>
    </div>
  )
})

export default Banner
