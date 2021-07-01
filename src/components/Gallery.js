import GalleryItem from "./GalleryItem"
import Search from "./Search"


function Gallery({ artworks, onCategoryFilter, onSortChange, searchTerm, onSearch, onReset, updateLikes }) {

    const renderGalleryArtworks = artworks.map((artwork) => (
        <GalleryItem key={artwork.id} artwork={artwork} updateLikes={updateLikes}/>
    ))
    return (
        <div>
            <Search 
            onCategoryFilter={onCategoryFilter} 
            onSortChange={onSortChange} 
            searchTerm={searchTerm} 
            onSearch={onSearch}
            onReset={onReset}
            />
            <div className="ui four column grid">
            <div className="four column row">
            {renderGalleryArtworks}
            </div>
            </div>
     
        </div>
    )
}

export default Gallery;