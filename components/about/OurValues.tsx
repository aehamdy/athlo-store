import ValueCard from "@/features/about/components/ValueCard";

const values = [
  {
    id: 1,
    icon: "Zap" as const,
    title: "Performance",
    description: "We design every product to maximize athletic performance",
  },
  {
    id: 2,
    icon: "Award" as const,
    title: "Quality",
    description: "We use only the finest materials and technologies available",
  },
  {
    id: 3,
    icon: "Heart" as const,
    title: "Passion",
    description: "We are athletes designing for athletes",
  },
  {
    id: 4,
    icon: "Shield" as const,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices",
  },
] as const;

function OurValues() {
  return (
    <section className="section-spacing bg-surface">
      <div className="flex flex-col items-center gap-5xl px-md">
        <h2 className="font-bold text-3xl text-center">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3xl">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;
