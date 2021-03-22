import Link from "next/link"

const CtaButton = ({ className, children }) => (

  <Link href={children ? "/features/feature-overview" : "/"}>
    <a className={`cta-btn ${className}`}>{children || "Schedule a Demo"}</a>
  </Link>
)

export default CtaButton