import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/RareSites.css";

function RareSites() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRareSites = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=Hidden archaeological sites in Egypt OR Lesser-known temples in Egypt OR Ancient ruins in Egypt OR Unusual places in Egypt&gsrlimit=10&prop=pageimages|extracts&exintro&explaintext&piprop=thumbnail&pithumbsize=300&format=json&origin=*`,
      );

      const data = await res.json();

      if (data.query) {
        const pages = Object.values(data.query.pages);

        // فلترة إضافية عشان نتأكد إن فيها كلمة Egypt
        const egyptOnly = pages.filter((place) =>
          place.extract?.toLowerCase().includes("egypt"),
        );

        setPlaces(egyptOnly);
      } else {
        setPlaces([]);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchRareSites();
  }, []);

  return (
    <div className="rare-page">
      <Navbar />

      <div className="rare-container">
        <h1>Rare & Hidden Sites in Egypt</h1>

        {loading && <h2>Loading...</h2>}

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

export default RareSites;
