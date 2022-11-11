//import fonctions React
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
// import Cookies from "js-cookie";
//import components
// import Loading from "../components/Loading";

const Signup = ({ handleTocken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();
  //
  // const [isLoading, setIsLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        // "https://site--backend-vinted--cpx4vl465khg.code.run/users/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      console.log("REPONSE DU SERVEUR ICI =>", response.data);
      // setIsLoading(false);
      handleTocken(response.data.token);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container-form">
      <form className="inscription-form" onSubmit={handleSubmit}>
        <span className="title-form">S'inscrire</span>
        <div className="user-name">
          <input
            name="text"
            type="text"
            // state={name}
            // setState={setName}
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
            // state={email}
            // setState={setEmail}
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
            // state={password}
            // setState={setPassword}
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="user-newsletter">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          {/* S'inscrire à notre newsletter */}
        </div>
      </form>

      <p className="conditions-form">
        En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions
        et Politique de Confidentialité de Vinted. Je confirme avoir au moins 18
        ans.
      </p>
      <br />
      <input type="submit" className="signup-Btn" value="S'inscrire" />
      <Link to="/login" className="link-inscription">
        <div className="already-signed">
          Tu as déjà un compte ? Connecte-toi
        </div>
      </Link>
    </div>
  );
};
export default Signup;
