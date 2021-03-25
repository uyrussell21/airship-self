import CtaSection from "@components/CtaSection"
import FeatureCardsSection from "@components/FeatureCards"

const Hero = () => (
  <section className="hero container-sm">
    <div>
      <h1>Grow your Courier Business by Making the Shift to Airship</h1>
      <p>Stay on top of your packages, riders and cash.</p>
    </div>
    <img src="/static/overview/feature-overview.png" alt="Boxes, rider, and cash" />
  </section>
)

const BlueSection = () => (
  <section className="blue-stat">
    <img src="/static/overview/overview-bulb.png" alt="Light bulb" />
    <h2>
      <span>50% of businesses fail within 2 years,</span>
      <span>80% fail within 5 years,</span>
      <span>96% fail within 10 years</span>
    </h2>
    <p>Airship helps you become a more stable business by increasing customer retention, reducing team burnout and rewarding your staff with best behavior.</p>
  </section>
)

const FeatureOverview = () => (
  <main id="overview">
    <Hero />
    <BlueSection />
    <FeatureCardsSection isOverview className="wavy-border" />
    <CtaSection hideFeatureBtn />
  </main>
)

export default FeatureOverview