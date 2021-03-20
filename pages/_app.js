import PageHeader from "@components/PageHeader";
import React from "react";
import Head from "next/head";
import PageFooter from "@components/PageFooter";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/global.scss";

// Router.events.on('routeChangeStart', (url) => {
//   console.log(`Loading: ${url}`)
//   NProgress.start()
// })
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Open+Sans:ital,wght@0,400;0,800;1,400;1,700&family=Roboto&display=swap" rel="stylesheet" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Airship Web</title>
      </Head>

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
    </>
  );
};

export default App;
