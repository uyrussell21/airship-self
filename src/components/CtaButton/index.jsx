import Link from "next/link"

const CtaButton = ({ className, children }) => (
  <Link
    href={children
      ? "/features/feature-overview"
      : "https://www.calendly.com/airshiplogistics"}
  >
    <a className={`cta-btn ${className}`} target={children ? undefined : "_blank"}>
      {children || "Schedule a Demo"}
    </a>
  </Link>
)

export default CtaButton