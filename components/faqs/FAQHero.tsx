import Heading from "../shared/Heading";

function FAQHero() {
  return (
    <section className="relative flex items-center justify-center h-[30dvh] lg:h-[40vh] bg-accent-base/10 overflow-hidden">
      <div className="relative px-md text-center">
        <Heading as="h1" className="mb-sm font-bold text-4xl md:text-5xl">
          Frequently Asked Questions
        </Heading>

        <p className="text-lg text-muted-foreground">
          Find answers to your most common questions
        </p>
      </div>
    </section>
  );
}

export default FAQHero;
