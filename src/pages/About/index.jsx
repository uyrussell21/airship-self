const valuesContent = [
  {
    head: "Grow Together",
    lead: "We believe that everyone's purpose is to grow as individuals. We can grow faster by helping each other and learning from each other."
  },
  {
    head: "Go the Extra Mile",
    lead: "It's not enough to reach the goal and do just what's needed. We strive to go above and beyond in everything we do."
  },
  {
    head: "Innovation",
    lead: "We believe in a workplace where it's safe to try new things, fostering a creative learning and blameless culture."
  },
  {
    head: "Excellence",
    lead: "We strive to be the best that we can be, offering the best solutions that we can offer, using the best technology possible."
  },
  {
    head: "Take Ownership",
    lead: "We are accountable for ourselves, our colleagues, our clients and our company. Our job goes beyond our job description."
  },
  {
    head: "Open Communication",
    lead: "Transparency and open communication is highly valued in the workplace. We believe feedback is best given real-time."
  }
]

const HeroSection = () => (
  <section className="hero">
    <img src="/static/about/about-hero.png" alt="About Hero graphic" />
    <h1>We enable companies to run successful transportation businesses</h1>
    <p>Our mission is to support the commerce ecosystem with reliable logistics by enabling goods to flow safely in the most efficient way possible.</p>
  </section>
)

const OurStory = () => (
  <section className="our story">
    <div className="container-sm col-md-10 col-xl-8">
      <h2>Our Story</h2>
      <div>
        <h3>Started as BotBros</h3>
        <p>Around 2012, Rachelle and Charlotte started selling things online and has been utilizing several local courier companies to deliver the orders. Every year, they had to change the local courier because of either cash or management problems. Rachelle wanted to fix the logistics process so bad. Luckily around 2016, one of the local couriers had the budget and was looking for a web development agency to build the software for them.</p>
        <p>BotBros AI was born. The first logistics system was created, and many other systems were built - not just in the logistics industry but various platforms. Eventually, BotBros saw the opportunity in the need for a stronger logistics infrastructure to support the booming online commerce.</p>
        <div className="video-box">
          <iframe src="https://player.vimeo.com/video/306620068" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
        <h3>All-in on Airship</h3>
        <p>Fast forward to 2019, BotBros entered Airship into the Ideaspace Startup Acceleration program and won the competition. BotBros went all in and never looked back ever since.</p>
        <div className="video-box">
          <iframe src="https://www.youtube.com/embed/VwfPZzZIw6c?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </section>
)

const OurValues = () => (
  <section className="our values">
    <div className="container-sm col-md-10 col-xl-8">
      <div>
        <h2>Our Values</h2>
        <img src="/static/about/about-values.png" alt="Our Values graphic"/>
      </div>
      <div className="values-list">
        {valuesContent.map(({head, lead}) => (
          <div key={head}>
            <h3>{head}</h3>
            <p>{lead}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const LifeAtAirship = () => (
  <section className="life">
    <div className="container-sm col-md-10 col-xl-8">
      <h2>Life at Airship</h2>
      
      <img src="/static/about/about-team.png" alt="the Airship crew"/>

      <p>Our growing team is composed of young and dynamic individuals. passionate about our goal to revolutionize the logistics industry. Airship embodies a culture of support and work-life balance to its people, ensuring that everyone is always highly valued.</p>
    </div>
  </section>
)

const About = () => (
  <main id="about">
    <HeroSection />
    <OurStory />
    <OurValues />
    <LifeAtAirship />
    <style jsx global>{`
      body {
        background-color: #fff;
      }
    `}</style>
  </main>
)

export default About