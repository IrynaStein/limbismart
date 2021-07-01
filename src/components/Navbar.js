import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="ui vertical fluid tabular menu">
            <NavLink to="/" className="item">
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
                <i className="instagram icon" />
                <i className="facebook f icon"></i>
                <i className="etsy icon" />
            </div>
            </div>
        </div>

    )
}

export default Navbar;