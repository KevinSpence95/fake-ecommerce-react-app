import StarRating from "./starRating";

export default function Filters(props) {
  return (
    <article className="filters">
      <h3>Search Filters</h3>
      <input
        type="text"
        className="searchBar"
        placeholder="Search for products..."
        value={props.searchVal}
        onChange={(e) => {
          props.setSearchVal(e.target.value);
        }}
      />
      <label htmlFor="includeOutOfStock">
        <input
          type="checkbox"
          id="includeOutOfStock"
          checked={props.includeOutOfStock}
          onChange={(e) => {
            props.setIncludeOutOfStock(e.target.checked);
          }}
        />
        Include Out of Stock
      </label>
      <label htmlFor="sortByAscendingPrice">
        <input
          type="checkbox"
          id="sortByAscendingPrice"
          checked={props.sortByAscendingPrice}
          onChange={(e) => {
            props.setSortByAscendingPrice(e.target.checked);
          }}
        />
        Sort by best price
      </label>
      <div>
        <h4>Star Rating</h4>
        <StarRating
          stars={props.stars}
          handler={(x) => props.setStars(x + 1)}
        />
      </div>
      <div>
        <h4>
          <span>{props.resultsPerPage}</span> Results Per Page
        </h4>
        <input
          type="range"
          min="5"
          max="20"
          step="1"
          value={props.resultsPerPage}
          onChange={(e) => {
            props.setResultsPerPage(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          props.setSearchVal("");
          props.setStars(0);
          props.setIncludeOutOfStock(false);
          props.setSortByAscendingPrice(false);
        }}
      >
        Clear Filters
      </button>
    </article>
  );
}
