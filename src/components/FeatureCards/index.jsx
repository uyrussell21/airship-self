import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import sitemap from "@lib/sitemap.json"

const features = sitemap.find(({slug}) => slug.match("features"))
const parentSlug = features["slug"]
const featureList = features["subNavs"].slice(1)

const FeatureCard = ({ isOverview, isActive, title, slug, desc }) => {
  return (
    <li className={isActive ? "active" : undefined}>
      {isOverview && <img src={`/static/overview/${slug}.png`} alt={title} />}
      <h3>{title}</h3>
      <p>{desc}</p>
      {!isActive && 
        <Link href={`/${parentSlug}/${slug}`}>
          <a>Learn More <FontAwesomeIcon icon={faArrowRight} /></a>
        </Link>
      }
    </li>
  )
}

const FeatureCardsList = ({ isOverview }) => {
  const router = useRouter()
  return (
    <ul>
      {featureList.map(({ title, slug, desc }) => {
        const href = `/${parentSlug}/${slug}`
        const isActive = router.pathname === href ? true : false
        return <FeatureCard key={slug} {...{isOverview, isActive, title, slug, desc}} />
      })}
    </ul>
  )
}

const FeatureCardsSection = ({ isOverview, className }) => (
  <section className={`features-cards ${className || ""}`}>
    {isOverview
      ? <h2 className="overview">Set your business <strong>for success</strong> right from the start</h2>
      : <h2>Learn about other Airship features</h2>
    }
    <FeatureCardsList {...{isOverview}} />
  </section>
)

export default FeatureCardsSection