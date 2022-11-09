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
      <div>
        {data.offers.map((elem, index) => {
          return <p key={index}>{elem._id}</p>;
        })}
      </div>

      <br />
      <Link to={`/offer`}>Accéder aux offres</Link>
    </div>
  );
};
export default Home;
