const { default: CtaSection } = require("@components/CtaSection")
const { default: FeatureCardsSection } = require("@components/FeatureCards")

const Hero = () => (
  <section>
    <div className="hero">
      <h1>Grow your Courier Business by Making the Shift to Airship</h1>
      <p>Stay on top of your packages, riders and cash.</p>
    </div>
    <img src="/static/overview/feature-overview.png" alt="Boxes, rider, and cash" />
  </section>
)

const BlueSection = () => (
  <section className="blue-stat">
    <img src="/static/overview/overview-bulb.png" alt="Light bulb" />
    <h2>50% of businesses fail within 2 years, 80% fail within 5 years, 96% fail within 10 years</h2>
    <p>Airship helps you become a more stable business by increasing customer retention, reducing team burnout and rewarding your staff with best behavior.</p>
  </section>
)

const FeatureOverview = () => (
  <main id="overview">
    <Hero />
    <BlueSection />
    <FeatureCardsSection isOverview />
    <CtaSection />
  </main>
)

export default FeatureOverview