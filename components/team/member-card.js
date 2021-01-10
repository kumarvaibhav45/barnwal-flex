import ZoomCard from '../zoom-card'
import Popup from 'reactjs-popup'
import PopupModel from '../popup-model.js'

const MemberCard = ({ img, name, designation, message }) => {
  return (
    <div className='flex flex-col text-center'>
      <Popup
        trigger={
          <div className='w-auto mx-auto'>
            <ZoomCard img={img} title={name} width='340' height='226' />
          </div>
        }
        position='center center'
        modal
      >
        {(close) => (
          <PopupModel
            img={img}
            title={name}
            close={close}
            width={768}
            height={556}
          />
        )}
      </Popup>

      <div className='pt-3 sm:pt-5 lg:pt-10'>
        <h3 className='pb-1 uppercase font-sansBold text-xs sm:text-sm'>
          <span className='pb-1.5 border-b border-orange'>{name}</span>
        </h3>
        <h4 className='my-2 text-xs font-light sm:text-sm sm:my-2.5 lg:pb-3.5'>
          {designation}
        </h4>
        <p className='text-xs my-0.5 md:text-sm sm:mx-32 md:mx-auto'>
          {message}
        </p>
      </div>
    </div>
  )
}

export default MemberCard
