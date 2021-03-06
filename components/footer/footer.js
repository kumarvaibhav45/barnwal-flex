import Image from 'next/image'
import styles from '../../styles/footer.module.css'
import SocialIcon from '../social-icon'

const Footer = () => (
  <footer className='bg-white w-full mx-auto py-12 relative overflow-y-hidden'>
    <div className='centered-container flex justify-between space-x-2'>
      <div className='copyright text-lightGray text-xs leading-5 md:text-sm'>
        &copy; {new Date().getFullYear()} Barnwal Flex, All Rights Reserved.
      </div>
      <div className='social flex space-x-5'>
        <SocialIcon
          linkTo={'https://facebook.com/barnwal-flex'}
          img='/assets/images/icons/facebook-f.svg'
          alt='facebook'
        />
        <SocialIcon
          linkTo={'https://twitter.com/barnwal-flex'}
          img='/assets/images/icons/twitter.svg'
          alt='twitter'
        />
        <SocialIcon
          linkTo={'https://linkedIn.com/barnwal-flex'}
          img='/assets/images/icons/linkedin-in.svg'
          alt='linkedIn'
        />
      </div>
    </div>
    <button
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      className={`text-center absolute -bottom-3 left-1/2 w-9 h-12 bg-btnBlack text-white transition-all duration-400 ease-out icon transform -translate-x-1/2 ${styles.upButton}`}
      aria-label='Go To Top'
    >
      <Image
        src='/assets/images/icons/angle-double-up.svg'
        alt='top'
        width='7'
        height='14'
      />
    </button>
  </footer>
)

export default Footer
