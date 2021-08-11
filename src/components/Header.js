function Header() {
    return (
        <div className="ui huge left header" style={{paddingLeft: "35px"}}>
            <img src="https://live.staticflickr.com/65535/51291376320_d379ef7bff_t.jpg" alt="logo" className="ui circular image" />
            {/* <div className="ui center aligned container"> */}
                        <a href="https://opensea.io/LIMBISM" target="_blank" rel="noreferrer" className="ui left pointing blue basic label" style={{ float: 'left' }}>Shop NFTs</a>
                        {/* <div className="ui hidden divider"></div> */}
                    {/* </div> */}
        </div>
    )

}

export default Header;