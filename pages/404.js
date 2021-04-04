import Link from "next/link"

export default function Custom404() {
  return (
    <section>
      <h1><span>404</span>Page Not Found</h1>
      <p>
        Try refreshing again or <Link href="/"><a>go back home</a></Link>
      </p>
      <style jsx>{`
        section {
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          color: var(--red-btn);
        }
        h1 {
          margin-bottom: 1em;
        }
        span {
          font-size: 2em;
          display: block;
          line-height: 1.5;
        }
      `}</style>
    </section>
  )
}