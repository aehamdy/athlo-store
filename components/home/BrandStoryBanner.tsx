import { Button } from "../ui/button";

function BrandStoryBanner() {
  return (
    <section className="py-20 bg-linear-to-r from-accent-base/10 to-accent-base/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate Your Performance
        </h2>

        <p className="text-muted-foreground mx-auto mb-8">
          We craft high-performance sportswear that helps you achieve your best.
          From the gym to the street, our products are designed for athletes who
          demand excellence.
        </p>

        <div className="w-fit mx-auto">
          <Button variant="plain" className="main-button">
            Learn Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BrandStoryBanner;
