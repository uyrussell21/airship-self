const Hero = () => (
  <section>
      <div className="hero container-sm">
        <h1>Software built for Couriers</h1>
        <p>Airship is an end-to-end, ready-to-use software, that offers all the needed tech components to run your courier business</p>
        <img src="/home/home-hero.png" alt="Graphical overview of Airship" />
      </div>

      <div className="hero-logos">
        <p>As seen in</p>
        <div>
          <img src="/home/home-logo-tia.png" alt="Tech In Asia" />
          <img src="/home/home-logo-bw.png" alt="BusinessWorld" />
          <img src="/home/home-logo-is.png" alt="IdeaSpace Foundation" />
        </div>
      </div>
    </section>
)

const Home = () => (
  <main id="home">
    <Hero />
  </main>
)

export default Home