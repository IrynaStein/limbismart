import { Switch, Route } from "react-router-dom"
import FeaturedItemsList from "./FeaturedItemsList"
import About from "./About"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Admin from "./Admin"
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from "react"


function Limbism() {
    const [artworks, setArtworks] = useState([])
    // const [featuredArt, setFeaturedArt] = useState([])

    useEffect(() => {
        fetch("https://safe-temple-39376.herokuapp.com/artworks")
            .then(resp => resp.json())
            .then(data => setArtworks(data))
    }, [])

    

    // function sortArtworksbyFeature(artworksArray) {
    //     const featuredWorks = artworksArray.filter((element) => element.featured)
    //     setFeaturedArt(featuredWorks)
    //     setArtworks(artworksArray)
    // }

    return (
        <Container >
            <Switch>
                <Route exact path="/">
                    <FeaturedItemsList featuredArt={artworks} />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/gallery">
                    <Gallery artworks={artworks} />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/admin">
                    <Admin />
                </Route>
            </Switch>
            <div class="ui hidden divider"></div>
        </Container>
    )
}

export default Limbism;