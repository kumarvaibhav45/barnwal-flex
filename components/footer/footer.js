import Image from 'next/image'
import styles from '../../styles/footer.module.css'
import SocialIcon from '../social-icon'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  return (
    <footer className='bg-white w-full mx-auto py-12 relative overflow-y-hidden'>
      <div className='centered-container flex justify-between space-x-2'>
        <div className='copyright text-lightGray text-xs leading-5 md:text-sm'>
          &copy; 2016 Moon Advertisment.All Right Reserved.
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
        className={`text-center absolute -bottom-3 left-1/2 w-9 h-12 bg-black text-white transition-all duration-250 ease-out  icon transform -translate-x-1/2 ${styles.upButton}`}
      >
        <Image
          src='/assets/images/icons/angle-double-up.svg'
          alt='top'
          width='6'
          height='14'
        />
      </button>
    </footer>
  )
}

export default Footer
