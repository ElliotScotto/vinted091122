import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log("ici =>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="big-container-offer">
        {data.offers.map((elem, index) => {
          //   console.log(<div key={index}>{elem.product_image.secure_url}</div>);
          return (
            elem.owner && (
              <div
                className="container-offer"
                onClick={() => {
                  return <Link to={`/offer/${elem.owner._id}`} />;
                }}
              >
                <div className="top-offer">
                  {elem.owner.account.avatar && (
                    <img
                      className="avatar-img"
                      src={elem.owner.account.avatar.secure_url}
                      alt="avatar_user"
                    />
                  )}
                  <p className="offer-username">
                    {elem.owner.account.username}
                  </p>
                </div>
                <Link to={`/offer/${elem._id}`}>
                  <img
                    className="offer-img"
                    src={elem.product_image.url}
                    key={index}
                    alt="offerimg"
                  />
                </Link>
                <div className="bottom-offer">
                  <p className="offer-price">{elem.product_price} €</p>
                  {elem.owner.account.avatar && (
                    <p className="offer-size">
                      {elem.product_details[1].TAILLE}
                    </p>
                  )}
                  <p className="offer-brand">
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
