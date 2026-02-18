import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Tourism.css";

function Tourism() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategory = async (category) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${category}&gsrlimit=10&prop=pageimages|extracts&exintro&explaintext&piprop=thumbnail&pithumbsize=300&format=json&origin=*`,
      );

      const data = await res.json();

      if (data.query) {
        const pages = Object.values(data.query.pages);
        setPlaces(pages);
      } else {
        setPlaces([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="tourism-page">
      <Navbar />

      <div className="tourism-container">
        <h1>Tourism in Egypt</h1>

        {/* Categories */}
        <div className="categories">
          <button onClick={() => fetchCategory("Mosques in Egypt")}>
            Religious
          </button>

          <button onClick={() => fetchCategory("Deserts in Egypt")}>
            Safari
          </button>

          <button onClick={() => fetchCategory("Museums in Egypt")}>
            Cultural
          </button>

          <button onClick={() => fetchCategory("Beaches in Egypt")}>
            Beachy
          </button>
        </div>

        {/* Loading */}
        {loading && <h2>Loading...</h2>}

        {/* Results */}
        <div className="results-grid">
          {places.map((place) => (
            <div key={place.pageid} className="result-card">
              {place.thumbnail && (
                <img src={place.thumbnail.source} alt={place.title} />
              )}

              <h3>{place.title}</h3>

              <p>
                {place.extract
                  ? place.extract.substring(0, 120) + "..."
                  : "No description available."}
              </p>

              <a
                href={`https://en.wikipedia.org/?curid=${place.pageid}`}
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tourism;
