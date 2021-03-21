const WhyAirshipItem = ({ i, title, lead, quote, cite }) => (
  <div className="why-item">
    <img src={`/static/home/home-feat-${i + 1}.png`} alt={`Feature ${i + 1} graphic`}/>
    <div>
      <h3>{title}</h3>
      <p>{lead}</p>
      <figure>
        <blockquote dangerouslySetInnerHTML={quote} />
        <figcaption>- {cite}</figcaption>
      </figure>
    </div>
  </div>
)

export default WhyAirshipItem