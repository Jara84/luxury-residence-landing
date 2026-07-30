import "./App.css";

import Hero from "./components/sections/Hero";
import Header from "./components/sections/Header";
import Introduction from "./components/sections/Introduction";

function App() {
  return (
    <main className="bg-stone-100">
      <Header />
      <Hero />
      <Introduction />
    </main>
  );
}

export default App;