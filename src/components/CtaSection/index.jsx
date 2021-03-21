const { default: CtaButton } = require("@components/CtaButton");
const { faArrowRight } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const CtaSection = ({ hideFeatureBtn }) => (
  <section className="cta">
    <h2>Get access to all platforms with just a single plan</h2>
    <p>Test Airship with your team with our 14-day free trial!</p>
    <ul>
      <li className="demo-btn"><CtaButton className="main blue" /></li>
      {(!hideFeatureBtn) &&
        <li className="demo-btn-alt">
          <CtaButton className="alt blue">
            See all Features <FontAwesomeIcon icon={faArrowRight} />
          </CtaButton>
        </li>
      }
    </ul>

    <ul className="platforms">
      <li><img src="/static/platform-bs.png" alt="Booking System" /></li>
      <li><img src="/static/platform-bo.png" alt="Back Office" /></li>
      <li><img src="/static/platform-ra.png" alt="Riders App" /></li>
      <li><img src="/static/platform-api.png" alt="API Integrations" /></li>
    </ul>
  </section>
)

export default CtaSection