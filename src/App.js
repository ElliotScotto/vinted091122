import "./App.css";

//import des packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

//
//import des fonctions react
import { useState } from "react";
//
//import des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

//import des components
import Header from "./components/Header";
// import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState();
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(500);
  const [sort, setSort] = useState("");

  // Cette fonction permet de stocker le token dans le state et dans les cookies OU supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      setUserToken(token);
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      setUserToken(null);
      Cookies.remove("userToken");
    }
  };

  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <Header
                search={search}
                setSearch={setSearch}
                handleToken={handleToken}
                userToken={userToken}
                sort={sort}
                priceMin={priceMin}
                priceMax={priceMax}
                setSort={setSort}
                setPriceMin={setPriceMin}
                setPriceMax={setPriceMax}
              />
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                setData={setData}
                search={search}
                sort={sort}
                setSort={setSort}
                priceMin={priceMin}
                setPriceMin={setPriceMin}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup handleToken={handleToken} />}
          />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route
            path="/offer/publish"
            element={
              <Publish handleToken={handleToken} userToken={userToken} />
            }
          />
          <Route
            path="/pay"
            element={
              <Payment
                handleToken={handleToken}
                userToken={userToken}
                data={data}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
