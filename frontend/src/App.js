import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Rewards from './pages/Rewards';
import Blog from './pages/Blog';
import About from './pages/About';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Locations />} />
        </Routes>
        <Footer />
        <BackToTopButton />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
