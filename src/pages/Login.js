//import fonctions React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//import packages
import axios from "axios";
//import Components
// import Loading from "../components/Loading";

//
const Login = ({ handleToken }) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_VINTED_REACTEUR_URL}/user/login`,
        {
          email: email,
          password: password,
        }
      );
      console.log(
        "REPONSE DU SERVEUR pour la page LOGIN ici =>",
        response.data
      );
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-form">
      <form
        className="inscription-form"
        onSubmit={handleSubmit}
        // Je fais une requête vers le back
        // Le back me renvoie un token
        // const token = "1234567890";
        // À la fin de cete procédure je suis redirigé vers Home
      >
        <br />
        <br />
        <span className="title-form">Se connecter</span>
        <div className="user-mail">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            x
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
        <Link to="/" className="link-inscription btn-with-link">
          <input className="login-Btn" type="submit" value="Connexion" />
        </Link>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Login;
