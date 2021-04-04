import Checklist from "@components/Checklist"
import CtaButton from "@components/CtaButton"
import CtaSection from "@components/CtaSection"
import { Fragment } from "react"

const pricingContent = [
  {
    head: "Standard",
    lead: "start-up business",
    price: "15,000",
    list: [
      {
        head: "Platforms",
        content: [
          "Booking Site",
          "Back Office",
          "Rider's App",
          "Sender's App"
        ]
      },
      {
        head: "Features",
        content: [
          "Detailed Track and Trace",
          "Sender management",
          "Corporate accounts",
          "Rider management",
          "Cash management",
          "Weight-based pricing",
          "Reports and Analytics"
        ]
      }
    ]
  },
  {
    head: "Premium",
    lead: "growing business",
    price: "25,000",
    list: [
      {
        head: "Everything in Standard, plus...",
        content: [
          "API Integration",
          "Webhooks",
          "Ecommerce plugins (like Shopify)",
          "Distance-based pricing",
          "Auto-dispatch",
          "Auto-accept",
          "Auto-validate",
          "Route optimization",
          "Custom status"
        ]
      }
    ]
  },
  {
    head: "Enterprise",
    lead: "running multiple branches",
    list: [
      {
        head: "Everything in Premium, plus...",
        content: [
          "Dedicated acc. manager",
          "24/7 Support",
          "Engineer support",
          "White-labelled apps",
          "Security assistance",
          "Higher priority with feature requests"
        ]
      }
    ]
  }
]

const youGetContent = [
  {
    head: "24/7 Chat Support",
    lead: "We pride ourselves with having a very responsive chat support. Reach out to us anytime to voice out your concerns and even requests.",
    slug: "support"
  },
  {
    head: "Unlimited Server Hosting",
    lead: "No need to worry about buying a server, or hiring someone to maintain that server. We cover everything you need to run the system so you can focus on your business.",
    slug: "hosting"
  },
  {
    head: "Free Upgrades for Life!",
    lead: "No need to hire developers, we're right here for you. As long as you're subscribed to Airship, get access to all the new features that we release.",
    slug: "upgrades"
  }
]

const faqContent = [
  {
    head: "Is Airship built for me?",
    content: [
      "Let's find out.",
      "Does your business rely on delivering things from one place to another? Do you want to track all your package activities? Are you looking to manage your finances better? Do you need to track the performance and progress of any of your truckers or riders?" ,
      "If you answered yes to ANY of these, then Airship's the right software for you!"
    ]
  },
  {
    head: "What is a package?",
    content: [
      "A package is something that you're looking to move from one point to another. A package can be handled by multiple riders, go through multiple hubs, and can be the basis of multiple tasks. We charge per package, and not by tasks."
    ]
  },
  {
    head: "How does your pricing work? What are all the fees?",
    content: [
      "We charge a setup fee and a monthly fee based on the number of packages and the plan you choose. The more packages you send, the cheaper the fees get."
    ]
  },
  {
    head: "Can I easily upgrade or downgrade my plan?",
    content: [
      "Yes! You can choose to upgrade or downgrade anytime, and the adjustment will show up in the next billing, pro-rated by the day depending on when you changed your plan."
    ]
  },
  {
    head: "What happens when my 14-day trial ends?",
    content: [
      "Airship offers a free no-risk 14-day trial period that allows you to test the software before subscribing. Before the trial ends, we will ask you to evaluate the software if you wish to push through or not.",
      "If you wish to push through, we'll send you the payment details so you can settle the subscription fee for the following month. If not, we'll get your feedback to learn how we can improve further. Your account will be deactivated after the trial period."
    ]
  },
  {
    head: "I already have an existing website, how do I integrate it?",
    content: [
      "If it's an informational website, you can simply link your website to your Airship booking site. You can even add a tracker on your existing website through a simple redirection. If you don't have an IT team, we can also do this for you."
    ]
  },
  {
    head: "I already have an existing booking site, how do I proceed?",
    content: [
      "Airship's booking site is jam packed with features and new releases that we highly encourage you to replace your existing site with Airship's. But in case you still wish to maintain your old one, we provide API endpoints that will allow your developer to push new packages from your existing site to ours.",
      "Please also take note that there are new features that are constantly being added, and if you're maintaining your own booking site and app, you might need to keep a developer at bay to catch up with our new features."
    ]
  },
  {
    head: "What's the best plan for me?",
    content: [
      "Your plan will mainly depend on the number of packages you send per month. Other factors include who your target market is (to know if you need the premium plan) and how many hubs you currently have (to know if you need the enterprise). We can help you do a demand forecast to know which plan would work best for your business. Chat with us!"
    ]
  },
  {
    head: "Do you have a limit to the number of riders and users?",
    content: [
      {__html: "Airship is here with you as you grow. The number of riders and users is <strong>unlimited</strong> for all pricing plans."}
    ]
  },
  {
    head: "I'm new to the courier business. Where do I start?",
    content: [
      {__html: "Airship facilitates what we designed as the Airship Process which is an accumulation of all of the best practices to ensure the integrity of your business. We'll equip you with everything you need to run your business, so you can easily start from day 1. Don't worry&mdash;we're here to hold your hand every step of the way."}
    ]
  }
]

const PricingCard = ({ head, lead, price, list }) => {
  let cta = <CtaButton className="blue alt" >Schedule a Call</CtaButton>
  if (price) {
    cta = (
      <>
        <p className="price"><span>Php {price}</span> / mo</p>
        <p>includes 3,500 packages</p>
        <p>+ Php 300 / 100 packages in excess</p>
      </>
    )
  }

  return (
    <div className="pricing-card">
      <div className="plan">
        <div>
          <h3>{head}</h3>
          <p>{lead}</p>
          <img
            src={`/static/pricing/pricing-${head.toLowerCase()}.png`}
            alt={`${head} plan graphic`}
          />
        </div>
        <div>
          {cta}
        </div>
      </div>

      <div className="offers">
        {list.map(({head, content}) => {
          const list = content.map(str => ({desc: str}))
          return (
            <Fragment key={head}>
              <h4>{head}</h4>
              <Checklist {...{list}} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

const PricingSection = () => (
  <section className="container-sm">
    <h1>The power of all platforms for the price of one</h1>
    <p>No matter where you are in your journey as a courier, we have a pricing plan for you.</p>
    
    <div className="pricing-cards">
      {pricingContent.map(({head, lead, price, list}) => (
        <PricingCard key={head} {...{head, lead, price, list}} />
      ))}
    </div>
  </section>
)

const YouGet = () => (
  <section className="you-get">
    <div className="container-sm">
      <h2>That's not all, with Airship you get</h2>
      <div className="benefits">
        {youGetContent.map(({head, lead, slug}) => (
          <div key={head}>
            <img src={`/static/pricing/pricing-${slug}.png`} alt={`${slug} graphic`} />
            <h3>{head}</h3>
            <p>{lead}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Faq = () => (
  <section className="faq wavy-border">
    <div className="container-sm">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-body">
        {faqContent.map(({head, content}) => (
          <div key={head}>
            <h3>{head}</h3>
            {content.map((item,i) => {
              if (item["__html"]) return <p key={i} dangerouslySetInnerHTML={item} />
              return <p key={i}>{item}</p>
            })}
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Pricing = () => (
  <main id="pricing">
    <PricingSection />
    <YouGet />
    <Faq />
    <CtaSection />
  </main>
)

export default Pricing