import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/PlaceDetails.css";

export default function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // نجيب البيانات الأساسية
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlace(data);
      });

    // نجيب صور إضافية
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&titles=${id}&prop=images&format=json&origin=*`,
    )
      .then((res) => res.json())
      .then((data) => {
        const pages = data.query.pages;
        const page = Object.values(pages)[0];

        if (page.images) {
          const imageTitles = page.images
            .filter(
              (img) => img.title.endsWith(".jpg") || img.title.endsWith(".png"),
            )
            .slice(0, 4)
            .map((img) => img.title);

          Promise.all(
            imageTitles.map((title) =>
              fetch(
                `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=imageinfo&iiprop=url&format=json&origin=*`,
              )
                .then((res) => res.json())
                .then((imgData) => {
                  const imgPage = Object.values(imgData.query.pages)[0];
                  return imgPage.imageinfo[0].url;
                }),
            ),
          ).then((urls) => {
            setImages(urls);
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      });
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (!place) return <h2>Not Found</h2>;

  return (
    <>
      <Navbar />

      <div className="details-container">
        <h1>{place.title}</h1>

        {place.thumbnail && (
          <img
            src={place.thumbnail.source}
            alt={place.title}
            className="main-image"
          />
        )}

        <p className="description">{place.extract}</p>

        <div className="gallery">
          {images.map((img, index) => (
            <img key={index} src={img} alt="place" />
          ))}
        </div>
      </div>
    </>
  );
}
