import Link from 'next/link'
import styles from '../../styles/navItem.module.css'

const NavItem = ({ name, ref_id, visibleSection, setMenuOpen }) => {
  return (
    <Link href={`/#${ref_id}`}>
      <a
        className={`py-2 border-b border-bottomBorder px-2.5 uppercase font-openSans text-textBlack text-sm font-bold leading-6 lg:mx-4 lg:border-0 lg:border-transparent focus:outline-none group ${
          styles.NavItem
        } ${visibleSection === ref_id ? styles.selected : ''}`}
        onClick={() => {
          if (window.innerWidth < 1150) {
            setMenuOpen(false)
          }
        }}
      >
        <span className='py-0.5 border-b border-transparent leading-5'>
          {name}
        </span>
      </a>
    </Link>
  )
}

export default NavItem
