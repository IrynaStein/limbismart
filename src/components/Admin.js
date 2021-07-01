import { useState } from "react"

function Admin({ onAddNewArt, onSearchEdit, editableArtWork }) {
    const defaultState = {
        title: "",
        edition: 0,
        likes: 0,
        medium: "",
        image: "",
        featured: false,
        category: "",
        "date created": 0
    }
    const [formData, setFormData] = useState(defaultState)

    console.log(editableArtWork)
    if (editableArtWork.title > 0) {
        console.log(editableArtWork.title)
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
        const configObj = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formData)
        }
        fetch("https://safe-temple-39376.herokuapp.com/artworks", configObj)
            .then(resp => resp.json())
            .then(data => onAddNewArt(data))
        setFormData(defaultState)
    }

    function handleSearch(e) {
        onSearchEdit(e.target.value)
    }

    return (
        <div>
            <div className="ui center aligned container">
                <div className="ui category search">
                    <div className="ui icon input">
                        <input onChange={handleSearch} className="prompt" type="text" placeholder="Search artwork by name..." />
                        <i className="search icon" />
                    </div>
                    <div className="results" />
                </div>
            </div>

            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange} placeholder="title" value={formData.title} />
                </div>
                <div className="field">
                    <label>Image Url</label>
                    <input type="text" name="image" onChange={handleChange} placeholder="imageUrl" />
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Edition</label>
                        <input type="number" name="edition" onChange={handleChange} placeholder="edition" />
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input type="number" name="price" onChange={handleChange} placeholder="price" step="0.01" />
                    </div>
                    <div className="field">
                        <label>Likes</label>
                        <input type="number" name="likes" onChange={handleChange} placeholder="likes" />
                    </div>
                    <div className="field">
                        <label>Date created</label>
                        <input type="number" name="date created" onChange={handleChange} placeholder="date created" />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <select className="ui dropdown" type="text" name="category" onChange={handleChange} placeholder="category">
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
                        <input type="checkbox" onChange={handleFeatureChange} />
                        <label>Make this work a featured image</label>
                    </div>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" name="medium" onChange={handleChange} placeholder="description" />
                </div>
                <button className="ui button" type="submit">Upload new artwork</button>
            </form>
        </div>
    )
}

export default Admin;