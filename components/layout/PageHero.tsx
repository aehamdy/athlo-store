import Heading from "../shared/Heading";

type PageHeroProps = {
  title: string;
  description: string;
  image: string;
};

function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative flex items-center justify-center h-[50dvh] md:h-[60dvh] lg:h-[80dvh] overflow-hidden ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `${image}`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative flex flex-col items-center text-white px-4">
        <Heading as="h1" className="font-bold text-4xl md:text-5xl mb-md">
          {title}
        </Heading>

        <p className="text-center text-lg md:text-xl text-gray-300">
          {description}
        </p>
      </div>
    </section>
  );
}

export default PageHero;
