const SectionTitle = ({ name, color = 'inherit' }) => {
  return (
    <h1
      className={`uppercase text-center text-2xl font-light relative mb-10 sm:text-3xl lg:text-4xl  lg:mb-20 ${
        color === 'inherit' ? '' : `text-${color}`
      }`}
    >
      {name}
      <span className='block h-px w-12 bg-orange mt-2 mb-4 relative left-1/2 transform -translate-x-1/2 sm:w-20 md:w-24 lg:w-32'></span>
    </h1>
  )
}
export default SectionTitle
