import { useEffect } from "react";

import "./App.css";

import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Introduction from "./components/sections/Introduction";
import Lifestyle from "./components/sections/Lifestyle";
import SignatureFeatures from "./components/sections/SignatureFeatures";
import Gallery from "./components/sections/Gallery";
import Views from "./components/sections/Views";
import Parking from "./components/sections/Parking";
import Building from "./components/sections/Building";
import TheLocation from "./components/sections/TheLocation";
import Specs from "./components/sections/Specs";
import PrivateViewing from "./components/sections/PrivateViewing";
import Footer from "./components/layout/Footer";

import { initAnalytics } from "./lib/analytics";

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <main id="top" className="bg-stone-100">
      <Header />
      <Hero />
      <Introduction />
      <Lifestyle />
      <SignatureFeatures />
      <Gallery />
      <Views />
      <Parking />
      <Building />
      <TheLocation />
      <Specs />
      <PrivateViewing />
      <Footer />
    </main>
  );
}

export default App;
