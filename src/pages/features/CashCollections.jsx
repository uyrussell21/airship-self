import Checklist from "@components/Checklist"
import CtaButton from "@components/CtaButton"
import FeaturesLayout from "@components/FeaturesLayout"

const content = [
  "Less discrepancies from riders",
  "Track which riders are always short",
  "Increase capacity of your finance team",
  "Reduce company theft",
  "Provide exceptional customer service"
]

const list = content.map(str => ({desc: str}))

const CashCollections = () => (
  <FeaturesLayout heroHasCta>
    <div>
      <img src="/static/cash-collections/cash-benefits.png" alt="" />
      <div>
        <h2>What's <strong>worse</strong> than losing your cash is <strong className="blue">losing someone else's</strong></h2>
        <Checklist {...{list}} />

        <CtaButton className="main red" />
      </div>
    </div>
  </FeaturesLayout>
)

export default CashCollections