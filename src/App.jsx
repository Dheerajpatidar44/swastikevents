import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import WorkInProgressPopup from './components/WorkInProgressPopup';

function HomePage() {
  return (
    <div className="bg-cream-light min-h-screen">
      <WorkInProgressPopup />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <VideoSection />
        <Gallery />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

