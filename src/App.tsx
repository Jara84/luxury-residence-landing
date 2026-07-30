import "./App.css";

import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Section from "./components/ui/Section";

function App() {
  return (
    <main className="min-h-screen bg-stone-100">
      <Section>
        <Container>
          <h1 className="text-6xl font-bold text-stone-900">
            Residencia El Cerro
          </h1>

          <p className="mt-4 text-xl text-stone-600">
            Luxury Residence Landing
          </p>

          <div className="mt-10">
            <Button>Agendar visita privada</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default App;