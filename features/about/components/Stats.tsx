import StatCard from "@/features/about/components/StatCard";

const stats = [
  { id: 1, value: "50K+", label: "happyCustomers" },
  { id: 2, value: "100+", label: "products" },
  { id: 3, value: "25+", label: "countries" },
  { id: 4, value: "5", label: "yearsExperience" },
];

function Stats() {
  return (
    <section className="section-spacing bg-surface">
      <div className="mx-auto px-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3xl">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              stat={{
                ...stat,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
