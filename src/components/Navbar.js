import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="ui vertical fluid tabular menu">
                <NavLink exact to="/" className="item">
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
                <div className="ui horizontal divider"></div>
                <div style={{ paddingLeft: '19px' }}>
                    <a href="https://www.instagram.com/limbism/?hl=en">
                        <i className="instagram icon" />
                    </a>
                    <a href="https://www.facebook.com/Limbism/">
                        <i className="facebook f icon"></i>
                    </a>
                    <a href="https://www.etsy.com/shop/ArtPrintsByLimbism?ref=seller-platform-mcnav">
                        <i className="etsy icon" />
                    </a>
                    <div className="ui horizontal divider"></div>
                    <div className="ui center aligned container">
                        <a href="https://opensea.io/LIMBISM" className="ui pointing blue basic label" style={{ float: 'left' }}>Shop NFTs</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;