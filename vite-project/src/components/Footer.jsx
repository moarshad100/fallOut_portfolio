export default function Footer() {
    const linkStyle = { border: '1px black', padding: '5px' };
    
  
    return (
      <nav >
        
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap:'10px',
            
            
          }}
        >
            <div>
                github 
            </div>
            <div>
                email 
            </div>
            
            
     
        </section>
      </nav>
    );
  }