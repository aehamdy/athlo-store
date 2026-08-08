import Heading from "../shared/Heading";

type PageHeroProps = {
  title: string;
  description?: string;
};

function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative flex items-center justify-center h-[30dvh] lg:h-[40dvh] overflow-hidden ">
      <div className="page-hero absolute inset-0 w-full h-full" />

      <div className="relative flex flex-col items-center text-white px-4">
        <Heading
          as="h1"
          className="mb-md font-bold text-4xl md:text-5xl text-foreground"
        >
          {title}
        </Heading>

        <p className="text-center text-sm md:text-md lg:text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}

export default PageHero;
