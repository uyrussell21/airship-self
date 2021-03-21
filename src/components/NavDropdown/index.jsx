import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const NavDropdown = ({ title, href, subNavs, toggleSubNav, currentNavOpen }) => {
  const navID = `${href}-nav`
  const isOpen = (href === currentNavOpen) ? true : false
  const subNavEl = useRef(null)
  
  useEffect(() => {
    if (isOpen) subNavEl.current.classList.remove("closed")
    
    const height = subNavEl.current.scrollHeight
    subNavEl.current.style.height = `${height}px`
    
    if (!isOpen) subNavEl.current.style.height = ""
  }, [isOpen])
  
  const subNavTransition = (e) => {
    if (e.target !== subNavEl.current) return
    if (!isOpen) subNavEl.current.classList.add("closed")
  }

  return (
    <>
      <button onClick={() => toggleSubNav(href)}
        className={`${isOpen ? "active" : ""} sub-nav-btn`}
        type="button"
        aria-expanded={isOpen ? true : false} aria-controls={navID}
      >
        {title}<FontAwesomeIcon icon={faChevronDown}/>
      </button>

      <ul id={navID} ref={subNavEl} className="sub-nav closed" onTransitionEnd={subNavTransition}>
        {subNavs.map(([subTitle, subDesc]) => {
          const subHref = subTitle.toLowerCase().split(" ").join("-")
          const subPath = `/${href}/${subHref}`
          return (
            <li key={subPath}>
              <Link href={subPath}>
                <a>
                  <img src={`/static/overview/${subHref}.png`} alt={subTitle}/>
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