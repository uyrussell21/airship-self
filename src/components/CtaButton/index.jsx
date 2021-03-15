import Link from "next/link"

const CtaButton = ({ className, children }) => (
  <Link href="/">
    <a id="cta-btn" className={className}>{children || "Schedule a Demo"}</a>
  </Link>
)

export default CtaButton