import ContactEmail from "@components/ContactEmail"
import ContactPhone from "@components/ContactPhone"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const footerPages = ["Home", "Pricing", "For Senders", "Privacy Policy", "Blog", "Contact Us"]

const footerFeatures = ["Feature Overview", "Track and Trace", "Booking System", "Dispatch Riders", "Cash Collections", "Flexible Pricing", "Analytics and Reports"]

const FooterNav = () => {
  return (
    <div className="container-sm">
      <div className="logo-div">
        <h1>
          <Link href="/">
            <a>
              <img src="/static/logo-white.png" alt="Airship" />
            </a>
          </Link>
        </h1>
        <p>Airship logistics solutions is a ready-to-use software that helps couriers run their business and deliver more.</p>
      </div>

      <div className="navs-contact">
        <nav>
          <h2>Pages</h2>
          <ul>
            {footerPages.map(title => {
              const href = title.toLowerCase().split(" ").join("-")

              return (
                <li key={href}>
                  <Link href={"/" + (title === "Home" ? "" : href)}>
                    <a>{title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <nav>
          <h2>Features</h2>
          <ul>
            {footerFeatures.map(title => {
              const href = title.toLowerCase().split(" ").join("-")

              return (
                <li key={href}>
                  <Link href={`/features/${href}`}>
                    <a>{title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="contact">
          <h2>Contact Us</h2>
          <address>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div>
                <p>Philippines</p>
                <p>226 Ortigas Avenue</p>
                <p>San Juan City</p>
                <p>Metro Manila, Philippines</p>
              </div>
            </div>

            <ContactEmail />

            <ContactPhone />
            
            <div>
              <FontAwesomeIcon icon={faFacebookF} />
              <Link href="https://fb.com/airshiplogistics">@airshiplogistics</Link>
            </div>
          </address>
        </div>
      </div>
    </div>
  )
}

const PageFooter = () => (
  <>
    <footer>
      <FooterNav />
    </footer>
    <div className="black-strip" />
  </>
)

export default PageFooter