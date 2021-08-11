import GalleryItem from "./GalleryItem"
import Search from "./Search"


function Gallery({ artworks, onCategoryFilter, onSortChange, searchTerm, onSearch, onReset, updateLikes, filteredArtworks }) {

    const renderGalleryArtworks = filteredArtworks.map((artwork) => (
        <GalleryItem
            key={artwork.id}
            artwork={artwork}
            updateLikes={updateLikes}
        />
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
            <div className="ui stackable four column grid">
                    {renderGalleryArtworks}
            </div>
        </div>
    )
}

export default Gallery;