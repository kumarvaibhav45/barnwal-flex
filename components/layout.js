import Head from 'next/head'
import Header from './header/header'
import Footer from './footer/footer'
import Map from './map'

const siteTitle = 'Barnwal Flex'

export default function Layout({
  children,
  title = '',
  scrolled,
  visibleSection,
  screenSize,
  description = '',
  image,
}) {
  return (
    <>
      <Head>
        <title>{`${siteTitle}${title ? ` - ${title}` : ''}`}</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={description} />
        <meta name='canonical' content='siteaddress' />
        <meta
          name='og:title'
          content={`${siteTitle}${title ? ` - ${title}` : ''}`}
        />
        <meta name='og:site_name' content={siteTitle} />
        <meta name='og:description' content={description} />
        <meta name='og:image' content={image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content={`${siteTitle}${title ? ` - ${title}` : ''}`}
        />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='twitter:site' content='@username' />
        <meta name='twitter:creator' content='@username' />
      </Head>
      <Header
        title={siteTitle}
        scrolled={scrolled}
        visibleSection={visibleSection}
      />
      <main>{children}</main>
      <Map smallIcon={screenSize === 'lg' ? false : true} />
      <Footer />
    </>
  )
}
