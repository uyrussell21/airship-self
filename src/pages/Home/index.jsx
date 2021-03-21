import CtaSection from "@components/CtaSection"
import WhyAirshipItem from "./WhyAirshipItem"

const content = [
  {
    title: "Start getting revenues from Day 1 with a branded booking site",
    lead: "As soon as you get started with Airship, your customers can already start booking pickups and deliveries.",
    quote: {__html: "&quot;That’s what our customers are looking for. <q>Do you have an app? Do you have a booking site?</q> <strong>So it [Airship] was really a need.</strong>&quot;"},
    cite: "Aunnie, Pasabuyko"
  },
  {
    title: "Keep track of your packages every step of the way",
    lead: "From the moment your sender books, a package is born. Everyone ~ from rider to sorter to dispatcher to owner, is accounted for in the package's journey.",
    quote: {__html: "&quot;Before Airship, everything was manual. I do it by call. I send details to riders through Facebook Messenger or through text messages. It was really hard because I had to gather the necessary details all by myself. <strong>Now, I get less calls from clients regarding updates</strong> about their packages because they can easily know that status in just one click.&quot;"},
    cite: "Aunnie, Pasabuyko"
  },
  {
    title: "Oversee cash handled by riders and accounting",
    lead: "Airship helps you track how much your senders owe you, how much is with the rider, and how much CODs to remit.",
    quote: {__html: "&quot;Dati inaabot kami ng 3 oras para lang malaman if nag tally ba yung mga kinolekta ni rider dun sa mga orders namin. Iche-check namin yun isa-isa. Ngayon kailangan nalang namin i-validate sa system. Masaya lahat kasi nakakauwi ng mas maaga tapos nabawasan pa yung instances na may short.&quot;"},
    cite: "Merly, Mile Express"
  },
  {
    title: "Work together with third-party couriers (3PL)",
    lead: "Forward packages to partners for faster and more efficient deliveries. Airship makes it easier for you and your senders to continue tracking packages with your 3PL partners' websites.",
    quote: {__html: "&quot;Marami talaga kaming packages per day that is why essential ang partners namin to help deliver the goods on time. This feature <strong>helps us track kung ano yung mga napasa na namin na packages</strong> and at the same time track yung status ng packages.&quot;"},
    cite: "Kurt, Zip Courier"
  }
]

const Hero = () => (
  <section>
      <div className="hero container-sm">
        <h1>Software built for Couriers</h1>
        <p>Airship is an end-to-end, ready-to-use software, that offers all the needed tech components to run your courier business</p>
        <img src="/static/home/home-hero.png" alt="Graphical overview of Airship" />
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

const WhyAirship = () => (
  <section className="why-body wavy-border">
    <h2>With Airship, run your courier from start to finish</h2>

    <picture>
      <source media="(min-width: 992px)" srcSet="/static/home/home-journey.png" />
      <img src="/static/home/home-journey-sm.png" alt="Path showing different stages of Airship" />
    </picture>

    <div className="why-list container-sm">
      {content.map(({ title, lead, quote, cite}, i) => (
        <WhyAirshipItem {...{i, title, lead, quote, cite}} key={i} />
      ))}
    </div>
  </section>
)

const Home = () => (
  <main id="home">
    <Hero />
    <WhyAirship />
    <CtaSection showFeatureBtn="true" />
  </main>
)

export default Home