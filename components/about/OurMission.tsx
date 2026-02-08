import Icon from "../shared/Icon";

function OurMission() {
  return (
    <section className="section-spacing bg-base">
      <div className="flex flex-col items-center gap-xl">
        <div className="flex flex-col items-center gap-sm">
          <Icon name="Target" size={24} className="text-accent-base" />

          <h2 className="font-bold text-3xl">Our Mission</h2>
        </div>

        <p className="w-full md:w-3/4 lg:w-1/2 px-sm lg:px-0 text-center font-normal text-md text-muted-foreground">
          Our mission is to empower every athlete to achieve their best
          performance by providing innovative, high-quality sportswear. We are
          committed to continuous innovation, sustainability, and serving our
          community of athletes.
        </p>
      </div>
    </section>
  );
}

export default OurMission;
