import Image from 'next/image'
import Slider from 'react-slick'

const Slide = ({ img, title = '' }) => (
  <div className="mx-0.5">
    <Image
      src={img}
      alt={title}
      title={title}
      width='220'
      height='160'
      objectFit='fill'
    />
  </div>
)

export default function MarqueeSlider({ clients, screen }) {
  const slidesToShow = screen === 'xs' ? 3 : screen === 'sm' ? 3 : screen === 'md' ? 4 : 5
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: clients.length,
    autoplay: true,
    speed: clients.length * 1000,
    autoplaySpeed: clients.length * 1000,
    cssEase: 'linear',
    pauseOnHover: true,
    adaptiveHeight: true,
  }
  return (
    <Slider {...settings}>
      {clients?.map(({ id, img, title }) => (
        <Slide key={id} img={img} title={title} />
      ))}
    </Slider>
  )
}
