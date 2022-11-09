import { Link } from "react-router-dom";

const Home = ({ data }) => {
  console.log(
    data.offers.map((elem) => {
      return <p>{elem}</p>;
    })
  );
  return (
    <div>
      <h1>Ceci est la page Home</h1>
      <br />
      <Link to={`/offer`}>Accéder aux offres</Link>
    </div>
  );
};
export default Home;
