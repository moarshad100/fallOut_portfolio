import Project from "../components/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/Project1.png";
import image2 from "../assets/Project2.png";
function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <section className="row">
        <section className="col-md-5">
          <Project
            image={image1}
            title={"Storio"}
            href={"https://github.com/higgdan/ADSF-Project"}
          />
        </section>
        <section className="col-md-5">
          <Project
            image={image2}
            title={"Entertainment_review"}
            href={"https://github.com/JesseCh3n/entertainment_review"}
          />
        </section>
      </section>
    </>
  );
}

export default Portfolio;
