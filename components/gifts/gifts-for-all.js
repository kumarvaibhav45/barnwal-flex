import { forwardRef } from 'react'
import SectionTitle from '../section-title'
import GiftCard from './gift-card'

const GiftsForAll = forwardRef((props, ref) => {
  const { gifts } = props
  return (
    <div ref={ref} className='section-container bg-white' id='gifts'>
      <div className='centered-container pb-4 border-b border-bottomBorder'>
        <SectionTitle name='Gifts for all' />
        <div className='grid grid-cols-2 gap-8 pb-10 sm:gap-20 md:grid-cols-3 lg:grid-cols-4'>
          {gifts?.map(({ id, img, title }) => (
            <GiftCard key={id} img={img} title={title} />
          ))}
        </div>
      </div>
    </div>
  )
})

export default GiftsForAll
