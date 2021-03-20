import ContactEmail from "@components/ContactEmail"
import ContactPhone from "@components/ContactPhone"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const footerPages = ["Home", "Pricing", "For Senders", "Privacy Policy", "Blog", "Contact Us"]

const footerFeatures = ["Feature Overview", "Track and Trace", "Booking System", "Dispatch Riders", "Cash Collections", "Flexible Pricing", "Analytics and Reports"]

const FooterNav = () => {
  return (
    <div>
      <div class="logo-div">
        <h1>
          <Link href="/">
            <a>
              <img src="/logo-white.png" alt="Airship" />
            </a>
          </Link>
        </h1>
        <p>Airship logistics solutions is a ready-to-use software that helps couriers run their business and deliver more.</p>
      </div>

      <div class="navs-contact">
        <nav>
          <h2>Pages</h2>
          <ul>
            {footerPages.map(title => {
              const href = title.toLowerCase().split(" ").join("-")

              return (
                <li>
                  <Link href={href}>
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
                <li>
                  <Link href={`/features/${href}`}>
                    <a>{title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div class="contact">
          <h2>Contact Us</h2>
          <address>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div>
              <p>Philippines</p>
              <p>226 Ortigas Avenue</p>
              <p>San Juan City</p>
              <p>Metro Manila, Philippines</p>
            </div>

            <ContactEmail />

            <ContactPhone />
            <a href="">@airshiplogistics</a>
          </address>
        </div>
      </div>
    </div>
  )
}

const PageFooter = () => (
  <footer>
    <FooterNav />
    <div className="black-strip" />
  </footer>
)

export default PageFooter