import ZoomCard from '../zoom-card'
import Popup from 'reactjs-popup'
import PopupModel from '../popup-model.js'

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
        <PopupModel img={img} title={title} close={close} width={500} height={500} />
      )}
    </Popup>

    <h4 className='uppercase text-xs mt-2 sm:mt-3 lg:mt-6'>{title}</h4>
  </div>
)

export default GiftCard
