import logo from "../assets/images/logovinted.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} />
      <div className="searchbar-style">
        <input
          className="searchbar"
          type="text"
          placeholder="Rechercher des articles"
        />
      </div>
      <div className="buttons-header">
        <button className="inscription-Btn">S'inscrire</button>
        <button className="connection-Btn">Se connecter</button>
        <button className="sell-Btn">Vends tes articles</button>
      </div>
    </div>
  );
};
export default Header;
