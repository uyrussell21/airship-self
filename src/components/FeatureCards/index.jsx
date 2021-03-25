import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import sitemap from "@lib/sitemap.json"

const parentSlug = sitemap[0]["slug"]
const featureList = sitemap[0]["subNavs"].slice(1)

const FeatureCard = ({ isOverview, isActive, title, slug, desc }) => {
  return (
    <li className={isActive && "active"}>
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

const FeatureCardsList = ({ isOverview, isActive }) => {
  const router = useRouter()
  return (
    <ul>
      {featureList.map(({ title, slug, desc }) => {
        const href = `/${parentSlug}/${slug}`
        if (router.pathname === href) isActive = true
        return <FeatureCard key={slug} {...{isOverview, isActive, title, slug, desc}} />
      })}
    </ul>
  )
}

const FeatureCardsSection = ({ isOverview, className }) => (
  <section className={`features-list ${className || ""}`}>
    {isOverview
      ? <h2>Set your business <strong>for success</strong> right from the start</h2>
      : <h2>Learn about other Airship features</h2>
    }
    <FeatureCardsList {...{isOverview}} />
  </section>
)

export default FeatureCardsSection