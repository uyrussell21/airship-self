import CtaSection from "@components/CtaSection"
import BodyListItem from "@components/BodyListItem"

const content = [
  {
    head: "Start getting revenues from Day 1 with a branded booking site",
    lead: "As soon as you get started with Airship, your customers can already start booking pickups and deliveries.",
    quote: {__html: "&quot;That’s what our customers are looking for. <q>Do you have an app? Do you have a booking site?</q> <strong>So it [Airship] was really a need.</strong>&quot;"},
    cite: "Aunnie, Pasabuyko"
  },
  {
    head: "Keep track of your packages every step of the way",
    lead: "From the moment your sender books, a package is born. Everyone ~ from rider to sorter to dispatcher to owner, is accounted for in the package's journey.",
    quote: {__html: "&quot;Before Airship, everything was manual. I do it by call. I send details to riders through Facebook Messenger or through text messages. It was really hard because I had to gather the necessary details all by myself. <strong>Now, I get less calls from clients regarding updates</strong> about their packages because they can easily know that status in just one click.&quot;"},
    cite: "Aunnie, Pasabuyko"
  },
  {
    head: "Oversee cash handled by riders and accounting",
    lead: "Airship helps you track how much your senders owe you, how much is with the rider, and how much CODs to remit.",
    quote: {__html: "&quot;We used to spend 3 hours just to tally our riders' collections. We would check it one by one. Now we just need to validate it in the system. <strong>Everyone's happy because we can go home earlier and there are fewer instances we're short.</strong>&quot;"},
    cite: "Merly, Mile Express"
  },
  {
    head: "Work together with third-party couriers (3PL)",
    lead: "Forward packages to partners for faster and more efficient deliveries. Airship makes it easier for you and your senders to continue tracking packages with your 3PL partners' websites.",
    quote: {__html: "&quot;We really have a lot of packages per day that is why it's essential for our partners to help deliver the goods on time. This feature <strong>helps us track which packages get forwarded</strong> and at the same time track the status of our packages.&quot;"},
    cite: "Kurt, Zip Courier"
  }
]

const Hero = () => (
  <section>
    <div className="hero container-sm">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1>Software built for Couriers</h1>
          <p>Airship is an end-to-end, ready-to-use software, that offers all the needed tech components to run your courier business</p>
        </div>
        <img className="col-md-10 col-xl-8" src="/static/home/home-hero.png" alt="Graphical overview of Airship" />
      </div>
    </div>

    <div className="hero-logos">
      <p>As seen in</p>
      <div>
        <img src="/static/home/home-logo-tia.png" alt="Tech In Asia" />
        <img src="/static/home/home-logo-bw.png" alt="BusinessWorld" />
        <img src="/static/home/home-logo-is.png" alt="IdeaSpace Foundation" />
      </div>
    </div>
  </section>
)

const WhyAirshipItem = ({ i, head, lead, quote, cite }) => (
  <BodyListItem {...{i, head, lead}}>
    <figure>
      <blockquote dangerouslySetInnerHTML={quote} />
      <figcaption>- {cite}</figcaption>
    </figure>
  </BodyListItem>
)

const WhyAirship = () => (
  <section className="why-body wavy-border">
    <h2>With Airship, run your courier from start to finish</h2>

    <picture>
      <source media="(min-width: 992px)" srcSet="/static/home/home-journey.png" />
      <img src="/static/home/home-journey-sm.png" alt="Path showing different stages of Airship" />
    </picture>

    <div className="why-list container-sm col-md-10 col-xl-8">
      {content.map(({ head, lead, quote, cite}, i) => (
        <WhyAirshipItem {...{i, head, lead, quote, cite}} key={i} />
      ))}
    </div>
  </section>
)

const Home = () => (
  <main id="home">
    <Hero />
    <WhyAirship />
    <CtaSection />
  </main>
)

export default Home