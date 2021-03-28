import Checklist from "@components/Checklist"
import CtaButton from "@components/CtaButton"
import FeaturesLayout from "@components/FeaturesLayout"

const content = [
  {
    title: "Solo Entrepreneur",
    desc: "A handful of Airship's couriers are run by solo founders and take the role of the dispatcher, sorter, customer service, finance - all by themselves!"
  },
  {
    title: "Small Business",
    desc: "Majority of couriers start as a single-hub, and work with third-party logistics to cover a wider area. No matter how small or big you are, Airship's here to support you."
  },
  {
    title: "Enterprise",
    desc: "Expanding your single-hub into multiple hubs across the country is a common dream for courier founders. With Airship, you can easily compete with the big players."
  }
]

const BenefitsItem = ({ title, desc, i }) => (
  <div>
    <img src={`/static/flexible-pricing/flexible-icons-${i + 1}.png`}
      alt={`flexible pricing benefits graphic ${i + 1}`}
    />
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
)

const FlexiblePricing = () => (
  <FeaturesLayout heroHasCta>
    <div>
      <h2><strong className="blue">Ask what, not how</strong> - don't let the lack of technology limit you</h2>
      <CtaButton className="main red" />
      <ul>
        {content.map(({title, desc}, i) => (
          <BenefitsItem key={i} {...{title, desc, i}} />
        ))}
      </ul>
    </div>
  </FeaturesLayout>
)

export default FlexiblePricing