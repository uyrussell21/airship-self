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

const Hamburger = ({ openHamMenu, target, isActive }) => {
  const openHam = () => {
    openHamMenu();
  }

  return (
    <button
    id="hamburger"
    onClick={openHam}
    aria-expanded={isActive ? "true" : "false"} aria-controls={target}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </button>
  )
}

const NavBar = () => {
  const [isActive, setIsActive] = useState(false)

  const openHamMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className={`container-sm ${isActive ? "active" : ""}`}>

      <Link href="/">
        <a>
          <img src="/logo-colored.png" alt="Airship" />
        </a>
      </Link>

      <Hamburger openHamMenu={openHamMenu}
        target="main-nav" isActive={isActive}/>

      <ul id="main-nav">
        {mainNavs.map(([title, sub]) => {
          const href = title.toLowerCase().split(" ").join("-")
          const subNavs = Object.entries(sub)

          if (subNavs.length === 0) {
            return (
              <li key={href}>
                <Link href={`/${href}`}>
                  <a>{title}</a>
                </Link>
              </li>
            )}

            return (
              <NavDropdown
                key={href}
                title={title}
                href={href}
                subNavs={subNavs}
              />
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