import { forwardRef } from 'react'
import SectionTitle from '../section-title'
import FunFacts from './fun-facts'
import ZoomCard from '../zoom-card'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import PopupModel from '../popup-model.js'

const Works = forwardRef((props, ref) => {
  const { works, funFacts, worksTitle = 'Our Work' } = props
  return (
    <div
      id='work'
      ref={ref ? ref : null}
      className={`section-container ${
        worksTitle === 'Our Work' ? 'bg-white' : 'bg-bgGray mt-10'
      }`}
    >
      <div>
        <SectionTitle name={worksTitle} />
        <div className='centered-container mt-12 grid grid-cols-1 gap-x-6 gap-y-6 sm:mt-20 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-2'>
          {works?.map(({ id, img, title, pageTitle = '' }) => (
            <div key={id} className='flex darker-overlay'>
              {pageTitle ? (
                <Link href={`/works/${pageTitle}`} scroll={false}>
                  <a>
                    <ZoomCard img={img} text={title} width='800' height='628' />
                  </a>
                </Link>
              ) : (
                <Popup
                  trigger={
                    <div>
                      <ZoomCard
                        img={img}
                        text={title}
                        width='800'
                        height='628'
                      />
                    </div>
                  }
                  position='center center'
                  modal
                >
                  {(close) => (
                    <PopupModel
                      img={img}
                      title={title}
                      close={close}
                      width={800}
                      height={628}
                    />
                  )}
                </Popup>
              )}
            </div>
          ))}
        </div>
      </div>
      <FunFacts title='Some fun facts' funFacts={funFacts} />
    </div>
  )
})

export default Works
