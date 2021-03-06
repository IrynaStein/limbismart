function Search({
  onCategoryFilter,
  onSortChange,
  searchTerm,
  onSearch,
  onReset,
}) {
  function handleFilterChange(e) {
    onCategoryFilter(e.target.value);
  }

  function handleSortChange(e) {
    onSortChange(e.target.value);
  }

  function handleChange(e) {
    onSearch(e.target.value);
  }

  function handleClearChange() {
    onReset();
  }

  return (
    <div className="ui stackable four column centered grid">
      <div className="column">
        <div className="ui icon input" style={{ width: 180, height: 42 }}>
          <input
            onChange={handleChange}
            value={searchTerm}
            className="prompt"
            type="text"
            placeholder="Search by title..."
          />
          <i className="search icon" />
        </div>
      </div>

      <div className="column">
        <div className="ui compact menu">
          <div className="ui simple dropdown item" style={{ width: 180 }}>
            Filter by category
            <i className="dropdown icon" />
            <div onClick={(e) => handleFilterChange(e)} className="menu">
              <option value="all" className="item">
                All
              </option>
              <option value="flowers" className="item">
                Flowers
              </option>
              <option value="pop-culture" className="item">
                Pop culture characters
              </option>
              <option value="superheroes" className="item">
                Superheroes
              </option>
              <option value="abstract" className="item">
                Abstract
              </option>
              <option value="yoga" className="item">
                Yoga
              </option>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="ui compact menu">
          <div className="ui simple dropdown item" style={{ width: 180 }}>
            Sort by...
            <i className="dropdown icon"></i>
            <div onClick={(e) => handleSortChange(e)} className="menu">
              <option value="all" className="item">
                Reset sort...
              </option>
              <option value="mostpopular" className="item">
                Most popluar
              </option>
              <option value="AZ" className="item">
                A-Z
              </option>
              <option value="ZA" className="item">
                Z-A
              </option>
              <option value="date" className="item">
                Newest
              </option>
              <option value="edition" className="item">
                Edition
              </option>
              <option value="price" className="item">
                Price
              </option>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <button
          onClick={handleClearChange}
          className="circular ui icon basic button"
          style={{ width: 180, height: 42 }}
        >
          <i className="redo icon"></i> &nbsp; &nbsp;
          <label style={{ fontSize: "12px" }}>Clear all filters</label> &nbsp;
          &nbsp;
        </button>
      </div>
    </div>
  );
}

export default Search;
