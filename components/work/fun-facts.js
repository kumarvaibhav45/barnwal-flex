import SectionTitle from '../section-title'
import FactCards from './fact-cards'
import { useInView } from 'react-intersection-observer'

const FunFacts = ({ title, funFacts }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  })
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
