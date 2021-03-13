import Link from 'next/link'

const DemoButton = ({ type }) => (
  <button className={`btn ${type}`}>
    <Link href="/">
      <a>Schedule a Demo</a>
    </Link>
  </button>
)

export default DemoButton