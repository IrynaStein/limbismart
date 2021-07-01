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
    const [featuredArt, setFeaturedArt] = useState([])
    const [filterTerm, setFilterTerm] = useState("all")

    useEffect(() => {
        fetch("https://safe-temple-39376.herokuapp.com/artworks")
            .then(resp => resp.json())
            .then(data => sortArtworksbyFeature(data))
    }, [])


    function sortArtworksbyFeature(artworksArray) {
        const featuredWorks = artworksArray.filter((element) => element.featured)
        setFeaturedArt(featuredWorks)
        setArtworks(artworksArray)
    }

    function onCategoryFilter(selectedFilter) {
        console.log(selectedFilter)
        setFilterTerm(selectedFilter)
        
    }

    const filteredArtworks = artworks.filter((artwork) => (filterTerm === "all")? true: artwork.category === filterTerm)


    function updateLikes(artworkObj){
        console.log(artworkObj)
    //     const updatedLikesArtwork = artworks.map((artwork) => {
    //         if (artwork.id === artworkObj.id){
    //             return artworkObj
    //         }
    //         else {
    //             return artwork
    //         }
    //     })

    // setArtworks(updatedLikesArtwork)
    }


    return (
        <Container >
            <Switch >
                <Route exact path="/">
                    <FeaturedItemsList featuredArt={featuredArt} updateLikes={updateLikes}/>
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/gallery">
                    <Gallery artworks={filteredArtworks} onCategoryFilter={onCategoryFilter} />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
            </Switch>
            <div className="ui hidden divider"></div>
        </Container>
    )
}

export default Limbism;