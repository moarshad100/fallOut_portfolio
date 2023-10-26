
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
          <Link className="nav-link" to="/about">
          About-Me
        </Link>
          </div>
          <div style={linkStyle}>
          <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
          </div>
          <div style={linkStyle}>
          <Link className="nav-link" to="/contact">
          Contact
          </Link>
          </div>
          <div style={linkStyle}>
          <Link className="nav-link" to="/resume">
          Resume
          </Link>
          </div>          
        </section>
      </nav>
    );
  }
  