import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;