import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import GlobalCart from './components/GlobalCart';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Breakfast from './pages/Breakfast';
import Dinner from './pages/Dinner';
import Rewards from './pages/Rewards';
import Blog from './pages/Blog';
import About from './pages/About';
import Locations from './pages/Locations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/dinner" element={<Dinner />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Locations />} />
          </Routes>
          <Footer />
          <BackToTopButton />
          <GlobalCart />
          <Toaster position="top-right" />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
