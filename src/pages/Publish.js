import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Publish = ({ userToken }) => {
  const [file, setFile] = useState({});
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);
  const [exchange, setExchange] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("picture", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("condition", condition);
    formData.append("color", color);
    formData.append("city", city);
    try {
      console.log(userToken);

      const response = await axios.post(
        `${process.env.REACT_APP_VINTED_REACTEUR_URL}/offer/publish`,
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err.response);
    }
  };

  return userToken ? (
    <div className="background-publish-container">
      <form onSubmit={handleSubmit}>
        <div className="publish-title">Vends ton article</div>
        <div className="publish-container1">
          <div className="publish-container1-inner-border">
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
                setPreview(URL.createObjectURL(event.target.files[0]));
              }}
            />
            {/* <input type="submit" value="Ajoute une photo" /> */}
            <div className="publish-result-data-image">
              <img src={preview} alt="preview" width={100} height={100} />
            </div>
            <div
              className="delete-img-upload"
              onClick={() => {
                setPreview("");
                // setFile("");
              }}
            >
              X
            </div>
          </div>
        </div>
        <div className="publish-container2">
          <div className="publish-Title-And-Value">
            <div className="publish-category">Titre</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: Chemise Sézanne verte"
                value={title}
                onChange={(event) => {
                  const value = event.target.value;
                  setTitle(value);
                }}
              />
            </div>
          </div>
          <div className="publish-Title-And-Value">
            <div className="publish-category">Décris ton article</div>
            <div className="publish-category-value">
              <textarea
                type="text"
                cols="65"
                rows="2"
                placeholder="ex: porté quelquefois, taille correctement"
                value={description}
                onChange={(event) => {
                  const value = event.target.value;
                  setDescription(value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="publish-container3">
          <div className="publish-Title-And-Value">
            <div className="publish-category">Marque</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: Zara"
                value={brand}
                onChange={(event) => {
                  const value = event.target.value;
                  setBrand(value);
                }}
              />
            </div>
          </div>
          <div className="publish-Title-And-Value">
            <div className="publish-category">Taille</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: L/40/12"
                value={size}
                onChange={(event) => {
                  const value = event.target.value;
                  setSize(value);
                }}
              />
            </div>
          </div>
          <div className="publish-Title-And-Value">
            <div className="publish-category">Couleur</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: Fushia"
                value={color}
                onChange={(event) => {
                  const value = event.target.value;
                  setColor(value);
                }}
              />
            </div>
          </div>
          <div className="publish-Title-And-Value">
            <div className="publish-category">Etat</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="Neuf avec étiquette"
                value={condition}
                onChange={(event) => {
                  const value = event.target.value;
                  setCondition(value);
                }}
              />
            </div>
          </div>
          <div className="publish-Title-And-Value">
            <div className="publish-category">Lieu</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: Paris"
                value={city}
                onChange={(event) => {
                  const value = event.target.value;
                  setCity(value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="publish-container4">
          <div className="publish-Title-And-Value">
            <div className="publish-category">Prix</div>

            <div className="publish-category-value price">
              <div className="price-type">
                <input
                  type="text"
                  placeholder=" €"
                  value={price}
                  onChange={(event) => {
                    const value = event.target.value;
                    setPrice(value);
                  }}
                />
              </div>
              <div className="exchange">
                <input
                  type="checkbox"
                  name="exchange"
                  value={exchange}
                  onChange={() => setExchange(!exchange)}
                />
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </div>
        </div>
        <input
          type="submit"
          className="button-submit-PublishOffer"
          value="Ajouter"
          onClick={handleSubmit}
        />
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
