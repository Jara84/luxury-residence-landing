import "./App.css";

import Hero from "./components/sections/Hero";
import Header from "./components/sections/Header";
import Introduction from "./components/sections/Introduction";
import Gallery from "./components/sections/Gallery";
import Highlights from "./components/sections/Highlights";

function App() {
  return (
    <main className="bg-stone-100">
      <Header />
      <Hero />
      <Introduction />
      <Gallery />
      <Highlights />
    </main>
  );
}

export default App;