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
      if(window.innerWidth < 620) {
        setScreenSize('xs')
      } else if(window.innerWidth < 840) {
        setScreenSize('sm')
      } else if(window.innerWidth < 1150) {
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
    sectionRefs.forEach(({ ref }) => observer.observe(ref.current))
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
  }, [sectionRefs])
  return (
    <Layout scrolled={scrolled} visibleSection={visibleSection}>
      <Banner ref={homeRef} fullBanner={fullBanner} />
      <About ref={aboutRef} />
      <Team members={members} />
      <Clients ref={clientsRef} clients={clients} screenSize={screenSize} />
      <Works ref={workRef} works={works} funFacts={funFacts1} />
      <Services ref={servicesRef} services={services} screenSize={screenSize} />
      <GiftsForAll ref={giftsRef} gifts={gifts} />
      <Contact ref={contactRef} />
    </Layout>
  )
}

export async function getStaticProps() {
  const { gifts } = await require('../data/gifts.json')
  const { clients } = await require('../data/clients.json')
  const { members } = await require('../data/members.json')
  const { services } = await require('../data/services.json')
  const { funFacts1 } = await require('../data/fun-facts.json')
  const { works } = await require('../data/works.json')

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
