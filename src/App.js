import "./App.css";
//
//import des packages
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//
//import des fonctions react
import { useState, useEffect } from "react";
//
//import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

//import des components
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log("ici =>", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <Router>
      <nav>
        <ul>
          <li>
            <Header />
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}
export default App;
