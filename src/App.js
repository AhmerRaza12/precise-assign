import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

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
    <div className="App">
      <Navbar />
      <Banner />

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
  );
}

export default App;
