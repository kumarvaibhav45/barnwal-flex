import { forwardRef } from 'react'
import SectionTitle from '../section-title'

const aboutText = {
  card1: {
    heading: 'WE CARE.',
    text:
      'Printing with us is a systematic workflow with high range of technical solutions. This minimizes human error, maintains consistent high quality printing standards and reduces overhead costs.',
  },
  card2: {
    heading: 'WE DELIVER.',
    text:
      "Being one of the leading advertising agencies in India, we believe that our job is to help clients build lasting brands that live as part of consumers' lives and command their loyalty and confidence.",
  },
  card3: {
    heading: 'WE`RE CREATIVE.',
    text:
      'We believe brands are living things. They need to be nourished, nurtured and cared for. That is what we at Barnwal Flex do. We are passionate about creating and fostering brands.',
  },
  card4: {
    heading: 'ABOUT US',
    text:
      "Barnwal Flex was built on the platform of highest quality standards, with the intent of providing world class products and solutions to the printing industry in India. We are one of the undisputed market leader in the printing industry that has transformed the industry from merely utilitarian to inspirational. With the company's vision to evolve in a 'Complete Printing Solution' We have successfully diversified into various Print vertical like Commercial Printing, Publishing, Packaging, Signage, Offset Printing & Digital printing. As a one window solution, we offer wide range of high quality products.",
  },
}

const AboutCard = ({ heading, text }) => (
  <div className='flex-1'>
    <h2 className='font-sansBold text-2xl leading-tight uppercase mt-3 mb-1.5 lg:text-3xl'>
      {heading}
    </h2>
    <p className='text-xs leading-5 lg:text-sm'>{text}</p>
  </div>
)

const About = forwardRef(({ id }, ref) => (
  <div id={id} ref={ref} className='section-container bg-bgGray'>
    <div className='centered-container'>
      <SectionTitle name='About our company' />
      <div className='content flex flex-col space-y-8 lg:space-y-16'>
        <div className='flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-10 lg:space-x-20'>
          <AboutCard
            heading={aboutText.card1.heading}
            text={aboutText.card1.text}
          />
          <AboutCard
            heading={aboutText.card2.heading}
            text={aboutText.card2.text}
          />
          <AboutCard
            heading={aboutText.card3.heading}
            text={aboutText.card3.text}
          />
        </div>
        <div className='seperator w-full h-px bg-seperator'></div>
        <div>
          <AboutCard
            heading={aboutText.card4.heading}
            text={aboutText.card4.text}
          />
        </div>
      </div>
    </div>
  </div>
))

export default About
