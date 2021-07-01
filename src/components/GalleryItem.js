import { useState } from "react"

function GalleryItem({ artwork }) {
    const { title, image, likes, edition, medium, price } = artwork
    const [isLiked, setIsLiked] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    function handleClick(e) {
        console.log(e)
        setIsLiked(mUV => !mUV)
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
                        <img src={image} alt="artwork"/>
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
                                <li>edition: {edition}</li>
                                <li>medium: {medium}</li>
                                <li>size: ...</li>
                                <li>price:  ${price}</li>

                            </p>
                        </div>
                        <br />
                        <span className="right floated">
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">Shop</div>
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

export default GalleryItem;