import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Hero from "../components/Hero";

const Home = ({ search, sort, priceMin, priceMax }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_VINTED_REACTEUR_URL}/offers?title=${search}&sort=${sort}&PriceMax=${priceMax}&PriceMin=${priceMin}`
          );
          console.log(
            "REPONSE DU SERVEUR pour la page HOME ici ",
            response.data
          );
          setData(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error.response); // contrairement au error.message d'express
        }
      };
      fetchData();
    },
    [search],
    [sort],
    [priceMin],
    [priceMax]
  );

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Hero />
      <div className="home-big-container-offer">
        {data.offers.map((elem, index) => {
          return (
            elem.owner && (
              <div
                key={index}
                className="home-container-offer"
                onClick={() => {
                  return <Link to={`/offer/${elem.owner._id}`} />;
                }}
              >
                <div className="home-top-offer">
                  {elem.owner.account.avatar && (
                    <img
                      className="home-avatar-img"
                      src={elem.owner.account.avatar.secure_url}
                      alt="avatar_user"
                    />
                  )}
                  <p className="home-offer-username">
                    {elem.owner.account.username}
                  </p>
                </div>
                <Link to={`/offer/${elem._id}`}>
                  <img
                    className="home-offers-img"
                    src={elem.product_image.url}
                    key={index}
                    alt="offerimg"
                  />
                </Link>
                <div className="home-bottom-offer">
                  <p className="home-offer-price">{elem.product_price} €</p>
                  {elem.owner.account.avatar && (
                    <p className="home-offer-size">
                      {elem.product_details[1].TAILLE}
                    </p>
                  )}
                  <p className="home-offer-brand">
                    {elem.product_details[0].MARQUE}
                  </p>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
export default Home;
