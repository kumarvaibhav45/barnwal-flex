import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { getAllWorkIds, getWorkData } from '../../lib/works'
import Works from '../../components/work/works'

export default function Work({ workData, funFacts2 }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Layout title={workData[0].title} scrolled={scrolled} visibleSection={'work'}>
      <Works works={workData[0].album} funFacts={funFacts2} worksTitle={workData[0].title} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllWorkIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id)
  const { funFacts2 } = await require('../../data/fun-facts.json')
  return {
    props: {
      workData,
      funFacts2,
    },
  }
}
