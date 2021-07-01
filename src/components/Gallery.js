import GalleryItem from "./GalleryItem"
import Search from "./Search"

function Gallery({ artworks }) {
console.log(artworks)
    const renderGalleryArtworks = artworks.map((artwork) => (
        <GalleryItem key={artwork.id} artwork={artwork} />
    ))
    return (
        <div>
            <Search />
            <div className="ui four column grid">
            <div className="four column row">
            {renderGalleryArtworks}
            </div>
            </div>
     
        </div>
    )
}

export default Gallery;