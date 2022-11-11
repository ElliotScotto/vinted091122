//import fonctions React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import packages
import axios from "axios";
//import Components
import Loading from "../components/Loading";

//
const Login = ({ handleToken }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const fetchToken = async () => {
    try {
      const response = await axios.post("https://localhost:3001/login");
      // console.log("ici =>", response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  fetchToken();

  return isLoading ? (
    <Loading />
  ) : (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // Je fais une requête vers le back

        // Le back me renvoie un token
        // const token = "1234567890";
        handleToken(token);
        // À la fin de cete procédure je suis redirigé vers Home
        navigate("/");
      }}
    >
      <input
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

export default Login;
