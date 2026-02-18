import Navbar from "../components/Navbar";
import "../styles/Research.css";

export default function Research() {
  return (
    <>
      <Navbar />

      <section className="research-hero">
        <h1>𓂀 Egyptian Research Library</h1>
        <p>Explore historical studies about Egypt's greatest landmarks</p>
      </section>

      <section className="research-container">
        {researchData.map((item, index) => (
          <div className="research-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="research-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank">
                Read Full Research
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

const researchData = [
  {
    title: "The Great Pyramids of Giza",
    image: "/src/assets/images/Pyramids/download (2).jpg",
    description:
      "The pyramids of Giza are monumental tombs built during the Fourth Dynasty. They reflect the advanced engineering of ancient Egypt.",
    link: "https://en.wikipedia.org/wiki/Giza_pyramid_complex",
  },
  {
    title: "The Egyptian Museum",
    image: "/src/assets/images/Egyptian Museum/download.jpg",
    description:
      "The Egyptian Museum in Cairo houses the world's largest collection of Pharaonic antiquities.",
    link: "https://en.wikipedia.org/wiki/Egyptian_Museum",
  },
  {
    title: "Khan El Khalili Market",
    image: "/src/assets/images/Khan Khaleeji/download.jpg",
    description:
      "Khan El Khalili is one of the oldest bazaars in the Middle East and a cultural symbol of Cairo.",
    link: "https://en.wikipedia.org/wiki/Khan_el-Khalili",
  },
];
