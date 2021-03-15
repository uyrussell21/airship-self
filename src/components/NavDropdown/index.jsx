import Link from 'next/link'

const NavDropdown = ({ title, href, subNavs }) => (
  <li>
    <button type="button" data-bs-toggle="collapse" data-bs-target="#subLinks" aria-expanded="false" aria-controls="subLinks">
      {title}
    </button>
    <ul className="collapse navbar-nav" id="subLinks">
      {subNavs.map(([subTitle, subDesc]) => {
        const subHref = subTitle.toLowerCase().split(" ").join("-")
        const subPath = `/${href}/${subHref}`
        return (
          <li key={subPath}>
            <Link href={`/${subHref}`}>
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