import { useState } from "react"

function Admin() {
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

    function handleChange(e) {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    console.log(formData)

    return (
        <form className="ui form">
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" onChange={handleChange} placeholder="title" />
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
                        <input type="checkbox" />
                        <label>Make this work a featured image</label>
                    </div>
                </div>
            <div className="field">
                <label>Description</label>
                <textarea onChange={handleChange} rows={2} defaultValue={""} />
            </div>
            <button className="ui button" type="submit">Upload new artwork</button>
        </form>
    )
}

export default Admin;