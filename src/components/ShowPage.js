import { useParams, useHistory } from "react-router-dom"

function ShowPage({ filteredArtworks }) {
    const history = useHistory()

    const { id } = useParams()

    const item = filteredArtworks.find(i => i.id === parseInt(id))

    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const time = today.getHours() + ":" + today.getMinutes()

    function handleClick() {
        history.push("/admin")
    }
    return (
        <div className="ui segment">
            <button className="ui right floated labeled icon mini button" onClick={handleClick}>
                <i className="left chevron icon" />
                Back
            </button>
            <div className="header" style={{ fontSize: "20px" }}>{item.title}</div>
            <img className="ui centered medium image" src={item.image} alt="artwork"/>
            <p>{item.medium}</p>
            <p>price: <b>${item.price}</b> &nbsp; &nbsp; category: <b>{item.category}</b> &nbsp; &nbsp; date created: <b>{item["date created"]}</b> &nbsp; &nbsp;available edition numbers: "currently under development"(Phase4)</p>
            <div className="extra content">
                <p>
                    {item.title} has <b>{item.likes}</b>  <i className="red heart icon" /> as of <b>{date}</b> at <b>{time}</b>
                </p>
            </div>
        </div>
    )
}

export default ShowPage;