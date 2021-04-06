import ContactEmail from "@components/ContactEmail"
import ContactPhone from "@components/ContactPhone"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import sitemap from "@lib/sitemap.json"
import { useEffect, useState } from "react"

const navOrder = ["", "pricing", "privacy-policy", "blog", "about"]
const footerNav = navOrder.map(nav => (
  sitemap.find(({slug}) => slug === nav)
))

const featuresSlug = "features"
const footerFeatures = sitemap.find(({slug}) => slug === featuresSlug)["subNavs"]

const FooterNav = () => {
  return (
    <div className="container-sm">
      <div className="logo-div">
        <h1>
          <Link href="/">
            <a>
              <img src="/static/logo-white.png" alt="Airship Logistics" />
            </a>
          </Link>
        </h1>
        <p>Airship logistics solutions is a ready-to-use software that helps couriers run their business and deliver more.</p>
      </div>

      <div className="navs-contact">
        <nav>
          <h2>Pages</h2>
          <ul>
            {footerNav.map(({title, slug}) => {

              return (
                <li key={slug}>
                  <Link href={"/" + slug}>
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
            {footerFeatures.map(({title, slug}) => {

              return (
                <li key={slug}>
                  <Link href={`/${featuresSlug}/${slug}`}>
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

const CopyrightFooter = () => (
  <div className="black-strip">
    <p>Airship Logistics Solutions</p>
    <p>©️ {new Date().getUTCFullYear()} Created by BotBros</p>
  </div>
)

const PageFooter = () => (
  <>
    <footer>
      <FooterNav />
    </footer>
    <CopyrightFooter />
  </>
)

export default PageFooter