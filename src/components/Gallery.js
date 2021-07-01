import GalleryItem from "./GalleryItem"
import Search from "./Search"


function Gallery({ artworks, onCategoryFilter }) {

    const renderGalleryArtworks = artworks.map((artwork) => (
        <GalleryItem key={artwork.id} artwork={artwork} />
    ))
    return (
        <div>
            <Search onCategoryFilter={onCategoryFilter}/>
            <div className="ui four column grid">
            <div className="four column row">
            {renderGalleryArtworks}
            </div>
            </div>
     
        </div>
    )
}

export default Gallery;