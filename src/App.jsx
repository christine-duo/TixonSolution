import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";
import { NAV_SERVICES } from "./data/site";

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles = {
      "/": "TixonSolution - Custom Software & Business Solutions",
      "/industries": "Industries - TixonSolution",
      "/about": "About - TixonSolution",
      "/privacy-policy": "Privacy Policy - TixonSolution",
      "/terms-of-service": "Terms of Service - TixonSolution",
    };
    const serviceTitle = NAV_SERVICES.find(
      (item) => item.to === pathname
    );
    document.title =
      titles[pathname] ||
      (pathname.startsWith("/services/")
        ? `${serviceTitle?.label || "Service"} - TixonSolution`
        : "TixonSolution");
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <DocumentTitle />
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
