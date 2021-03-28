const BodyListItem = ({ head, lead, i, currSlug, imgSlug, children }) => (
  <div className="body-list-item">
    <img
      src={`/static/${currSlug || "home"}/${imgSlug || "home-feat"}-${i + 1}.png`}
      alt={`feature ${i + 1} graphic`}
    />
    <div>
      <h3>{head}</h3>
      <p>{lead}</p>
      {children}
    </div>
  </div> 
)

export default BodyListItem