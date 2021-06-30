import {useState} from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import FeaturedItems from "./FeaturedItemsList"
import Footer from "./Footer"
import { Container } from 'semantic-ui-react'
import artworksamples from "../art_data"
import About from "./About"

//HomePage//Limbism
function App() {
const [artworks, setArtworks] = useState(artworksamples)

  return (
    <div className="app">
      <Header />
      <div className="ui grid">
        <Navbar artworks={artworks}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
