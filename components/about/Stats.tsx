import StatCard from "@/features/about/components/StatCard";

const stats = [
  { id: 1, value: "50K+", label: "Happy Customers" },
  { id: 2, value: "100+", label: "Products" },
  { id: 3, value: "25+", label: "Countries" },
  { id: 4, value: "5", label: "Years Experience" },
];

function Stats() {
  return (
    <section className="section-spacing bg-surface">
      <div className="mx-auto px-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3xl">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
