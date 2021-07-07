import FeaturedItem from "./FeaturedItem";

function FeaturedItemsList({ featuredArt, updateLikes }) {

  const renderArtworks = featuredArt.filter(artwork => artwork.featured)
    .map((artwork) => {
      return <FeaturedItem key={artwork.title} artwork={artwork} updateLikes={updateLikes} />
    })

  return (
    <div>
      <div className="ui three column grid">
        {renderArtworks}
      </div>
    </div>
  )
}

export default FeaturedItemsList;