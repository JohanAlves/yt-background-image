import "./App.css";
import ImgHero from "./img/image.jpg";

function App() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${ImgHero})` }}>
      <div className="content">
        <h1>Be Creative.</h1>
        <p>
          {" "}
          Get ready to transform your React applications into visually stunning
          experiences.
        </p>
        <a href="#">Start Now</a>
      </div>
    </section>
  );
}

export default App;
