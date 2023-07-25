import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Book from './pages/book/book';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className='App'>
    <Router >
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/book" element={<Book />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
    </div>

  );
}

export default App;
