import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        <div className="text-lg font-medium tracking-wide text-white">
          Residencia El Cerro
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white md:flex">
          <a href="#residencia">
            Residencia
          </a>

          <a href="#galeria">
            Galería
          </a>

          <a href="#ubicacion">
            Ubicación
          </a>
        </nav>

        <Button>
          Agendar visita
        </Button>

      </div>
    </header>
  );
}