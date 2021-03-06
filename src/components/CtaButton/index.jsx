import Link from "next/link"

const CtaButton = ({ className, children, isOverview }) => {
  let target = "_blank"
  let rel = "_blank"
  let href = "https://www.calendly.com/airshiplogistics"
  if (isOverview) {
    target = undefined
    rel = undefined
    href = "/features/feature-overview"
  }

  return (
    <Link href={href} >
      <a className={`cta-btn ${className}`} {...{target, rel}}>
        {children || "Schedule a Demo"}
      </a>
    </Link>
  )
}

export default CtaButton