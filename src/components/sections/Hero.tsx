import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-stone-500">
            Medellín · Cerro Nutibara
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-900 md:text-7xl">
            Residencia El Cerro
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-stone-600 md:text-xl">
            Un apartamento remodelado con acabados de lujo,
            diseñado para vivir una experiencia única en Medellín.
          </p>

          <div className="mt-10">
            <Button>
              Agendar visita privada
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}