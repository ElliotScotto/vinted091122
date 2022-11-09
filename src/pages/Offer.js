import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Ceci est la page Offer</h2>
      <span>The offer id is:{id}</span>
      <br />
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default Offer;
