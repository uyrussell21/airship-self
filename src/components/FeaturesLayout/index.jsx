import Breadcrumb from "@components/Breadcrumb"
import { useRouter } from "next/router"
import features from "@lib/features.json"
import FeatureCardsSection from "@components/FeatureCards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Checklist from "@components/Checklist"

const FeaturesHero = ({ head, lead, currSlug, imgSlug, alt }) => (
  <section className="hero">
    <Breadcrumb />
    <h1>{head}</h1>
    <p>{lead}</p>
    <img src={`/static/${currSlug}/${imgSlug}-hero.png`} alt={`${alt} hero image`}/>
  </section>
)

const FeaturesBodyItem = ({ head, lead, list, i, currSlug, imgSlug, alt }) => (
  <div className="features-body-item container-sm">
    <img
      src={`/static/${currSlug}/${imgSlug}-${i + 1}.png`}
      alt={`${alt} feature ${i + 1} image`}
    />
    <div>
      <h3>{head}</h3>
      <p>{lead}</p>
      <Checklist {...{list}} />
    </div>
  </div>
)

const FeaturesBody = ({ featureBody, currSlug, imgSlug, alt }) => {
  return (
    <section className="features-body">
      {featureBody.map(({head, lead, list}, i) => (
        <FeaturesBodyItem key={i}
          {...{head, lead, list, i, currSlug, imgSlug, alt}}
        />
      ))}
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
      <FeaturesBody {...{featureBody, currSlug, imgSlug, alt}} />
      <section className="features-benefits">
        {children}
      </section>
      <FeatureCardsSection />
    </main>
  )
}

export default FeaturesLayout