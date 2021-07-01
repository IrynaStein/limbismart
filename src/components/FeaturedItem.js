import { useState } from "react"
function FeaturedItem({ artwork, updateLikes}) {
    const [isLiked, setIsLiked] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    

    const { id, title, image, likes, edition, price, medium } = artwork

const [updatedLikes, setUpdatedLikes] = useState(likes)



    function handleClick(e) {
        console.log(e)
        setIsLiked(mUV => !mUV)
        // console.log(id)
        
        // isLiked? setUpdatedLikes(mUV => mUV-1) : setUpdatedLikes(mUV => mUV+1)
        setUpdatedLikes(mUV => mUV + 1)
        // updateLikes(artwork)
        fetch(`https://safe-temple-39376.herokuapp.com/artworks/${id}`,{
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                "likes": parseInt(updatedLikes) 
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data.likes))
    }
    console.log(updatedLikes)

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
                            {updatedLikes}
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

export default FeaturedItem;