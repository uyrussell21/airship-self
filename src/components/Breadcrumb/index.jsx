import Link from "next/link"
import { useRouter } from "next/router"
import sitemap from "@lib/sitemap.json"

const convertBreadcrumb = (path) => {
  const splitPath = path.split("/").slice(1)
  let subNavs = sitemap.find(({slug}) => splitPath[0].match(slug))["subNavs"]
  
  return splitPath.map((p, i, arr) => {
    const str = p
      .replace(/-/g, " ")
      .toUpperCase()
    const href = "/" +
      (i === 0
        ? arr[0] + "/" + subNavs[0]["slug"]
        : arr.slice(0, i + 1).join("/"))
    return [str, href]
  })
}

const Breadcrumb = () => {
  const router = useRouter()
  const paths = convertBreadcrumb(router.pathname)

  return (
    <nav style={{'--bs-breadcrumb-divider': `">"`}} aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.length > 0 &&
          paths.map(([str, href], i) => (
            i === paths.length - 1
            ? <li className="breadcrumb-item" key={i}>{str}</li>
            : <li className="breadcrumb-item" key={i}>
                <Link href={href}>
                  <a>{str}</a>
                </Link>
              </li>
          ))
        }
      </ol>
    </nav>
  )
}

export default Breadcrumb