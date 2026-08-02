import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";


export default function Highlights() {
  const { t } = useTranslation();
  
  const highlights = [
  {
    title: t("highlights.area.title"),
    description: t("highlights.area.description"),
  },
  {
    title: t("highlights.rooms.title"),
    description: t("highlights.rooms.description"),
  },
  {
    title: t("highlights.view.title"),
    description: t("highlights.view.description"),
  },
  {
    title: t("highlights.design.title"),
    description: t("highlights.design.description"),
  },
];

  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-2">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="border-t border-stone-200 pt-8"
            >
              <h3 className="text-3xl font-medium text-stone-900">
                {item.title}
              </h3>

              <p className="mt-3 text-lg text-stone-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </Container>
    </Section>
  );
}