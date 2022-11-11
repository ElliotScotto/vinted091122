import "./App.css";
//import des packages
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
//
//import des fonctions react
import { useState, useEffect } from "react";
//
//import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//import des components
import Header from "./components/Header";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState();
  // const [offers, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Je je trouve un cookie token, ce cookie
  // - Sinon, nulll
  const [token, setToken] = useState(Number(Cookies.get("token")) || 0);

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("userToken");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        //console.log("ici =>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Router>
      <nav>
        <ul>
          <li>
            <Header handleToken={handleToken} />
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}
export default App;
