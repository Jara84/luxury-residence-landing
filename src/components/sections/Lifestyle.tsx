import {
  ChefHat,
  CookingPot,
  MapPinned,
  Refrigerator,
  Sofa,
  Sun,
  Trees,
  WashingMachine,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FeatureItem from "../ui/FeatureItem";

export default function Lifestyle() {
  return (
    <Section className="bg-stone-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Lifestyle
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            Designed for Modern Living
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            Every detail of this residence has been carefully renovated to
            deliver comfort, elegance and functionality.
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-stone-900">
              Interior Features
            </h3>

            <div className="space-y-4">
              <FeatureItem icon={CookingPot} title="Built-in Dishwasher" />
              <FeatureItem icon={ChefHat} title="Contemporary Kitchen" />
              <FeatureItem icon={Refrigerator} title="Pantry" />
              <FeatureItem icon={WashingMachine} title="Laundry Room" />
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold text-stone-900">
              Lifestyle
            </h3>

            <div className="space-y-4">
              <FeatureItem icon={MapPinned} title="Prime Location" />
              <FeatureItem icon={Sun} title="Natural Light" />
              <FeatureItem icon={Trees} title="Quiet Residential Area" />
              <FeatureItem icon={Sofa} title="Executive Living" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}