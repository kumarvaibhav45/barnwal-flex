import Link from 'next/link'
import styles from '../../styles/navItem.module.css'

const NavItem = ({ name, ref_id, visibleSection, setMenuOpen }) => {
  return (
    <Link href={`/#${ref_id}`}>
      <a
        className={`py-2 border-b border-bottomBorder last:border-transparent lg:mx-4 px-2.5 uppercase font-openSans text-textBlack text-sm font-bold leading-6 lg:border-0 lg:border-transparent ${
          styles.NavItem
        } ${visibleSection === ref_id ? styles.selected : ''}`}
        onClick={() => {
          if (window.innerWidth < 1150) {
            setMenuOpen(false)
          }
        }}
      >
        <span className=''>{name}</span>
      </a>
    </Link>
  )
}

export default NavItem
