import sitemap from "@lib/sitemap.json";
import Head from "next/head";
import { useRouter } from "next/router";

const SeoMeta = () => {
  const router = useRouter()
  const splitPaths = router.pathname.split("/").slice(1)
  const parentNav = sitemap.find(({slug}) => slug === splitPaths[0])
  const subNavs = parentNav["subNavs"]
  const currNav = (subNavs
    ? parentNav["subNavs"].find(({slug}) => slug === splitPaths[1])
    : parentNav
  )

  const meta = currNav["meta"] || {}
  const {title, desc, img} = meta

  const siteName = "Airship Logistics"
  const pageTitle = `${title || currNav["title"]} — ${siteName}`
  const metaImg = img || "https://airship-prod-files.s3.ap-southeast-1.amazonaws.com/public-assets/airship-og-image.jpg"
  return (
    <Head>
      <title>{pageTitle}</title>

      {Object.entries(meta).length > 0
        && (
          <>
            <meta name="description" content={desc} />

            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.airship.me/" />
            <meta property="og:image" content={metaImg} />
            <meta property="og:site_name" content={siteName} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={metaImg} />
          </>
        )
      }
    </Head>
  )
}

export default SeoMeta