import { forwardRef } from 'react'
import SectionTitle from '../section-title'
import FunFacts from './fun-facts'
import ZoomCard from '../zoom-card'
import Link from 'next/link'
import Popup from 'reactjs-popup'
import Image from 'next/image'

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
      <div className=''>
        <SectionTitle name={worksTitle} />
        <div className='centered-container mt-12 grid grid-cols-1 gap-x-6 gap-y-6 sm:mt-20 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-2'>
          {works?.map(({ id, img, title, pageTitle = '' }) => (
            <div key={id} className='flex darker-overlay'>
              {pageTitle ? (
                <Link href={`/works/${pageTitle}`}>
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
                    <div className='flex flex-col'>
                      <Image
                        src={img}
                        width='800'
                        height='628'
                        alt={title}
                        objectFit='contain'
                        unoptimized={true}
                      />
                      <div className='flex justify-between mt-2 text-xs md:text-sm'>
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
