
import { Link } from 'react-router-dom';
export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
    
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',     
            
          }}
        >
          
          
          <div style={linkStyle}>
          <Link className="nav-link text-dark" to="/about">
          About Us
        </Link>
          </div>
          <div style={linkStyle}>
          <Link className="nav-link text-dark" to="/portfolio">
          Portfolio
        </Link>
          </div>
          <div style={linkStyle}>
          <Link className="nav-link text-dark" to="/contact">
          Contact Page
          </Link>
          </div>
          <div style={linkStyle}>
            <a href="#">Resume</a>
          </div>          
        </section>
      </nav>
    );
  }
  