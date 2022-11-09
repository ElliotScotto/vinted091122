import { Link } from "react-router-dom";
import data from "../assets/data.json";

const Home = () => {
  console.log(
    data.offers.map((elem) => {
      return <p>{elem}</p>;
    })
  );
  return (
    <div>
      <h1>Ceci est la page Home</h1>
      <br />
      {/* <Link to={`/offer/${data}`}>Accéder à l'offre</Link> */}
    </div>
  );
};
export default Home;
