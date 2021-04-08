import Checklist from "@components/Checklist"
import CtaButton from "@components/CtaButton"
import FeaturesLayout from "@components/FeaturesLayout"

const content = [
  "Real-time status of packages",
  "Better customer experience",
  "Increase customer loyalty and retention",
  "Increase capacity per employee",
  "Easier to claim insurance with package history",
  "Lower employee turnover",
  "Reappropriate manpower to marketing",
  "Save on encoders"
]

const list = content.map(str => ({desc: str}))

const TrackAndTrace = () => (
  <FeaturesLayout heroBg="half">
    <div className="container-sm col-md-9">
      <h2>Every package can <strong>make or break</strong> your business</h2>
      <p>Here are the benefits of having track and trace in your courier business</p>
      <Checklist {...{list}} />

      <CtaButton className="main red" />
    </div>
  </FeaturesLayout>
)

export default TrackAndTrace