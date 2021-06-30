import FeaturedItem from "./FeaturedItem";

function FeaturedItemsList({ artworks }) {
  {/*this will map and return 3 featured items*/ }

  const renderArtworks = artworks.map((artwork) => (
    <FeaturedItem key={artwork.title} artwork={artwork} />
  ))

  return (
    <div>
      {/* <div><h2 className="ui center aligned small header">Featured Artworks</h2></div> */}
      <div className="ui three column grid">
        {renderArtworks}
      </div>
    </div>
  )
}

export default FeaturedItemsList;