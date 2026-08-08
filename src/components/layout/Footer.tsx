import { MapPin, MessageCircle } from "lucide-react";

import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-20">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Marca */}
          <div>
            <h3 className="text-3xl font-medium tracking-tight text-stone-900">
              El Cerro Boutique Residence
            </h3>

            <div className="mt-4 flex items-center gap-2 text-stone-500">
              <MapPin className="h-4 w-4" />

              <span>Medellín · Colombia</span>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-4 text-stone-600">
            <a
              href="https://wa.me/573002276016"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-stone-900"
            >
              <MessageCircle className="h-5 w-5" />

              <span>Contact via WhatsApp</span>
            </a>

          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8 text-sm text-stone-400">
          © 2026 · El Cerro Boutique Residence
        </div>
      </Container>
    </footer>
  );
}