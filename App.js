import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Footer from './Component/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div className="App2">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/home" Component={Menu} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
