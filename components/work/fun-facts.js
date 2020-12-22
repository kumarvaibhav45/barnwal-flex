import { useState, useEffect, useRef } from 'react'
import SectionTitle from '../section-title'
import FactCards from './fact-cards'

const FunFacts = ({ title, funFacts }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    let options = {
      root: null,
      threshold: 0.9,
    }
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)
    ref.current && observer.observe(ref.current)
    return () => {
      ref.current && observer.unobserve(ref.current)
    }
  }, [ref])
  return (
    <div className='section-container pb-0 mb-0 lg:mb-4' ref={ref}>
      <SectionTitle name={title} />
      <div className='mx-4 flex justify-between mt-10 sm:mt-12 sm:mx-16 lg:w-8/12 lg:mx-auto lg:mt-16'>
        {funFacts?.map(({ id, number, title, suffix = '' }) => (
          <FactCards
            key={id}
            number={number}
            title={title}
            suffix={suffix}
            inView={inView}
            smallText={false}
          />
        ))}
      </div>
    </div>
  )
}

export default FunFacts
