import { Link } from "react-router-dom";

const Home = ({ data }) => {
  //   console.log(
  //     data.offers.map((elem) => {
  //       return <p>{elem.offers}</p>;
  //     })
  //   );
  return (
    <div>
      <br />
      <h1>Ceci est la page Home</h1>
      <br />
      <div className="big-container-offer">
        {data.offers.map((elem, index) => {
          //   console.log(<div key={index}>{elem.product_image.secure_url}</div>);
          return (
            <div className="container-offer">
              <img
                className="offer-img"
                src={elem.product_image.url}
                key={index}
              />
              {/* <p className="offer-username">{elem.owner.account.username}</p> */}
              <p className="offer-price">{elem.product_price} €</p>
              <p className="offer-size">{elem.product_details[1].TAILLE}</p>
              <p className="offer-brand">{elem.product_details[0].MARQUE}</p>
            </div>
          );
        })}
      </div>

      <br />
      <Link to={`/offer`}>Accéder aux offres</Link>
    </div>
  );
};
export default Home;
