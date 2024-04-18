// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import Swiper styles
import 'swiper/css';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import SignIn from './pages/SignIn';

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <Router>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/*" element={
        <>
          <Header scroll={scroll} />
          <Banner />
          <Main />
          <Footer />
          <BackToTopBtn scroll={scroll} />
        </>
      } />
    </Routes>
  </Router>

  );
}

export default App;
