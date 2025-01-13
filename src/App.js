import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Order from './pages/Order';
import InnerPage from './pages/CourseWork';
import Terms from './pages/Terms';
import Footer from './components/Footer';
import RefundPolicy from './pages/RefundPolicy';
import Dissertation from './pages/Dissertation';
import Essay from './pages/Essay';
import Thesis from './pages/Thesis';
function App() {
  useEffect(() => {
    // Tawk.to Script Integration
    const tawkScript = document.createElement('script');
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/677cb36faf5bfec1dbe7a91c/1igvhprpg';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);
  }, []);

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
       
        <Route path="/" element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/coursework' element={<InnerPage/>} />
        <Route path='/dissertation' element={<Dissertation/>} /> 
        <Route path='/essay' element={<Essay/>} />
        <Route path='/thesis' element={<Thesis/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/refund-policy" element={<RefundPolicy/>} />

      </Routes>
      <Footer/>


      {/* WhatsApp Button */}
      <a
        href="https://wa.me/442039657942?text=."
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: '60px', height: '60px' }}
        />
      </a>
    </div>
    </Router>
  );
}

export default App;
