import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const NavDropdown = ({ title, href, subNavs, toggleSubNav, currentNavOpen }) => {
  const navID = `${href}-nav`
  const isOpen = (href === currentNavOpen) ? true : false

  return (
    <>
      <button onClick={() => toggleSubNav(href)}
      className={isOpen ? "active" : ""}
      type="button" aria-expanded="false" aria-controls={navID}>
        {title}<FontAwesomeIcon icon={faChevronDown} />
      </button>

      <ul id={navID} className="sub-nav">
        {subNavs.map(([subTitle, subDesc]) => {
          const subHref = subTitle.toLowerCase().split(" ").join("-")
          const subPath = `/${href}/${subHref}`
          return (
            <li key={subPath}>
              <Link href={subPath}>
                <a>
                  <img src={`/overview/${subHref}.png`} alt={subTitle}/>
                  <div>
                    <p>{subTitle}</p>
                    <p>{subDesc}</p>
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default NavDropdown