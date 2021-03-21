import ContactEmail from "@components/ContactEmail"
import ContactPhone from "@components/ContactPhone"
import CtaButton from "@components/CtaButton"
import NavDropdown from "@components/NavDropdown"
import Link from "next/link"
import { useState } from "react"

const siteNavs = {
  "Features": {
    "Feature Overview": "Grow your courier business by making the shift to Airship",
    "Track and Trace": "Track your packages every step of the way, in real-time",
    "Booking System": "Let your customers book and track on their own",
    "Dispatch Riders": "Assign bookings and packages to your riders",
    "Cash Collections": "Track cash movements on pickups and deliveries",
    "Flexible Pricing": "Be flexible with your services and pricing",
    "Analytics and Reports": "Stay on top of your business with metrics"
  },
  "Pricing": {},
  "Blog": {},
  "About": {}
}

const mainNavs = Object.entries(siteNavs)

const TopBar = () => (
  <address>
    <div className="container-sm">
      <ContactPhone />
      <ContactEmail />
    </div>
  </address>
)

const Hamburger = ({ toggleHamMenu, target, isHamOpen }) => {
  return (
    <button
    id="hamburger"
    onClick={toggleHamMenu}
    type="button"
    aria-expanded={isHamOpen ? "true" : "false"} aria-controls={target}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </button>
  )
}

const NavBar = () => {
  const [isHamOpen, setIsActive] = useState(false)
  
  const [currentNavOpen, setCurrentNavOpen] = useState(null);

  const toggleHamMenu = () => {
    setIsActive(!isHamOpen)
  }

  const toggleSubNav = (currentNav) => {
    setCurrentNavOpen(currentNavOpen === currentNav ? null : currentNav)
  }

  return (
    <nav className={`container-sm ${isHamOpen ? "active" : ""}`}>

      <Link href="/">
        <a>
          <img src="/static/logo-colored.png" alt="Airship" />
        </a>
      </Link>

      <Hamburger {...{toggleHamMenu, isHamOpen}}
      target="main-nav"/>

      <ul id="main-nav">
        {mainNavs.map(([title, sub]) => {
          const href = title.toLowerCase().split(" ").join("-")
          const subNavs = Object.entries(sub)
          let navItem

          if (subNavs.length === 0) {
            navItem = (
              <Link href={`/${href}`}>
                <a>{title}</a>
              </Link>
            )
          } else {
            navItem = (
              <NavDropdown
                {...{title, href, subNavs, toggleSubNav, currentNavOpen}}
              />
            )
          }
          return (
            <li key={href}>
              {navItem}
            </li>
          )
        })}

        <li key="cta-btn">
          <CtaButton className="main red" />
        </li>
        
      </ul>

    </nav>
  )
}

const PageHeader = () => (
  <header>
    <TopBar />
    <NavBar />
  </header>
)

export default PageHeader