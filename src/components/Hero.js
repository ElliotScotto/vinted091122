import { Link } from "react-router-dom";
import HeroVintedImage from "../assets/images/herovinted.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-vinted-image">
        <img
          className="heroVintedImg"
          src={HeroVintedImage}
          alt="image-hero-vinted-home"
        />
        <div className="torn-image">
          <img
            src="https://lereacteur-vinted.netlify.app/static/media/tear.884480420945b3afd77b44a6c5f98567.svg"
            alt="hero_torn_effect"
            className="home-hero-torn-effect"
          />
        </div>
        <div className="StartToSales">
          <div>Prêts à faire du tri dans vos placards ?</div>
          <div>
            <Link to="/sales" className="btn-with-link">
              <button className="StartToSales-Btn">Commencer à vendre</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
