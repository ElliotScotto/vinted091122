import { Link } from "react-router-dom";
import logo from "../assets/images/logovinted.svg";
import magnifyingGlassForSearch from "../assets/images/magnifyingGlassForSearch.svg";
import Filter from "./Filter";
//
//
const Header = ({
  search,
  setSearch,
  PriceAsc,
  setPriceAsc,
  PriceDesc,
  setPriceDesc,
  userToken,
  handleToken,
}) => {
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
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="header-filter">
            <Filter
              search={search}
              setSearch={setSearch}
              PriceAsc={PriceAsc}
              setPriceAsc={setPriceAsc}
              PriceDesc={PriceDesc}
              setPriceDesc={setPriceDesc}
            />
          </div>
        </div>
        <div className="buttons-header">
          {/* Si le tokken existe, on affiche le bouton "deconnexion, sinon "s'inscrire" et se "connecter" */}
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
          <Link to="/offer/publish" className="btn-with-link">
            <button className="sell-Btn">Vends tes articles</button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
