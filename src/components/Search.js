function Search() {
    return (
        <div className="inline-items">
            <div className="ui category search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search by title..." />
                    <i className="search icon" />
                </div>
                <div className="results" />
            </div>

            <div class="ui compact menu" style={{margin: "30px"}}>
                <div class="ui simple dropdown item">
                    Filter by category
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <div value="flowers" class="item">Flowers</div>
                        <div value="pop-culture" class="item">Pop culture characters</div>
                        <div value="superheroes" class="item">Superheroes</div>
                        <div value="abstract" class="item">Abstract</div>
                        <div value="yoga" class="item">Yoga</div>
                    </div>
                </div>
            </div>

            <div class="ui compact menu" >
                <div class="ui simple dropdown item">
                    Sort by...
                    <i class="dropdown icon"></i>
                    <div class="menu">
                        <div value="AZ" class="item">A-Z</div>
                        <div value="ZA" class="item">A-Z</div>
                        <div value="date" class="item">Date created</div>
                        <div value="edition" class="item">Edition</div>
                        <div value="price" class="item">Price</div>
                    </div>
                </div>
                <div class="ui hidden divider"></div>
            </div> 
        </div>
    )
}

export default Search;