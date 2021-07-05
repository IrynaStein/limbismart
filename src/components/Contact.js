import { useState } from "react";
import zapierUrl from "../zapier";

function Contact() {
    const defaultForm = {
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    }
    const [formData, setFormData] = useState(defaultForm)
    const [success, setSuccess] = useState()
    const [isSent, setIsSent] =useState(false)

    function handleChange(e) {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
        console.log(formData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsSent(true)
        fetch(zapierUrl, {
            method: "POST",
            body: JSON.stringify({ formData })
        })
            .then(resp => resp.json())
            .then(data => handleResponse(data))
            .catch(() => alert("There was an error, please try again"))
            setFormData(defaultForm)
            setTimeout(()=> setIsSent(false), 5000) 
            //needs to be on 5 seconds timeout so it disappears 
    }

    function handleResponse(response) {
        if (response.status === "success") {
            setSuccess(true)
        }
        else {
            setSuccess(false)
        }
    }
    console.log(success)

    return (

        <form className="ui form success" onSubmit={handleSubmit}>
            <h3>CONTACT</h3>
            <div className="fields">
                <div className="field">
                    <label htmlFor="firstname">First name</label>
                    <input
                        name="firstname"
                        value={formData.firstname}
                        type="text"
                        placeholder="First Name"
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="lastname">Last name</label>
                    <input name="lastname"
                        value={formData.lastname}
                        type="text"
                        placeholder="Last Name"
                        onChange={handleChange}
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input
                        name="email"
                        value={formData.email}
                        type="email"
                        placeholder="me@myemail.com"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    rows="2"
                    onChange={handleChange}
                >
                </textarea>
            </div>
            {/*below change "success" to "warning"*/}
            {isSent? (<div className={success ? "ui success message" : "ui warning message"}>
                    <div className="header">Thank you for contacting us</div>
                    <p>One of our team members will get back you yor shortly!</p>
                </div>)
                : null}
                
           

            <button className="ui submit button">Submit</button>
            <div className="ui hidden divider"></div>
        </form>
    )
}

export default Contact;