import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from '../components/loader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadingStart = () => setLoading(true)
    const loadingComplete = () =>
      setTimeout(() => {
        setLoading(false)
      }, 500)
    router.events.on('routeChangeStart', loadingStart)
    router.events.on('routeChangeComplete', loadingComplete)
    router.events.on('routeChangeError', loadingComplete)
    return () => {
      router.events.off('routeChangeStart', loadingStart)
      router.events.off('routeChangeComplete', loadingComplete)
      router.events.off('routeChangeError', loadingComplete)
    }
  }, [])

  return loading ? <Loader /> : <Component {...pageProps} />
}

export default MyApp
