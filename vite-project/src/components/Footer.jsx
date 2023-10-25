import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
    const linkStyle = { border: '1px black', padding: '5px',display:'flex',gap:'10px',justifyContent:'center',alignItems:'center'};
    
  
    return (
    <section style={linkStyle}>
      <a href="https://github.com/moarshad100">
      <h1><BsGithub /></h1>
      </a>
      <a href="#">
      <h1><AiOutlineMail /></h1>
      </a>
      <a href="https://www.linkedin.com/in/mohammed-arshad-mohamed-jamal-3983a9133/">
        <h1><BsLinkedin /></h1>
      </a>
    </section>     
    );
  }