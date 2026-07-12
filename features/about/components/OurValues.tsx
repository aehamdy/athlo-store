import ValueCard from "@/features/about/components/ValueCard";
import { useTranslations } from "next-intl";

// const values = [
//   {
//     id: 1,
//     icon: "Zap" as const,
//     title: "Performance",
//     description: "We design every product to maximize athletic performance",
//   },
//   {
//     id: 2,
//     icon: "Award" as const,
//     title: "Quality",
//     description: "We use only the finest materials and technologies available",
//   },
//   {
//     id: 3,
//     icon: "Heart" as const,
//     title: "Passion",
//     description: "We are athletes designing for athletes",
//   },
//   {
//     id: 4,
//     icon: "Shield" as const,
//     title: "Sustainability",
//     description: "Committed to environmentally responsible practices",
//   },
// ] as const;

const values = [
  {
    id: 1,
    icon: "Zap" as const,
    title: "performance",
    description: "performanceDescription",
  },
  {
    id: 2,
    icon: "Award" as const,
    title: "quality",
    description: "qualityDescription",
  },
  {
    id: 3,
    icon: "Heart" as const,
    title: "passion",
    description: "passionDescription",
  },
  {
    id: 4,
    icon: "Shield" as const,
    title: "sustainability",
    description: "sustainabilityDescription",
  },
] as const;

function OurValues() {
  const t = useTranslations("aboutPage.values");

  return (
    <section className="section-spacing bg-surface">
      <div className="flex flex-col items-center gap-5xl px-md">
        <h2 className="font-bold text-3xl  text-foreground text-center">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3xl">
          {values.map((value) => (
            <ValueCard
              key={value.id}
              value={{
                ...value,
                title: t(value.title),
                description: t(value.description),
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;
