// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css'
import './styles/Header.css'


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <section className='header'>
    <Header>    </Header>
    <Nav />    
    </section>
    <main className="mx-3">
    <Outlet />
    </main>
    <hr />
    <Footer />      
    </>
  );
}

export default App;
