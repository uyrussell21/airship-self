import Link from 'next/link'

const NavDropdown = ({ title, href, subNavs }) => (
  <li key={href} className="nav-item">
    <button className="btn nav-link" type="button" data-bs-toggle="collapse" data-bs-target="#subLinks" aria-expanded="false" aria-controls="subLinks">
      {title}
    </button>
    <ul className="position-absolute collapse navbar-nav" id="subLinks">
      {subNavs.map(([subTitle, subDesc]) => {
        const subHref = subTitle.toLowerCase().split(" ").join("-")
        return (
          <li key={subHref}>
            <Link href={`${href}/${subHref}`}>
              <a>
                <img src={`/overview/${subHref}.png`} alt={subTitle}/>
                <p>{subTitle}</p>
                <p>{subDesc}</p>
              </a>
            </Link>
          </li> 
        )
      })}
    </ul>
  </li>
)

export default NavDropdown