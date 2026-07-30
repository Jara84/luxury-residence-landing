import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Introduction() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Residencia privada
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            Un espacio diseñado para vivir Medellín desde una nueva perspectiva
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Una residencia remodelada con acabados de lujo,
            donde la arquitectura contemporánea, la iluminación natural
            y la tranquilidad se encuentran en un lugar privilegiado.
          </p>

        </div>


        <div className="mt-16 grid gap-8 text-center md:grid-cols-3">

          <div>
            <p className="text-4xl font-semibold text-stone-900">
              144 m²
            </p>
            <p className="mt-2 text-stone-500">
              Área privada
            </p>
          </div>


          <div>
            <p className="text-4xl font-semibold text-stone-900">
              3
            </p>
            <p className="mt-2 text-stone-500">
              Habitaciones
            </p>
          </div>


          <div>
            <p className="text-4xl font-semibold text-stone-900">
              Medellín
            </p>
            <p className="mt-2 text-stone-500">
              Cerro Nutibara
            </p>
          </div>

        </div>

      </Container>
    </Section>
  );
}