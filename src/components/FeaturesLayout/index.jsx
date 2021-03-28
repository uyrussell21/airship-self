import Breadcrumb from "@components/Breadcrumb"
import { useRouter } from "next/router"
import features from "@lib/features.json"
import FeatureCardsSection from "@components/FeatureCards"
import Checklist from "@components/Checklist"
import BodyListItem from "@components/BodyListItem"

const FeaturesHero = ({ head, lead, currSlug, imgSlug, alt }) => (
  <section className="hero">
    <Breadcrumb />
    <h1>{head}</h1>
    <p>{lead}</p>
    <img src={`/static/${currSlug}/${imgSlug}-hero.png`} alt={`${alt} hero image`}/>
  </section>
)

const FeaturesBodyItem = ({ head, lead, list, i, currSlug, imgSlug }) => (
  <BodyListItem className="features-list-item" {...{head, lead, i, currSlug, imgSlug}}>
    <Checklist {...{list}} />
  </BodyListItem>
)

const FeaturesBody = ({ featureBody, currSlug, imgSlug  }) => {
  return (
    <section className="features-body">
      <div className="features-list container-sm">
        {featureBody.map(({head, lead, list}, i) => (
          <FeaturesBodyItem key={i}
            {...{head, lead, list, i, currSlug, imgSlug }}
          />
        ))}
      </div>
    </section>
  )
}

const FeaturesLayout = ({ children }) => {
  const router = useRouter()
  const currSlug = router.pathname.split("/").slice(-1)[0]
  const featureData = features.find(({slug}) => slug.match(currSlug))
  const {head, lead} = featureData["hero"]
  const featureBody = featureData["body"]

  const slugSplit = featureData["slug"].split("-")
  const imgSlug = slugSplit[0]
  const alt = slugSplit.join(" ")

  return (
    <main id={currSlug} className="features">
      <FeaturesHero {...{head, lead, currSlug, imgSlug, alt}} />
      <FeaturesBody {...{featureBody, currSlug, imgSlug}} />
      <section className="features-benefits">
        {children}
      </section>
      <FeatureCardsSection />
    </main>
  )
}

export default FeaturesLayout