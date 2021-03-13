import React from "react";
import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/styles/theme.scss";
import "../src/styles/custom.scss";
import "../src/styles/pages.scss";
import PageHeader from "@components/PageHeader";

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
        <script src="https://kit.fontawesome.com/c40de2b7f1.js" crossorigin="anonymous"></script>

        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Airship Web</title>
      </Head>

      <PageHeader />

      <Component {...pageProps} />

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
        integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
        crossorigin="anonymous"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
        integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
        crossorigin="anonymous"
      />
    </>
  );
};

export default App;
