import Checklist from "@components/Checklist"
import CtaButton from "@components/CtaButton"
import FeaturesLayout from "@components/FeaturesLayout"

const content = [
  "Daily packages created",
  "Daily cash collected",
  "Daily new senders",
  "All time top senders",
  "All time top riders",
  "Daily packages assigned",
  "Top areas assigned per rider",
  "Average tasks completed",
  "Daily cash turned over",
  "Average deliveries per day"
]

const list = content.map(str => ({desc: str}))

const AnalyticsAndReports = () => (
  <FeaturesLayout heroHasCta heroBg="half">
    <div className="container-sm col-md-10">
      <img src="/static/analytics-and-reports/analytics-benefits.png"
        alt="analytics and reports benefits graphic"
      />
      <div>
        <h2>Stop driving with your eyes closed, <strong className="blue">turn data into insights</strong></h2>
        <Checklist {...{list}} />
        <CtaButton className="main red" />
      </div>
    </div>
  </FeaturesLayout>
)

export default AnalyticsAndReports