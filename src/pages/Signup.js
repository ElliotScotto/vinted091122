//import fonctions React
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
// import Cookies from "js-cookie";
//import components
// import Loading from "../components/Loading";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_VINTED_REACTEUR_URL}/user/signup`,
        // "https://site--backend-vinted--cpx4vl465khg.code.run/users/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      console.log(
        "REPONSE DU SERVEUR pour la page SIGNUP ICI =>",
        response.data
      );
      // setIsLoading(true);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container-form">
      <form className="inscription-form" onSubmit={handleSubmit}>
        <br />
        <br />
        <span className="title-form">S'inscrire</span>
        <div className="user-name">
          <input
            name="text"
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div className="user-mail">
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="user-password">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="user-newsletter">
          <div>
            <input
              className="signup-checkbox"
              type="checkbox"
              checked={newsletter}
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
          </div>
          <div className="signup-newsletter-text">
            S'inscrire à notre newsletter
          </div>
        </div>

        <p className="conditions-form">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <br />
        <div className="button-submit-form">
          <input type="submit" className="signup-Btn" value="S'inscrire" />
        </div>
      </form>
      <Link to="/login" className="link-inscription">
        <div className="already-signed">
          Tu as déjà un compte ? Connecte-toi
        </div>
      </Link>
      <br />
      <br />
    </div>
  );
};
export default Signup;
