const Filter = ({
  search,
  setSearch,
  sort,
  setSort,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
}) => {
  return (
    <div className="filter-offers">
      <div className="PriceFilter-AToZ">
        <p>Trier par prix : </p>
        <div className="filter-Btns">
          <div className="filter-asc">
            <div className="arrow-icon">⇡</div>
            <input
              className="filter-asc-Btn"
              name="price-asc"
              onClick={() => {
                setSort("price-asc");
              }}
            />
          </div>
          <div className="filter-desc">
            <div className="arrow-icon">⇣</div>
            <input
              className="filter-desc-Btn"
              name="price-desc"
              onClick={() => {
                setSort("price-desc");
              }}
            />
          </div>
        </div>
      </div>
      <div className="PriceFilter-Reduce">
        <p>Prix entre : </p>
        <input
          type="number"
          placeholder="Prix Minimmum"
          onChange={(event) => {
            setPriceMin(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Prix Maximum"
          onChange={(event) => {
            setPriceMax(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default Filter;
