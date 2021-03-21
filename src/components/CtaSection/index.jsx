const { default: CtaButton } = require("@components/CtaButton");

const CtaSection = ({ showFeatureBtn }) => (
  <section className="cta">
    <h2>Get access to all platforms with just a single plan</h2>
    <p>Test Airship with your team with our 14-day free trial!</p>
    <ul>
      <li className="demo-btn"><CtaButton className="main blue" /></li>
      {showFeatureBtn &&
        <li className="demo-btn-alt">
          <CtaButton className="alt blue">See all Features &rarr;</CtaButton>
        </li>
      }
    </ul>

    <ul class="platforms">
      <li><img src="/static/platform-bs.png" alt="Booking System" /></li>
      <li><img src="/static/platform-bo.png" alt="Back Office" /></li>
      <li><img src="/static/platform-ra.png" alt="Riders App" /></li>
      <li><img src="/static/platform-api.png" alt="API Integrations" /></li>
    </ul>
  </section>
)

export default CtaSection