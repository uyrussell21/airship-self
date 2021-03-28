import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ChecklistItem = ({ title, desc }) => (
  <li>
    <FontAwesomeIcon icon={faCheck} />
    {title && <span>{title}:</span>} {desc}
  </li>
)

const Checklist = ({ list }) => (
  <ul className="checklist">
    {list.map(({title, desc}, i) => (
      <ChecklistItem key={i} {...{title, desc}} />
    ))}
  </ul>
)

export default Checklist