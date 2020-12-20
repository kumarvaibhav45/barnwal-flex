import ZoomCard from '../zoom-card'
import Popup from 'reactjs-popup'
import Image from 'next/image'

const MemberCard = ({ img, name, designation, message }) => {
  return (
    <div className='flex flex-col text-center'>
      <Popup
        trigger={
          <div>
            <ZoomCard img={img} title={name} width='340' height='226' />
          </div>
        }
        position='center center'
        modal
      >
        {(close) => (
          <div className='flex flex-col'>
            <Image
              src={img}
              width={768}
              height={556}
              alt={name}
              objectFit='fill'
              unoptimized={true}
            />
            <div className='flex justify-between mt-2 text-xs md:text-sm'>
              <p>{name}</p>
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

      <div className='pt-3 sm:pt-5 lg:pt-10'>
        <h3 className='pb-1 uppercase font-sansBold text-xs sm:text-sm'>
          <span className='pb-1.5 border-b border-orange'>{name}</span>
        </h3>
        <h6 className='my-2 text-xs font-light sm:text-sm sm:my-2.5 lg:pb-3.5'>
          {designation}
        </h6>
        <p className='text-xs my-0.5 md:text-sm sm:mx-32 md:mx-auto'>
          {message}
        </p>
      </div>
    </div>
  )
}

export default MemberCard
