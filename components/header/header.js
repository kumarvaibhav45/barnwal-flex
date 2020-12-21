import Link from 'next/link'
import Image from 'next/image'
import NavItem from './nav-item'
import styles from '../../styles/header.module.css'
import { useState } from 'react'

const menuItem = [
  { name: 'home', ref_id: 'home' },
  { name: 'about', ref_id: 'about' },
  { name: 'work', ref_id: 'work' },
  { name: 'services', ref_id: 'services' },
  { name: 'gifts for all', ref_id: 'gifts' },
  { name: 'clients', ref_id: 'clients' },
  { name: 'contact', ref_id: 'contact' },
]

const Header = ({ title, scrolled, visibleSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header
      id="header"
      className={`fixed m-0 w-screen z-50 top-0 left-0 right-0 bg-white header py-2 lg:py-2.5 lg:block ${
        scrolled ? styles.scrolled : ''
      } transition-all duration-200 ease-in overflow-none`}
    >
      <div
        className={`flex justify-between items-center mx-auto h-14 transition-all duration-200 ease-linear sm:mx-8 lg:w-10/12 lg:mx-auto ${styles.largeScreenHeader}`}
      >
        <div className='mx-4 flex items-center transition-all duration-200 ease-linear'>
          <h1>
            <Link href='/'>
              <a
                title='logo'
                className='no-underline text-xl font-thin text-brightRed font-openSans lg:text-2xl'
              >
                {title}
              </a>
            </Link>
          </h1>
        </div>

        <div className='transition-all duration-200 ease-linear relative lg:flex md:flex md:items-center lg:items-center'>
          <button
            className={`mx-4 rounded flex justify-center px-2 py-1 border border-darkGray hover:bg-bgGray transition-all duration-200 ease-linear lg:hidden ${styles['menu-icon']}`}
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <Image
              src='/assets/images/icons/bars.svg'
              width='24'
              height='24'
              className='transition-all duration-200 ease-linear'
            />
          </button>
          <nav
            className={`fixed z-20 w-full left-0 top-14 mt-4 px-8 py-2 bg-transparentWhite flex flex-col sm:px-10 lg:bg-transparent lg:static lg:w-auto lg:block lg:px-0 lg:pt-4 lg:pb-0 ${
              styles.nav
            } ${menuOpen ? '' : styles.hide}`}
          >
            {menuItem.map(({ name, ref_id }, i) => (
              <NavItem
                key={i}
                name={name}
                ref_id={ref_id}
                visibleSection={visibleSection}
                setMenuOpen={setMenuOpen}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
