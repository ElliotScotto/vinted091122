import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({
  search,
  setSearch,
  PriceAsc,
  setPriceAsc,
  PriceDesc,
  setPriceDesc,
}) => {
  const [data, setData] = useState();
  // const newTabfiltered = [];
  useEffect(() => {
    const fetchData = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${search}`
        );
        console.log(
          "REPONSE DU SERVEUR pour la page HOME with Filter ici ",
          response.data
        );
        setData(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, [search]);
  return (
    <div className="filter-offers">
      <div className="PriceFilter-AToZ">
        Trier par prix
        <input
          type="checkbox"
          checked={PriceAsc}
          onChange={() => {
            setPriceAsc(!PriceAsc);
          }}
        />
        <input
          type="checkbox"
          checked={PriceDesc}
          onChange={() => {
            setPriceDesc(!PriceDesc);
          }}
        />
      </div>
      <div className="PriceFilter-Reduce">
        Prix entre :
        <input
          type="number"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default Filter;
