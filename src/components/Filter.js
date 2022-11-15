import { useState, useEffect } from "react";
import axios from "axios";
//

//
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
  const [data, setData] = useState();

  const handleSort = async (event) => {
    event.preventDefault();
  };

  //
  useEffect(() => {
    const fetchData = async () => {
      // event.preventDefault();
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_VINTED_REACTEUR_URL}/offers?title=${search}&sort=${sort}&priceMax=${priceMax}&priceMin=${priceMin}`
        );
        // console.log(
        //   "REPONSE DU SERVEUR pour la page HOME with Filter ici ",
        //   response.data
        // );
        setData(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [search, sort, priceMin, priceMax]);
  //

  return (
    <form onSubmit={handleSort}>
      <div className="filter-offers">
        <div className="PriceFilter-AToZ">
          Trier par prix
          <input
            type="checkbox"
            checked={sort}
            onChange={() => {
              setSort(!sort);
            }}
            name="price"
          />
          <div className="PriceFilter-Reduce">
            Prix entre :
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
      </div>
    </form>
  );
};
export default Filter;
