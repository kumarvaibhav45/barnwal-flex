import { useState, forwardRef } from 'react'
import SectionTitle from '../section-title'
import { Parallax } from 'react-parallax'
import Image from 'next/image'

const ContactInfoItem = ({ children, icon, title }) => (
  <li className='mb-4 flex items-baseline lg:mb-6'>
    <div className='flex-shrink-0 flex justify-center items-center w-6 h-6 text-center bg-white mr-2.5'>
      <Image src={icon} width='12' height='12' title={title} />
    </div>
    <div className='text-xs text-textRed cursor-pointer sm:text-sm'>
      {children}
    </div>
  </li>
)

const Contact = forwardRef((props, ref) => {
  const [formMessage, setformMessage] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    setformMessage('Sending...')
    const url = 'api/form'
    const { name, email, message } = e.target
    const user = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (!res.error) setformMessage('Thank you for contacting us.')
        else setformMessage("Sorry! Your message couldn' be sent.")
      })
  }
  return (
    <Parallax bgImage='/assets/images/parallax-contact.jpg' strength={500}>
      <div ref={ref} className='section-container py-0' id='contact'>
        <div className='dark-overlay pt-20 pb-16 lg:py-24 md:py-18'>
          <div className='centered-container'>
            <SectionTitle name="Let's get in touch" color='white' />
            <div className='flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:justify-between'>
              <div className='w-full lg:w-5/12'>
                <h2 className='text-white text-xl font-sansBold mb-4 lg:text-2xl'>
                  Contact Info
                </h2>
                <ul className='ml-1 list-none'>
                  <ContactInfoItem
                    icon='/assets/images/icons/map-marker-alt.svg'
                    title='address'
                  >
                    <p className='hover:text-white transition-all duration-150 ease-linear'>
                      Sheetal Chaya Lodge, Buxidih Road, Giridih (815301),
                      Jharkhand, India.
                    </p>
                  </ContactInfoItem>
                  <ContactInfoItem
                    icon='/assets/images/icons/phone-alt.svg'
                    title='phone number'
                  >
                    <>
                      <a
                        href='tel:+919263636326'
                        className='hover:underline hover:text-white transition-all duration-150 ease-linear'
                      >
                        +91 9263636326
                      </a>
                      {' / '}
                      <a
                        href='tel:+919263636326'
                        className='hover:underline hover:text-white transition-all duration-150 ease-linear'
                      >
                        +91 9263636326
                      </a>
                    </>
                  </ContactInfoItem>
                  <ContactInfoItem
                    icon='/assets/images/icons/envelope.svg'
                    title='email'
                  >
                    <a
                      href='mailto:contact@barnwalflex.com'
                      className='hover:underline hover:text-white transition-all duration-150 ease-linear'
                    >
                      contact@barnwalflex.com
                    </a>
                  </ContactInfoItem>
                  <ContactInfoItem
                    icon='/assets/images/icons/envelope.svg'
                    title='email'
                  >
                    <a
                      href='mailto:barnwalflex@gmail.com'
                      className='hover:underline hover:text-white transition-all duration-150 ease-linear'
                    >
                      barnwalflex@gmail.com
                    </a>
                  </ContactInfoItem>
                </ul>
              </div>
              <div className='ml-1'>
                <form method='POST' name='contact' onSubmit={onSubmitHandler}>
                  <div>
                    <input
                      type='text'
                      required
                      placeholder='Name'
                      name='name'
                      className='w-56 px-1.5 py-1 mb-2.5 mr-6 text-inputRed border border-bgGray text-sm rounded leading-5 inline-block bg-white shadow-inner focus:border-lightBlue focus:shadow-focus focus:outline-none lg:w-60'
                    />
                    <input
                      type='email'
                      required
                      placeholder='Email'
                      name='email'
                      className='w-56 px-1.5 py-1 mb-2.5 text-inputRed border border-bgGray text-sm rounded leading-5 inline-block bg-white shadow-inner focus:border-lightBlue focus:shadow-focus focus:outline-none lg:w-60'
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder='Message'
                      name='message'
                      className='resize-none w-56 h-40 px-1.5 py-1 mb-2.5 mr-6 text-inputRed border border-bgGray text-sm rounded leading-5 inline-block bg-white shadow-inner focus:border-lightBlue focus:shadow-focus focus:outline-none lg:w-56 lg:mr-10'
                    ></textarea>
                    <div className='w-32 h-32 bg-seperator inline-block mb-2.5'></div>
                  </div>
                  <div className='flex justify-start lg:justify-end'>
                    <button
                      type='submit'
                      className='px-4 py-2 mb-2.5 mr-4 text-white bg-lineBlack hover:bg-btnBlack rounded-sm uppercase transition-all duration-200 ease-linear text-xs font-bold lg:text-sm lg:px-4 lg:py-1.5 disabled:text-darkGray'
                      disabled={formMessage === 'Sending...'}
                    >
                      Send
                    </button>
                  </div>
                </form>
                <div
                  id='message'
                  className='text-white mt-4 text-xs leading-5 sm:text-sm'
                >
                  {formMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
})

export default Contact
