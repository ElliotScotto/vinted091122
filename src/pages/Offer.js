import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log("ici =>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <>
      <Link to="/">Back Home</Link>
      <br />
      <span>En cours de chargement...</span>
    </>
  ) : (
    <div className="offer-container">
      <div className="offer-block-left">
        <img
          className="offer-img-offer"
          src={data.product_image.secure_url}
          alt=""
        />
      </div>
      <div className="offer-block-right">
        <p className="offer-price">{data.product_price} €</p>
        <div>
          {/* Je parcours product_details, à chaque tour je récupère le nom de la clef de l'objet du tour */}
          {data.product_details.map((detail, index) => {
            const objectKey = Object.keys(detail)[0];
            //   console.log(objectKey);
            return (
              <div className="offer-details-style" key={index}>
                {/* J'affiche la clef de l'objet */}
                <div className="container-offer-name-details">
                  <span className="offer-name-details">{objectKey}</span>
                </div>
                <div className="container-offer-value-details">
                  {/* J'affiche le contenu de la clef */}
                  <span className="offer-value-detail">
                    {detail[objectKey]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Offer;
