import "./App.css";

import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Introduction from "./components/sections/Introduction";
import Lifestyle from "./components/sections/Lifestyle";
import Gallery from "./components/sections/Gallery";
import Highlights from "./components/sections/Highlights";

function App() {
  return (
    <main className="bg-stone-100">
      <Header />
      <Hero />
      <Introduction />
      <Lifestyle />
      <Gallery />
      <Highlights />
    </main>
  );
}

export default App;