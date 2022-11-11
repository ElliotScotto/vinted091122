import { Link } from "react-router-dom";
import logo from "../assets/images/logovinted.svg";
const Header = ({ token, handleToken }) => {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <div className="logo-style">
            <img src={logo} alt="vintedlogo" />
          </div>
        </Link>
        <div className="searchbar-style">
          <input
            className="searchbar"
            type="text"
            placeholder="Rechercher des articles"
          />
        </div>
        {/* Si le tokken existe, on affiche le bouton "deconnexion, sinon "s'inscrire" et se "connecter" */}
        <div className="buttons-header">
          <Link to="/" className="btn-with-link">
            <button className="disconnexion-Btn">Deconnexion</button>
          </Link>
          <Link to="/signup" className="btn-with-link">
            <button className="inscription-Btn">S'inscrire</button>
          </Link>
          <Link to="/login" className="btn-with-link">
            <button className="connexion-Btn">Se connecter</button>
          </Link>
          <button className="sell-Btn">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
