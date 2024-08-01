import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Router from './routes/Router';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app" onClick={handleMenuToggle}>
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Router />
    </div>
  );
}

export default App;
