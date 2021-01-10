import { useEffect, useState, useRef } from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import About from '../components/about/about'
import Works from '../components/work/works'
import Team from '../components/team/team'
import Clients from '../components/clients/clients'
import Services from '../components/services/services'
import GiftsForAll from '../components/gifts/gifts-for-all'
import Contact from '../components/contact/contact'

export default function Home({
  gifts,
  clients,
  services,
  members,
  works = [],
  funFacts1,
}) {
  const [visibleSection, setVisibleSection] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [fullBanner, setFullBanner] = useState(false)
  const [screenSize, setScreenSize] = useState('')

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const servicesRef = useRef(null)
  const giftsRef = useRef(null)
  const clientsRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = [
    { section: 'home', ref: homeRef },
    { section: 'about', ref: aboutRef },
    { section: 'work', ref: workRef },
    { section: 'services', ref: servicesRef },
    { section: 'gifts', ref: giftsRef },
    { section: 'clients', ref: clientsRef },
    { section: 'contact', ref: contactRef },
  ]

  useEffect(() => {
    const setScreen = () => {
      if (window.innerWidth < 620) {
        setScreenSize('xs')
      } else if (window.innerWidth < 840) {
        setScreenSize('sm')
      } else if (window.innerWidth < 1200) {
        setScreenSize('md')
      } else {
        setScreenSize('lg')
      }
      window.innerWidth > window.innerHeight && setFullBanner(true)
    }
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    let options = {
      root: null,
      threshold: 0.9,
    }
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id)
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)
    sectionRefs.forEach(
      ({ ref }) => ref.current && observer.observe(ref.current)
    )
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', setScreen)
    setScreen()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', setScreen)
      sectionRefs.forEach(
        ({ ref }) => ref.current && observer.unobserve(ref.current)
      )
    }
  }, [
    homeRef,
    aboutRef,
    workRef,
    servicesRef,
    contactRef,
    giftsRef,
    clientsRef,
  ])
  return (
    <Layout
      scrolled={scrolled}
      visibleSection={visibleSection}
      screenSize={screenSize}
    >
      <Banner
        ref={homeRef}
        id={sectionRefs[0].section}
        fullBanner={fullBanner}
      />
      <About ref={aboutRef} id={sectionRefs[1].section} />
      <Team members={members} />
      <Clients
        ref={clientsRef}
        id={sectionRefs[5].section}
        clients={clients}
        screenSize={screenSize}
      />
      <Works
        ref={workRef}
        id={sectionRefs[2].section}
        works={works}
        funFacts={funFacts1}
      />
      <Services
        ref={servicesRef}
        id={sectionRefs[3].section}
        services={services}
        screenSize={screenSize}
      />
      <GiftsForAll id={sectionRefs[4].section} ref={giftsRef} gifts={gifts} />
      <Contact
        ref={contactRef}
        id={sectionRefs[6].section}
        screenSize={screenSize}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const { gifts } = await require('../public/data/gifts.json')
  const { clients } = await require('../public/data/clients.json')
  const { members } = await require('../public/data/team.json')
  const { services } = await require('../public/data/services.json')
  const { funFacts1 } = await require('../public/data/fun-facts.json')
  const { works } = await require('../public/data/works.json')

  return {
    props: {
      gifts,
      clients,
      works,
      members,
      services,
      funFacts1,
    },
  }
}
