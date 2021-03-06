import Slider from 'react-slick'
import ServiceCard from './service-card'

export default function ServicesSlider({ services, screen }) {
  const slidesToShow =
    screen === 'xs' ? 1 : screen === 'sm' ? 2 : screen === 'md' ? 3 : 4
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: slidesToShow,
    slidesToShow: slidesToShow,
    appendDots: (dots) => (
      <div style={{ marginBottom: '-10px' }}>
        <ul className='m-0'> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='w-6 h-6 text-sm text-textBlack border border-darkGray flex justify-center items-center'>
        {i + 1}
      </div>
    ),
  }
  return (
    <Slider {...settings}>
      {services?.map(({ id, img, title, message }) => (
        <ServiceCard key={id} img={img} label={title} message={message} />
      ))}
    </Slider>
  )
}
