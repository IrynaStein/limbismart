import FeaturedItem from "./FeaturedItem";

function FeaturedItemsList({ featuredArt, updateLikes }) {

  const renderArtworks = featuredArt.map((artwork) => (
    <FeaturedItem key={artwork.title} artwork={artwork} updateLikes={updateLikes}/>
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