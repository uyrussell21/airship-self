import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactPhone = ({num}) => (
  <div className="c-phone">
    <FontAwesomeIcon icon={faPhoneAlt} />
    <a href={`tel:+63${num}`}>+(63) {num}</a>
  </div>
)

export default ContactPhone