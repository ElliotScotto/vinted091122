import { useState } from "react";
import axios from "axios";
const Publish = ({ userToken }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");

  return (
    <div className="background-publish-container">
      <div className="publish-title">Vends ton article</div>
      <div className="publish-container1">
        <div className="publish-container1-inner-border">
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData();
              formData.append("files", file);
              formData.append("title", title);

              try {
                const response = await axios.post(
                  "http://localhost:4000/api/offer/publish",
                  formData,
                  {
                    headers: {
                      Authorization: "Bearer " + userToken,
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );

                alert(JSON.stringify(response.data));
              } catch (err) {
                if (err.response.status === 500) {
                  console.error("An error occurred");
                } else {
                  console.error(err.response.data.msg);
                }
              }
            }}
          >
            <input
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              value={title}
            />
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
      <div className="publish-container2">
        <div className="publish-Title-And-Value">
          <div className="publish-category">Titre</div>

          <div className="publish-category-value">
            <input type="text" placeholder="ex: Chemise Sézanne verte" />
          </div>
        </div>

        <div className="publish-Title-And-Value">
          <div className="publish-category">Décris ton article</div>
          <div className="publish-category-value">
            <input
              type="text"
              placeholder="ex: porté quelquefois, taille correctement"
            />
          </div>
        </div>
      </div>

      <div className="publish-container3">
        <div className="publish-Title-And-Value">
          <div className="publish-category">Marque</div>
          <div className="publish-category-value">
            <input type="text" placeholder="ex: Zara" />
          </div>
        </div>

        <div className="publish-Title-And-Value">
          <div className="publish-category">Taille</div>
          <div className="publish-category-value">
            <input type="text" placeholder="ex: L/40/12" />
          </div>
        </div>

        <div className="publish-Title-And-Value">
          <div className="publish-category">Couleur</div>
          <div className="publish-category-value">
            <input type="text" placeholder="ex: Fushia" />
          </div>
        </div>

        <div className="publish-Title-And-Value">
          <div className="publish-category">Etat</div>
          <div className="publish-category-value">
            <input type="text" placeholder="Neuf avec étiquette" />
          </div>
        </div>

        <div className="publish-Title-And-Value">
          <div className="publish-category">Lieu</div>
          <div className="publish-category-value">
            <input type="text" placeholder="ex: Paris" />
          </div>
        </div>
      </div>

      <div className="publish-container4">
        <div className="publish-Title-And-Value">
          <div className="publish-category">Prix</div>
          <div className="publish-category-value">
            <input type="text" placeholder="0,00 €" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
