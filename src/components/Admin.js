import { Link } from "react-router-dom"
import { useState, useHistory } from "react"

function Admin({ onAddNewArt, onSearchEdit, editableArtWork, onDelete, onEditArt }) {
    const defaultState = {
        title: "",
        edition: 0,
        likes: 0,
        price: 0,
        medium: "",
        image: "",
        featured: false,
        category: "",
        "date created": 0
    }
    const [formData, setFormData] = useState(defaultState)

    // const history = useHistory()

    const listOfArtworks = editableArtWork.map((artwork) => (
        <div className="item" key={artwork.id}>
            <img className="ui mini circular image" src={artwork.image} alt="artwork" />
            <div className={artwork.featured ? "ui blue empty circular label" : ""}></div>
            <div className="content">
                <Link to={`/showpage/${artwork.id}`}><div className="header">{artwork.title} </div></Link>
                <p>description: <em>{artwork.medium}; </em>
                    edition: <em>{artwork.edition}; </em>
                    category: <em>{artwork.category}; </em>
                    date created: <em>{artwork["date created"]}; </em>
                    price: $<em>{artwork.price}. </em>
                </p>
                <div className="ui buttons">
                    <button className="ui button" onClick={(e) => handleDelete(artwork.id)}>Delete</button>
                    <div className="or"></div>
                    <button className="ui positive button" onClick={(e) => handleEdit(artwork)}>Edit</button>
                </div>
                <div className="ui section divider"></div>
            </div>
        </div>
    ))


    function handleDelete(id) {
        console.log(id)
        fetch(`https://safe-temple-39376.herokuapp.com/artworks/${id}`, {
            method: "DELETE"
        })
        onDelete(id)
    }

    function handleEdit(artwork) {
        console.log(artwork)
        setFormData(artwork)

    }

    function handleChange(e) {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleFeatureChange(e) {
        console.log(e.target.checked)
        setFormData({ ...formData, "featured": e.target.checked })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setFormData(formData)
        console.log(formData)
        const configObj = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                title: formData.title,
                edition: parseInt(formData.edition),
                likes: parseInt(formData.likes),
                price: parseFloat(formData.price),
                medium: formData.medium,
                image: formData.image,
                featured: formData.featured,
                category: formData.category,
                "date created": parseInt(formData["date created"])
            })
        }
        const configObj2 = {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                title: formData.title,
                edition: parseInt(formData.edition),
                likes: parseInt(formData.likes),
                price: parseFloat(formData.price),
                medium: formData.medium,
                image: formData.image,
                featured: formData.featured,
                category: formData.category,
                "date created": parseInt(formData["date created"])
            })
        }
        if (formData.id) {
            fetch(`https://safe-temple-39376.herokuapp.com/artworks/${formData.id}`, configObj2)
                .then(resp => resp.json())
                .then(data => onEditArt(data))
            setFormData(defaultState)
        }
        else {
            fetch("https://safe-temple-39376.herokuapp.com/artworks", configObj)
                .then(resp => resp.json())
                .then(data => onAddNewArt(data))
            setFormData(defaultState)
        }
        // history.push("/showpage/:id")
    }

    function handleSearch(e) {
        onSearchEdit(e.target.value)
    }

    return (
        <div >
            <div className="ui center aligned container">
                <div className="ui category search">
                    <div className="ui icon input">
                        <input onChange={handleSearch} className="prompt" type="text" placeholder="Search artwork by name..." />
                        <i className="search icon" />
                    </div>
                    <div className="results" />
                </div>
            </div>
            <br />
            <br />
            <form className="ui form" onSubmit={handleSubmit}>

                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange} placeholder="title" value={formData.title} />
                </div>
                <div className="field">
                    <label>Image Url</label>
                    <input type="text" name="image" onChange={handleChange} placeholder="imageUrl" value={formData.image} />
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Edition</label>
                        <input type="number" name="edition" onChange={handleChange} placeholder="edition" value={formData.edition} />
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="number" name="price" onChange={handleChange} placeholder="price" step="0.01" value={formData.price} />
                    </div>
                    <div className="field">
                        <label>Likes</label>
                        <input type="number" name="likes" onChange={handleChange} placeholder="likes" value={formData.likes} />
                    </div>
                    <div className="field">
                        <label>Date created</label>
                        <input type="number" name="date created" onChange={handleChange} placeholder="date created" value={formData["date created"]} />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <select className="ui dropdown" type="text" name="category" onChange={handleChange} placeholder="category" value={formData.category}>
                            <option className="item">flowers</option>
                            <option className="item">superheroes</option>
                            <option>pop-culture</option>
                            <option>abstract</option>
                            <option>yoga</option>
                        </select>
                    </div>

                </div>
                <div className="field">
                    <div className="ui toggle checkbox">
                        <input type="checkbox" onChange={handleFeatureChange} checked={formData.featured} />
                        <label>Make this artwork a featured image</label>
                    </div>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" name="medium" onChange={handleChange} placeholder="description" value={formData.medium} />
                </div>
                <button className="ui button" type="submit">{formData.id ? "Update the artwork" : "Upload new artwork"}</button>
            </form>
            <div className="ui hidden divider"></div>
            <div className="inline-items">
                <div className="ui blue empty circular label"></div> &nbsp; &nbsp;

                <span className="tooltip" style={{ fontSize: "11px" }}><em>featured item idicator</em>
                    <span className="tooltiptext" style={{ fontSize: "12px" }}>Appears next to the artwork when  it's currently being featured on main page. Type <b>***</b> in a search box above to list featured images only</span>&nbsp;<i className="question circle outline icon"></i></span>
            </div>
            <div className="ui segment" style={{ overflow: 'auto', maxHeight: 200 }}>
                <div className="ui list">
                    {listOfArtworks}
                </div>
            </div>
        </div>
    )
}

export default Admin;