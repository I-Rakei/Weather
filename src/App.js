import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Page1 from './components/Page1.js';
import MyNavbar from './styleComponents/Navbar';
import Footer from './styleComponents/footer.js';

function App() {
  return (
    <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
