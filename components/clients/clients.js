import { forwardRef } from 'react'
import SectionTitle from '../section-title'
import { Parallax } from 'react-parallax'
import MarqueeSlider from './marquee-slider'

const Clients = forwardRef((props, ref) => {
  const { clients, screenSize } = props
  return (
    <Parallax bgImage='/assets/images/parallax-quote.jpg' strength={500}>
      <div
        ref={ref}
        id='clients'
        className='section-container py-0'
        style={{ backgroundImage: '/assets/images/parallax-quote.jpg' }}
      >
        <div className='dark-overlay pt-20 pb-12 lg:py-24'>
          <div className='centered-container'>
            <SectionTitle name='Our prestigious clients' color={'white'} />
            <MarqueeSlider clients={clients} screen={screenSize} />
          </div>
        </div>
      </div>
    </Parallax>
  )
})
export default Clients
