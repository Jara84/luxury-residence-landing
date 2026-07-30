import Container from "../ui/Container";
import Button from "../ui/Button";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
  <section
    className="relative min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="absolute inset-0 bg-black/45" />

    <Container>
      <div className="relative flex min-h-screen flex-col items-center justify-center text-center text-white">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-stone-200">
          Medellín · Cerro Nutibara
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          Residencia El Cerro
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-stone-200 md:text-xl">
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
  </section>
);
}