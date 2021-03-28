import CtaButton from "@components/CtaButton"
import FeaturesLayout from "@components/FeaturesLayout"

const bodyHead = "With Airship, your senders can now:"

const content = [
  ["Branded Site", "branded"],
  ["Create Packages", "packages"],
  ["Bulk Create", "upload"],
  ["Filter by Status", "filters"],
  ["View all Packages", "view"],
  ["Print Waybills", "waybill"],
  ["Compute Rates", "calc"],
  ["Special Fees", "fees"],
  ["View Transactions", "transactions"],
  ["COD Remittances", "cod"],
  ["Booking APIs", "api"],
  ["Ecommerce Plugins", "plugins"]
]

const BookingSystem = () => (
  <FeaturesLayout {...{bodyHead}} hasPaths heroBg="half">
    <div>
      <h2>Your senders don't need to call you for every single, tiny, thing ~ <strong className="blue">All you need is Airship</strong></h2>
      <ul>
        {content.map(([title, slug]) => (
          <li key={slug}>
            <img src={`/static/booking-system/booking-icons-${slug}.png`} alt={title}/>
            <p>{title}</p>
          </li>
        ))}
      </ul>

      <CtaButton className="main red" />
    </div>
  </FeaturesLayout>
)

export default BookingSystem