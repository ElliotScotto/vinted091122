import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";

const Offer = (offers) => {
  const { id } = useParams();
  return (
    <div>
      <h2>Ceci est la page Offer</h2>
      <span>The offer id is:{offers}</span>
      <br />
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default Offer;
