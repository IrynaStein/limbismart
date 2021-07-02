import { useState } from "react"
function FeaturedItem({ artwork, updateLikes }) {
    const [isLiked, setIsLiked] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const { id, title, image, likes, edition, price, medium, "date created": date } = artwork

    function handleClick(e) {
        console.log(e)
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
        <div className="ui segment">
            <div className="ui card">
                <div className="centered content">
                    {title}
                </div>
                <div className="image">
                    <img src={image} alt="artwork" />
                </div>
                <div className="content">
                    <span onClick={(e) => handleClick(e)} className="right floated">
                        <i className={!isLiked ? "heart outline like icon" : "red heart icon"} />
                        {likes}
                    </span>
                    <span onClick={(e) => handleShowMoreInfo(e)}>
                        <i className="info circle icon" />
                        {showInfo ? "less info" : "more info"}
                    </span>
                </div>
                <div className="extra content" style={{ display: showInfo ? "block" : "none" }}>
                    <div className="ui large transparent left icon input">
                        <p style={{ listStyleType: 'none', fontSize: '12px' }}>
                            <li><b>edition:</b> {edition}</li>
                            <li><b>description:</b> {medium}</li>
                            <li><b>price:</b> ${price}</li>
                            <li><b>year: </b>{date}</li>
                        </p>
                    </div>

                    <br />
                    <span className="right floated">
                        <div className="ui vertical animated button" tabIndex="0">
                            <a href="https://www.etsy.com/shop/ArtPrintsByLimbism?ref=seller-platform-mcnav" className="hidden content">Shop</a>
                            <div className="visible content">
                                <i className="shop icon"></i>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
)
}

export default FeaturedItem;