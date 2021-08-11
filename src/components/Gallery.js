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
            <div className="ui left aligned basic segment">
            <Search
                onCategoryFilter={onCategoryFilter}
                onSortChange={onSortChange}
                searchTerm={searchTerm}
                onSearch={onSearch}
                onReset={onReset}
            />
            </div>
            <div className="ui basic segment">
            <div className="ui grid">
                <div className="four column row">
                    {renderGalleryArtworks}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Gallery;