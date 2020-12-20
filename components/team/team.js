import SectionTitle from '../section-title'
import MemberCard from './member-card'

export default function Team({ members }) {
  return (
    <div className='section-container bg-white'>
      <div className='centered-container'>
        <SectionTitle name="Director's diary" />
        <div className='grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-10 mt-16 lg:gap-x-14'>
          {members?.map(({ id, name, designation, img, message }) => (
            <MemberCard
              key={id}
              name={name}
              designation={designation}
              img={img}
              message={message}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
