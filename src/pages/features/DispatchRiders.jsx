import CtaButton from "@components/CtaButton"
import FeaturesLayout from "@components/FeaturesLayout"

const DispatchRiders = ()  => (
  <FeaturesLayout heroBg="edge">
    <div className="container-lg col-md-10">
      <div>
        <h2>Track your riders in one view</h2>
        <p>Check where your riders are on the map while they're on the go. View tasks owned by each rider all in one screen.</p>
        <CtaButton className="main red" />
      </div>
    </div>
  </FeaturesLayout>
)

export default DispatchRiders