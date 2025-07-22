import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import QnASection from "./QnASection";
import CoursesSection from "./CoursesSection";
import OfferingsSection from "./OfferingsSection";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";
import TermsConditions from "./TermsConditions";
import ContactModal from "./ContactModal";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLayout({ onContactClick, isContactOpen, closeContact }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar onContactClick={onContactClick} />
      <Outlet />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
}

function Home({ onEnrollClick }) {
  return (
    <>
      <HeroSection />
      <CoursesSection onEnrollClick={onEnrollClick} />
      <OfferingsSection onEnrollClick={onEnrollClick} />
      <QnASection />
    </>
  );
}

function App() {
  const [isContactOpen, setContactOpen] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout onContactClick={() => setContactOpen(true)} isContactOpen={isContactOpen} closeContact={() => setContactOpen(false)} />}>
          <Route path="/" element={<Home onEnrollClick={() => setContactOpen(true)} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
