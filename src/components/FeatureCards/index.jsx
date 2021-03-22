import { siteNavs } from "@components/PageHeader"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"

const featureList = Object.entries(siteNavs["Features"]).slice(1)

const FeatureCard = ({ isOverview, isActive, title, desc }) => {
  const href = title.toLowerCase().split(" ").join("-")

  return (
    <li className={isActive && "active"}>
      {isOverview && <img src={`/static/overview/${href}.png`} alt={title} />}
      <h3>{title}</h3>
      <p>{desc}</p>
      {!isActive && 
        <Link href={`/features/${href}`}>
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
      {featureList.map(([ title, desc ], i) => {
        let href = title.toLowerCase().split(" ").join("-")
        href = `/features/${href}`
        if (router.pathname === href) isActive = true
        return <FeatureCard key={i} {...{isOverview, isActive, title, desc}} />
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
    <FeatureCardsList {...{ isOverview }} />
  </section>
)

export default FeatureCardsSection