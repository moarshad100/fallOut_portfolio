import DownloadIcon from "@mui/icons-material/Download";
import myResume from "../assets/myresume.pdf";

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <hr />
      <div>
        <p style={{ display: "flex", fontWeight: "Bold" }}>
          Download my resume
          <a href={myResume} download="My_Resume.pdf">
            <DownloadIcon
              onMouseOver={(event) => {
                event.target.style.background = "rgba(50,50,255,0.75)";
                event.target.style.borderRadius = "5px";
              }}
              onMouseLeave={(event) => {
                event.target.style.background = "";
                event.target.style.borderRadius = "0px";
              }}
              sx={{ color: "white" }}
            />
          </a>
        </p>
      </div>
      <section className="resume">
        <section>
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section>
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL,sequelize</li>
            <li>MongoDB,Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default Resume;
