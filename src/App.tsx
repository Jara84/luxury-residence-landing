import "./App.css";

import Hero from "./components/sections/Hero";
import Header from "./components/sections/Header";
import Introduction from "./components/sections/Introduction";
import Gallery from "./components/sections/Gallery";

function App() {
  return (
    <main className="bg-stone-100">
      <Header />
      <Hero />
      <Introduction />
      <Gallery />
    </main>
  );
}

export default App;