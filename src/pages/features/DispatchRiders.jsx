import CtaButton from "@components/CtaButton"
import FeaturesLayout from "@components/FeaturesLayout"

const DispatchRiders = ()  => (
  <FeaturesLayout heroBg="edge">
    <div className="container-lg">
      <div>
        <h2>Track your riders in one view</h2>
        <p>Check where your riders are on the map while they're on the go.</p>
        <CtaButton className="main red" />
      </div>
    </div>
  </FeaturesLayout>
)

export default DispatchRiders