import { Link } from "react-router-dom";
import logo from "../assets/images/logovinted.svg";
import magnifyingGlassForSearch from "../assets/images/magnifyingGlassForSearch.svg";
import Filter from "./Filter";
const Header = ({ handleToken, userToken }) => {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <div className="logo-style">
            <img src={logo} alt="vintedlogo" />
          </div>
        </Link>
        <div className="searchbar-and-filter">
          <div className="searchbar-style">
            <div className="block-left-searchImage">
              <img
                className="glassIcon"
                src={magnifyingGlassForSearch}
                alt="search_icon"
              />
            </div>
            <div className="block-right-searchbar">
              <input
                className="searchbar"
                type="text"
                placeholder="Rechercher des articles"
              />
            </div>
          </div>
          <div className="header-filter">
            <Filter />
          </div>
        </div>
        {/* Si le tokken existe, on affiche le bouton "deconnexion, sinon "s'inscrire" et se "connecter" */}
        <div className="buttons-header">
          {userToken ? (
            <Link to="/" className="btn-with-link">
              <button
                className="disconnexion-Btn"
                onClick={() => {
                  handleToken();
                }}
              >
                Deconnexion
              </button>
            </Link>
          ) : (
            <>
              <Link to="/signup" className="btn-with-link">
                <button className="inscription-Btn">S'inscrire</button>
              </Link>
              <Link to="/login" className="btn-with-link">
                <button className="connexion-Btn">Se connecter</button>
              </Link>
            </>
          )}
          <Link to="/sales" className="btn-with-link">
            <button className="sell-Btn">Vends tes articles</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
