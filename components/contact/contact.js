import { forwardRef } from 'react'
import SectionTitle from '../section-title'
import { Parallax } from 'react-parallax'
import Image from 'next/image'

const ContactInfoItem = ({ icon, text, title, mail = false }) => (
  <li className='mb-4 flex items-baseline lg:mb-6'>
    <div className='flex-shrink-0 flex justify-center items-center w-6 h-6 text-center bg-white mr-2.5'>
      <Image src={icon} width='12' height='12' title={title} />
    </div>
    <div
      className={`text-xs text-textRed cursor-pointer hover:text-white transition-all duration-150 ease-linear sm:text-sm ${
        mail ? 'hover:underline' : ''
      }`}
    >
      {mail ? <a href={`mailto:${text}`}>{text}</a> : text}
    </div>
  </li>
)

const Contact = forwardRef((props, ref) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
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
                    text='Sheetal Chaya Lodge, Buxidih Road, Giridih (815301), Jharkhand, India.'
                  />
                  <ContactInfoItem
                    icon='/assets/images/icons/phone-alt.svg'
                    title='phone number'
                    text='+91 9263636326 / +91 9263636326'
                  />
                  <ContactInfoItem
                    icon='/assets/images/icons/envelope.svg'
                    title='email'
                    text='contact@barnwalflex.com'
                    mail={true}
                  />
                  <ContactInfoItem
                    icon='/assets/images/icons/envelope.svg'
                    title='email'
                    text='barnwalflex@gmail.com'
                    mail={true}
                  />
                </ul>
              </div>
              <div className='ml-1'>
                <form
                  method='POST'
                  action='/success'
                  name='contact'
                  netlify-honeypot='bot-field'
                  data-netlify='true'
                >
                  <input type='hidden' name='form-name' value='contact' />
                  <div>
                    <input
                      type='text'
                      placeholder='Name'
                      name='name'
                      className='w-56 px-1.5 py-1 mb-2.5 mr-6 text-inputRed border border-bgGray text-sm rounded leading-5 inline-block bg-white shadow-inner focus:border-lightBlue focus:shadow-focus focus:outline-none lg:w-60'
                    />
                    <input
                      type='email'
                      placeholder='Email'
                      name='email'
                      className='w-56 px-1.5 py-1 mb-2.5 text-inputRed border border-bgGray text-sm rounded leading-5 inline-block bg-white shadow-inner focus:border-lightBlue focus:shadow-focus focus:outline-none lg:w-60'
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder='Message'
                      className='resize-none w-56 h-40 px-1.5 py-1 mb-2.5 mr-6 text-inputRed border border-bgGray text-sm rounded leading-5 inline-block bg-white shadow-inner focus:border-lightBlue focus:shadow-focus focus:outline-none lg:w-56 lg:mr-10'
                    ></textarea>
                    <div className='w-32 h-32 bg-seperator inline-block mb-2.5'></div>
                  </div>
                  <div className='flex justify-start lg:justify-end'>
                    <button
                      type='submit'
                      className='px-4 py-2 mb-2.5 mr-4 text-white bg-lineBlack hover:bg-btnBlack rounded-sm uppercase transition-all duration-200 ease-linear text-xs font-bold lg:text-sm lg:px-4 lg:py-1.5'
                    >
                      Send
                    </button>
                  </div>
                </form>
                <div
                  id='message'
                  className='text-white mt-4 text-xs leading-5 sm:text-sm'
                >
                  Thank you for contacting us.
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
