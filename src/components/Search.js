function Search({onCategoryFilter}) {

    function handleFilterChange(e) {
        onCategoryFilter(e.target.value)
    }

    function handleSortChange(e){
        console.log(e.target.value)
    }

    return (
        <div className="inline-items">
            <div className="ui category search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search by title..." />
                    <i className="search icon" />
                </div>
                <div className="results" />
            </div>

            <div className="ui compact menu" style={{ margin: "30px" }}>
                <div className="ui simple dropdown item">
                    Filter by category
                    <i className="dropdown icon"></i>
                    <div onClick={(e) => handleFilterChange(e)} className="menu">
                        <option value="all" className="item">All</option>
                        <option value="flowers" className="item">Flowers</option>
                        <option value="pop-culture" className="item">Pop culture characters</option>
                        <option value="superheroes" className="item">Superheroes</option>
                        <option value="abstract" className="item">Abstract</option>
                        <option value="yoga" className="item">Yoga</option>
                    </div>
                </div>
            </div>

            <div className="ui compact menu" >
                <div className="ui simple dropdown item">
                    Sort by...
                    <i className="dropdown icon"></i>
                    <div onClick={(e) => handleSortChange(e)} className="menu">
                        <option value="AZ" className="item">A-Z</option>
                        <option value="ZA" className="item">A-Z</option>
                        <option value="date" className="item">Date created</option>
                        <option value="edition" className="item">Edition</option>
                        <option value="price" className="item">Price</option>
                    </div>
                </div>
                <div className="ui hidden divider"></div>
            </div>
        </div>
    )
}

export default Search;