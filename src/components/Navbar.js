import { NavLink } from "react-router-dom"
import { Container } from "semantic-ui-react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import About from "./About"
import Gallery from "./Gallery"
import Contact from "./Contact"
import FeaturedItemsList from "./FeaturedItemsList"

// const linkStyles = {
//     width: "100px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "white",
//     textDecoration: "none",
//     color: "black",
//   };

function Navbar({ artworks }) {
    return (
        <div className="ui grid">
            <div className="four wide column">
                <div className="ui vertical fluid tabular menu">
                    <NavLink to="/home" className="active item">
                        LIMBISM
                    </NavLink>
                    <NavLink to="/about" className="item">
                        ABOUT
                    </NavLink>
                    <NavLink to="/gallery" className="item">
                        GALLERY
                    </NavLink>
                    <NavLink to="/contact" className="item">
                        CONTACT
                    </NavLink>
                    <div class="ui horizontal divider"></div>
                    <div style={{ paddingLeft: '19px' }}>
                        <i className="instagram icon" />
                        <i className="facebook f icon"></i>
                        <i className="etsy icon" />
                    </div>
                </div>
            </div>
            <div className="twelve wide stretched column">

                <div className="ui segment">
                <FeaturedItemsList artworks={artworks} />
                    {/* <Switch>
                        <Route exact path to="/limbism">
                           <FeaturedItemsList artworks={artworks} />
                        </Route>

                        <Route exact path to="/gallery">
                            <Gallery />
                        </Route>
                    </Switch> */}
                </div>
            </div>
        </div>
    )
}

            export default Navbar;