import { useState } from "react"

function GalleryItem({ artwork, updateLikes }) {
    const { id, title, image, likes, edition, medium, price, date_created } = artwork
    const [isLiked, setIsLiked] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showModal, setShowModal] = useState(false)


    function handleClick(e) {
        setIsLiked(mUV => !mUV)
        if (isLiked) {
            fetch(`https://safe-temple-39376.herokuapp.com/artworks/${id}`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    "likes": likes - 1
                })
            })
                .then(resp => resp.json())
                .then(data => updateLikes(data))
        }
        else {
            fetch(`https://safe-temple-39376.herokuapp.com/artworks/${id}`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    "likes": likes + 1
                })
            })
                .then(resp => resp.json())
                .then(data => updateLikes(data))
        }
    }

    function handleShowMoreInfo(e) {
        setShowInfo((mUV) => !mUV)
    }

    return (
        <div className="column">
            {/* <div className={showModal ? "ui active small modal" : "ui modal"} style={{ position: 'absolute', left: 130 }}>
                <div className="header">{title}</div>
                <div className="image content">
                    <div className="image" >
                        <img src={image} style={{ width: "675px" }} onClick={() => setShowModal(false)} alt="artwork" />
                    </div>
                </div>
            </div> */}
            {/* <div className="column"> */}

                <div className="ui segment"> 

                    <div className="ui card">
                        <div className="centered content">
                            <b>{title}</b>
                        </div>
                        <div className="image">
                            <img src={image} alt="artwork" onClick={() => setShowModal(true)} />
                        </div>
                        <div className="content">
                            <span onClick={(e) => handleClick(e)} className="right floated">
                                <i className={!isLiked ? "heart outline like icon" : "red heart icon"} />
                                {likes}
                            </span>
                            <div style={{ cursor: 'pointer' }} onClick={(e) => handleShowMoreInfo(e)}>
                                <i className="info circle icon" />
                                {showInfo ? "less info" : "more info"}
                            </div>
                        </div>
                        <div className="extra content" style={{ display: showInfo ? "block" : "none" }}>
                            <div className="ui large transparent left icon input">
                                <p style={{ listStyleType: 'none', fontSize: '12px' }}>
                                    <li><b>edition:</b> {edition}</li>
                                    <li><b>description:</b> {medium}</li>
                                    <li><b>price:</b> ${price}</li>
                                    <li><b>year:</b> {date_created}</li>

                                </p>
                            </div>
                            <br />
                            <span className="right floated">
                                <div className="ui vertical animated button" tabIndex="0">
                                    <a href="https://www.etsy.com/shop/ArtPrintsByLimbism?ref=seller-platform-mcnav" target="_blank" rel="noreferrer" className="hidden content">Shop</a>
                                    <div className="visible content">
                                        <i className="shop icon"></i>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default GalleryItem;