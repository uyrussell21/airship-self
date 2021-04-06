import Breadcrumb from "@components/Breadcrumb"
import { useRouter } from "next/router"
import features from "@lib/features.json"
import FeatureCardsSection from "@components/FeatureCards"
import Checklist from "@components/Checklist"
import BodyListItem from "@components/BodyListItem"
import { Fragment } from "react"
import CtaButton from "@components/CtaButton"

const FeaturesHero = ({ head, lead, currSlug, imgSlug, alt, heroBg, heroHasCta }) => (
  <section className={`hero ${heroBg ? `hero-bg-${heroBg}` : ""}`}>
    <Breadcrumb />
    <h1>{head}</h1>
    <p>{lead}</p>
    {heroHasCta && <CtaButton className="alt red" />}
    <img src={`/static/${currSlug}/${imgSlug}-hero.png`} alt={`${alt} hero image`}/>
  </section>
)

const FeaturesBodyItem = ({ head, lead, list, i, currSlug, imgSlug }) => (
  <BodyListItem {...{head, lead, i, currSlug, imgSlug}}>
    <Checklist {...{list}} />
  </BodyListItem>
)

const FeaturesBody = ({ featureBody, currSlug, imgSlug, bodyHead, hasPaths }) => {
  return (
    <section className="features-body">
      {bodyHead && <h2>{bodyHead}</h2>}
      <div className="features-list container-sm col-md-10 col-xl-8">
        {featureBody.map(({head, lead, list}, i) => (
          <Fragment key={i}>
            {hasPaths && 
              <img className="pathImg" src={`/static/booking-system/booking-path-${i + 1}.png`} alt="path graphic"/>
            }
            <FeaturesBodyItem
              {...{head, lead, list, i, currSlug, imgSlug }}
            />
          </Fragment>
        ))}
      </div>
    </section>
  )
}

const FeaturesLayout = ({ bodyHead, hasPaths, heroHasCta, heroBg, children }) => {
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
      <FeaturesHero {...{head, lead, currSlug, imgSlug, alt, heroBg, heroHasCta}} />
      <FeaturesBody {...{featureBody, currSlug, imgSlug, bodyHead, hasPaths}} />
      <section className="features-benefits">
        {children}
      </section>
      <FeatureCardsSection />
    </main>
  )
}

export default FeaturesLayout