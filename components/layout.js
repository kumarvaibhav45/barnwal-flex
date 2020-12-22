import Head from 'next/head'
import Header from './header/header'
import Footer from './footer/footer'
import GoogleMap from './map'

const siteTitle = 'Barnwal Flex'

export default function Layout({
  children,
  title = '',
  scrolled,
  visibleSection,
  screenSize,
}) {
  return (
    <>
      <Head>
        <title>{`${siteTitle}${title ? ` - ${title}` : ''}`}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.io' />
        <meta
          name='description'
          content='Barnwal Flex - Your one stop printing solution'
        />
        <meta name='og:title' content={title} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Header
        title={siteTitle}
        scrolled={scrolled}
        visibleSection={visibleSection}
      />
      <main>{children}</main>
      <GoogleMap smallIcon={screenSize === 'lg' ? false : true} />
      <Footer />
    </>
  )
}
