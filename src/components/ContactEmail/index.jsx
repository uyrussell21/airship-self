import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactEmail = () => (
  <div>
    <FontAwesomeIcon icon={faEnvelope} />
    <a href="mailto:hello@airship.me">hello@airship.me</a>
  </div>
)

export default ContactEmail