import { forwardRef } from 'react'
import SectionTitle from '../section-title'
import { Parallax } from 'react-parallax'
import ServicesSlider from './services-slider'

const Services = forwardRef(({ id, services, screenSize }, ref) => (
  <Parallax
    bgImage={
      screenSize === 'sm' || screenSize === 'xs'
        ? '/assets/images/parallax-services-small.jpg'
        : '/assets/images/parallax-services.jpg'
    }
    strength={500}
  >
    <div ref={ref} className='section-container py-0' id={id}>
      <div className='light-overlay pt-20 pb-16 lg:py-24'>
        <div className='centered-container'>
          <SectionTitle name='Services' />
          <ServicesSlider services={services} screen={screenSize} />
        </div>
      </div>
    </div>
  </Parallax>
))

export default Services
