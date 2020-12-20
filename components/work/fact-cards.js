import CountUp from 'react-countup'

const FactCards = ({ number, title, suffix, inView, smallText }) => {
  return (
    <div className='text-center pt-2'>
      <div className='text-2xl font-sansBold sm:text-4xl md:text-5xl lg:text-6xl'>
        <CountUp end={inView ? +number : 0} duration={5} suffix={suffix} />
      </div>
      <div className='uppercase text-light text-xs lg:text-sm' style={smallText ? {fontSize: '0.6rem'} : {}}>{title}</div>
    </div>
  )
}

export default FactCards
