import ContactEmail from "@components/ContactEmail"
import ContactPhone from "@components/ContactPhone"
import CtaButton from "@components/CtaButton"
import NavDropdown from "@components/NavDropdown"
import Link from "next/link"
import { useEffect, useState } from "react"
import sitemap from "@lib/sitemap.json"
import { useRouter } from "next/router"

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
      aria-expanded={isHamOpen ? "true" : "false"} aria-controls={target}
    >
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </button>
  )
}

const NavBar = () => {
  const [isHamOpen, setIsHamOpen] = useState(false)
  const [currentNavOpen, setCurrentNavOpen] = useState(null);
  const router = useRouter()

  const toggleHamMenu = () => {
    setIsHamOpen(!isHamOpen)
  }

  const toggleSubNav = (currentNav) => {
    setCurrentNavOpen(currentNavOpen === currentNav ? null : currentNav)
  }

  useEffect(() => {
    const closeNav = () => {
      setIsHamOpen(false)
      setCurrentNavOpen(null)
    }

    router.events.on('routeChangeComplete', closeNav)
    return () => {router.events.off('routeChangeComplete', closeNav)}
  }, [])

  return (
    <nav className={`container-sm ${isHamOpen ? "active" : ""}`}>

      <Link href="/">
        <a>
          <img src="/static/logo-colored.png" alt="Airship Logistics" />
        </a>
      </Link>

      <Hamburger {...{toggleHamMenu, isHamOpen}}
      target="main-nav"/>

      <ul id="main-nav">
        {sitemap.map(({title, slug, subNavs}) => {
          const navItem = !subNavs
          ? <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          : <NavDropdown
              {...{title, slug, subNavs, toggleSubNav, currentNavOpen}}
            />

          return (
            <li key={slug}>
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