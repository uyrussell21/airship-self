import Link from "next/link"

const CtaButton = ({ className, children }) => (
  <Link href="/">
    <a className={`cta-btn ${className}`}>{children || "Schedule a Demo"}</a>
  </Link>
)

export default CtaButton