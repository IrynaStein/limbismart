import { useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"
import About from "./About"
import FeaturedItemsList from "./FeaturedItemsList"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Admin from "./Admin"
import { Container } from 'semantic-ui-react'
import ShowPage from "./ShowPage"



function Limbism() {
    const [artworks, setArtworks] = useState([])
    const [filterTerm, setFilterTerm] = useState("all")
    const [sortTerm, setSortTerm] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTermEdit, setSearchTermEdit] = useState("")

    useEffect(() => {
        fetch("https://safe-temple-39376.herokuapp.com/artworks")
            .then(resp => resp.json())
            .then(data => setArtworks(data))
    }, [])


    function onCategoryFilter(selectedFilter) {
        setFilterTerm(selectedFilter)
    }

    const filteredArtworks = artworks
        .filter((artwork) => (filterTerm === "all") ? true : artwork.category === filterTerm)    
        .filter((artwork) => artwork.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((artwork1, artwork2) => {
            switch (sortTerm) {
                case "AZ":
                    return artwork1.title.toLowerCase() < artwork2.title.toLowerCase() ? -1 : 1
                case "ZA":
                    return artwork1.title.toLowerCase() > artwork2.title.toLowerCase() ? -1 : 1
                case "price":
                    return artwork1.price < artwork2.price ? -1 : 1
                case "mostpopular":
                    return artwork1.likes > artwork2.likes ? -1 : 1
                case "edition":
                    return artwork1.edition < artwork2.edition ? -1 : 1
                case "newest":
                    return artwork1["date created"] > artwork2["date created"] ? -1 : 1
                default: 
                return 1
            }
        })


    function updateLikes(artworkObj) {
        console.log(artworkObj)
        const updatedLikesArray = artworks.map((art) => (art.id === artworkObj.id) ? artworkObj : art)
        setArtworks(updatedLikesArray)
    }

    function onSortChange(selectedSort) {
        setSortTerm(selectedSort)
    }

    function onSearch(searchWord) {
        setSearchTerm(searchWord)
    }

    function onReset() {
        setSortTerm("all")
        setSearchTerm("")
        setFilterTerm("all")
    }

    function onEditArt(editedArtObj) {
        const updatedWorks = artworks.map((artwork) => {
            if (artwork.id === editedArtObj.id) {
                return editedArtObj
            }
            else {
                return artwork
            }
        })
        setArtworks(updatedWorks)
    }

    function onAddNewArt(postedArtwork) {
        console.log("this is new work")
        setArtworks([...artworks, postedArtwork])
    }

    function onSearchEdit(searchEditValue) {
        setSearchTermEdit(searchEditValue)
    }

    function onDelete(id) {
        console.log(id)
        const deletedArtwork = artworks.filter((artwork) => artwork.id !== id)
        setArtworks(deletedArtwork)
    }

    const editableArtWork = artworks.filter((artwork) => {
        if (searchTermEdit.toLowerCase() === "***") {
            return artwork.featured
        }
        else {
            return artwork.title.toLowerCase().includes(searchTermEdit)
        }
    })

    return (
        <Container >
            <Switch >
                <Route exact path="/">
                    <FeaturedItemsList featuredArt={artworks} updateLikes={updateLikes} />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/gallery">
                    <Gallery
                        filteredArtworks={filteredArtworks}
                        onCategoryFilter={onCategoryFilter}
                        onSortChange={onSortChange}
                        searchTerm={searchTerm}
                        onSearch={onSearch}
                        onReset={onReset}
                        updateLikes={updateLikes}
                    />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/admin">
                    <Admin
                        onAddNewArt={onAddNewArt}
                        onEditArt={onEditArt}
                        onSearchEdit={onSearchEdit}
                        editableArtWork={editableArtWork}
                        onDelete={onDelete}
                    />
                </Route>
                <Route exact path="/showpage/:id">
                    <ShowPage filteredArtworks={filteredArtworks}/>
                </Route>
            </Switch>
            <div className="ui hidden divider"></div>
        </Container>
    )
}

export default Limbism;