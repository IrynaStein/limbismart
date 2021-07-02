import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import About from "./About"
import FeaturedItemsList from "./FeaturedItemsList"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Admin from "./Admin"
import { Container } from 'semantic-ui-react'



function Limbism() {
    const [artworks, setArtworks] = useState([])
    // const [featuredArt, setFeaturedArt] = useState([])
    const [filterTerm, setFilterTerm] = useState("all")
    const [sortTerm, setSortTerm] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTermEdit, setSearchTermEdit] = useState("")

    useEffect(() => {
        fetch("https://safe-temple-39376.herokuapp.com/artworks")
            .then(resp => resp.json())
            .then(data => sortArtworksbyFeature(data))
    }, [])


    // function sortArtworksbyFeature(artworksArray) {
    //     const featuredWorks = artworksArray.filter((element) => element.featured)
    //     setFeaturedArt(featuredWorks)
    //     setArtworks(artworksArray)
    // }

    function sortArtworksbyFeature(artworksArray) {
        setArtworks(artworksArray)
    }

    const featuredWorks = artworks.filter((element) => element.featured)

    

    function onCategoryFilter(selectedFilter) {
        setFilterTerm(selectedFilter)

    }

    const filteredArtworks = artworks
        .filter((artwork) => (filterTerm === "all") ? true : artwork.category === filterTerm)
        .filter((artwork) => artwork.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((artwork1, artwork2) => {
            if (sortTerm === "AZ") {
                return artwork1.title.toLowerCase() < artwork2.title.toLowerCase() ? -1 : 1
            }
            else if (sortTerm === "ZA") {
                return artwork1.title.toLowerCase() > artwork2.title.toLowerCase() ? -1 : 1
            }
            else if (sortTerm === "price") {
                return artwork1.price < artwork2.price ? -1 : 1
            }
            else if (sortTerm === "mostpopular") {
                return artwork1.likes > artwork2.likes ? -1 : 1
            }
            else if (sortTerm === "edition") {
                return artwork1.edition < artwork2.edition ? -1 : 1
            }
            else {
                return artwork1["date created"] > artwork2["date created"] ? -1 : 1
            }
        })
    //refactor with a switch^^^^


    // function updateLikes(artworkObj) {
    //     console.log(artworkObj)
    //     const newArray = featuredArt.map((art) => (art.id === artworkObj.id) ? artworkObj : art)
    //     setFeaturedArt(newArray)
    // }
    
    function updateLikes(artworkObj) {
        console.log(artworkObj)
        const newArray = artworks.map((art) => (art.id === artworkObj.id) ? artworkObj : art)
        setArtworks(newArray)
    }

    function onSortChange(selectedSort) {
        setSortTerm(selectedSort)
    }

    function onSearch(searchWord) {
        setSearchTerm(searchWord)
    }

    function onReset(checked) {
        console.log(checked)
        if (checked) {
            setArtworks(artworks)
        }
        console.log("updated artworks array")
    }
//this function is not working ^^^^ it's supposed to reset all filters to the original array

    function onAddNewArt(newArtworkObj){
        const updatedWorks = artworks.map((artwork) => {
            if (artwork.id === newArtworkObj.id){
                // const index = artwork.findIndex()
                // const arrayBeforeChange = artworks.slice(0, index)
                // const arrayAfterChange = artworks.slice(index + 1)
                // return [...arrayBeforeChange, newArtworkObj, ...arrayAfterChange]
                console.log("this work already exists")
                //replace old object with a new one
                //setArtworks to this updated obj + old array (...spread, obj)
                return newArtworkObj
            }
            else {
                // return [...artworks, newArtworkObj]
                console.log("this is new work")
                return artwork
            }
        })
       setArtworks(updatedWorks) 
    }

    function onSearchEdit(searchEditValue){
        setSearchTermEdit(searchEditValue)
    }
function onDelete(id){
console.log(id)
const deletedArtwork = artworks.filter((artwork) => artwork.id !== id)
setArtworks(deletedArtwork)
}
    const editableArtWork = artworks.filter((artwork) => artwork.title.toLowerCase().includes(searchTermEdit))

    return (
        <Container >
            <Switch >
                <Route exact path="/">
                    {/* <FeaturedItemsList featuredArt={featuredArt} updateLikes={updateLikes} /> */}
                    <FeaturedItemsList featuredArt={featuredWorks} updateLikes={updateLikes} />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/gallery">
                    <Gallery
                        artworks={filteredArtworks}
                        onCategoryFilter={onCategoryFilter}
                        onSortChange={onSortChange}
                        searchTerm={searchTerm}
                        onSearch={onSearch}
                        onReset={onReset}
                        // updateLikes={updateGalleryLikes}
                    />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/admin">
                    <Admin 
                    onAddNewArt={onAddNewArt} 
                    onSearchEdit={onSearchEdit} 
                    editableArtWork={editableArtWork}
                    onDelete={onDelete}
                    />
                </Route>
            </Switch>
            <div className="ui hidden divider"></div>
        </Container>
    )
}

export default Limbism;