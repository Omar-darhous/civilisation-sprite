/*import download1 from "../assets/images/Cairo Tower/download1.jpg";
import download from "../assets/images/Egyptian Museum/download.jpg";
import download2 from "../assets/images/Khan Khaleeji/download.jpg";
import download3 from "../assets/images/Baron Palace/download.jpg";*/

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const touristPlaces = [
    "Egyptian_Museum",
    "Cairo_Tower",
    "Khan_el-Khalili",
    "Baron_Empain_Palace",
    "Giza_Pyramid_Complex",
    "Abu_Simbel_temples",
    "Luxor_Temple",
    "Bibliotheca_Alexandrina",
  ];

  useEffect(() => {
    const shuffled = touristPlaces.sort(() => 0.5 - Math.random()).slice(0, 4);

    Promise.all(
      shuffled.map((place, index) =>
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${place}`)
          .then((res) => res.json())
          .then((result) => ({
            id: index + 1,
            title: result.title,
            img: result.thumbnail?.source,
          })),
      ),
    ).then((places) => {
      setData(places);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Discover Egypt</h1>
        <p>Where history meets eternity</p>
      </section>

      <section className="cards">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          data.map((item) => (
            <Link to={`/place/${item.title}`} className="card" key={item.id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))
        )}
      </section>
    </>
  );
}
