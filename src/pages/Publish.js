import { useState } from "react";
import axios from "axios";
const Publish = ({ userToken }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("picture", file);
    formData.append("product_name", title);
    formData.append("product_description", description);
    formData.append("product_price", price);
    formData.append("MARQUE", brand);
    formData.append("TAILLE", size);
    formData.append("ETAT", condition);
    formData.append("COULEUR", color);
    formData.append("EMPLACEMENT", city);
    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            Authorization: "Bearer " + userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div className="background-publish-container">
      <form onSubmit={handleSubmit}>
        <div className="publish-title">Vends ton article</div>
        <div className="publish-container1">
          <div className="publish-container1-inner-border">
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
            {/* <input type="submit" value="Ajoute une photo" /> */}
            {/* <div className="publish-result-data-image">{}</div> */}
          </div>
        </div>
        <div className="publish-container2">
          <div className="publish-Title-And-Value">
            <div className="publish-category">Titre</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: Chemise Sézanne verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                value={title}
              />
            </div>
          </div>

          <div className="publish-Title-And-Value">
            <div className="publish-category">Décris ton article</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: porté quelquefois, taille correctement"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                value={description}
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
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
                value={brand}
              />
            </div>
          </div>

          <div className="publish-Title-And-Value">
            <div className="publish-category">Taille</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: L/40/12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
                value={size}
              />
            </div>
          </div>

          <div className="publish-Title-And-Value">
            <div className="publish-category">Couleur</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: Fushia"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
                value={color}
              />
            </div>
          </div>

          <div className="publish-Title-And-Value">
            <div className="publish-category">Etat</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
                value={condition}
              />
            </div>
          </div>

          <div className="publish-Title-And-Value">
            <div className="publish-category">Lieu</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="ex: Paris"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                value={city}
              />
            </div>
          </div>
        </div>

        <div className="publish-container4">
          <div className="publish-Title-And-Value">
            <div className="publish-category">Prix</div>
            <div className="publish-category-value">
              <input
                type="text"
                placeholder="0,00 €"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
                value={price}
              />
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
  );
};

export default Publish;
