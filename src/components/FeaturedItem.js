import { useState } from "react"
function FeaturedItem({ artwork }) {
    const [isLiked, setIsLiked] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    const { title, image, likes, edition, price, medium } = artwork

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
                {/*this is image rendering card*/}
                <div className="ui card">
                    <div className="centered content">
                        {/* <div className="right floated meta">14h</div> */}
                        {title}
                    </div>
                    <div className="image">
                        <img src={image} />
                    </div>
                    <div className="content">
                        <span onClick={(e) => handleClick(e)} className="right floated">
                            <i className={!isLiked ? "heart outline like icon" : "red heart icon"} />
                            {likes}
                        </span>
                        <span onClick={(e) => handleShowMoreInfo(e)}>
                            <i class="info circle icon" />
                            {showInfo? "less info" : "more info"}
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
                        {/* <span className="right floated meta">
                            <i className="shopping cart icon">
                            </i></span> */}
                            <br/>
                         <span className="right floated">
                        <div class="ui vertical animated button" tabindex="0">
                            <div class="hidden content">Shop</div>
                            <div class="visible content">
                                <i class="shop icon"></i>
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