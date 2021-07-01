function Contact() {
    return (

        <form className="ui form success">
            <h3>CONTACT</h3>

            <div className="field">
                <label>First name</label>
                <input type="text" placeholder="First Name" />
            </div>
            <div className="field">
                <label>Last name</label>
                <input type="text" placeholder="Last Name" />
            </div>

            <div className="field">
                <label>E-mail</label>
                <input type="email" placeholder="me@myemail.com" />
            </div>
            <div class="field">
                <label>Message</label>
                <textarea rows="2"></textarea>
            </div>
            <div className="ui success message">
                <div className="header">Thank you for contacting us</div>
                <p>One of our team members will get back you yor shortly!</p>
            </div>
            <button className="ui submit button">Submit</button>
            <div class="ui hidden divider"></div>
        </form>
    )
}

export default Contact;