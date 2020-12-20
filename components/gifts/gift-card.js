import ZoomCard from '../zoom-card'
import Popup from 'reactjs-popup'
import Image from 'next/image'

const GiftCard = ({ img, title }) => (
  <div className='flex flex-col text-center'>
    <Popup
      trigger={
        <div>
          <ZoomCard img={img} title={title} width='500' height='500' />
        </div>
      }
      position='center center'
      modal
    >
      {(close) => (
        <div className='flex flex-col'>
          <Image
            src={img}
            width={500}
            height={500}
            alt={title}
            objectFit='contain'
            unoptimized={true}
          />
          <div className='flex justify-between mt-1 text-sm'>
            <p>{title}</p>
            <button
              onClick={close}
              className='text-sm border border-black hover:bg-black  hover:text-white px-1.5 transition-all duration-100'
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </Popup>

    <h4 className='uppercase text-xs mt-2 sm:mt-3 lg:mt-6'>{title}</h4>
  </div>
)

export default GiftCard
