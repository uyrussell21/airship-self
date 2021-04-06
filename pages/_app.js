import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import PageHeader from "@components/PageHeader";
import PageFooter from "@components/PageFooter";
import SeoMeta from "@components/SeoMeta";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/global.scss";

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import * as gtag from "@lib/gtag"
import * as fbq from "@lib/fbpixel"
import FacebookMessenger from "@components/FacebookMessenger";

// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`)
//   NProgress.start()
// })
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

const handleRouteChangeFBPixel = () => {
  fbq.pageview()
}

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Facebook Pixel
  useEffect(() => {
    // This pageview only trigger first time (it is important for Pixel to have real information)
    fbq.pageview()

    router.events.on('routeChangeComplete', handleRouteChangeFBPixel)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeFBPixel)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,800;1,400;1,700&family=Roboto&family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <SeoMeta />
      
      <PageHeader />

      <Component {...pageProps} />

      <PageFooter />

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
        integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
        crossOrigin="anonymous"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
        integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
        crossOrigin="anonymous"
      />

      <FacebookMessenger />
    </>
  );
};

export default App;
