import DemoButton from "@components/DemoButton"
import NavDropdown from "@components/NavDropdown"
import Link from "next/link"

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
    <div>
      <i className="fas fa-phone-alt" />
      <a href="tel:0917-537-8250">+(63) 917-537-8250</a>
      
      <i className="fas fa-envelope" />
      <a href="mailto:hello@airship.me">hello@airship.me</a>
    </div>
  </address>
)

const NavBar = () => (
  <nav className="navbar container-md navbar-expand-md navbar-light">

    <Link href="/">
      <a className="navbar-brand">
        <img src="logo-colored.png" alt="Airship" />
      </a>
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        {mainNavs.map(([title, sub]) => {
          const href = title.toLowerCase().split(" ").join("-") 
          const subNavs = Object.entries(sub)

          if (subNavs.length === 0) {
            return (
              <li key={href} className="nav-item">
                <Link href={href}>
                  <a className="nav-link">{title}</a>
                </Link>
              </li>
            )}

            return (
              <NavDropdown
                title={title}
                href={href}
                subNavs={subNavs}
              />
            )
        })}

        <li className="nav-link">
          <DemoButton type="main" />
        </li>
        
      </ul>
    </div>

  </nav>
)

const PageHeader = () => (
  <header>
    <TopBar />
    <NavBar />
  </header>
)

export default PageHeader