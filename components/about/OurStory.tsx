import appConfig from "@/config/appConfig";
import Image from "next/image";

function OurStory() {
  return (
    <section className="section-spacing bg-base">
      <div className="mx-auto px-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5xl items-center">
          <div>
            <h2 className="text-3xl font-bold mb-xl">Our Story</h2>

            <div className="space-y-md text-muted-foreground">
              <p>
                <span className="font-bold text-accent-base">
                  {appConfig.name}
                </span>{" "}
                was founded in {appConfig.foundedIn} by a group of passionate
                athletes who saw a gap in the market for high-quality,
                affordable sportswear.
              </p>

              <p>
                We started in a small garage with a big dream: to create
                sportswear that combines performance, style, and comfort. Today,
                we serve athletes worldwide.
              </p>

              <p>
                Every piece we design is inspired by real athlete&apos;s needs,
                and we rigorously test them to ensure they meet our high
                standards.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800"
              alt="Our team"
              width={800}
              height={600}
              className="rounded-2xl w-full shadow-lg"
            />
            <div className="absolute -bottom-xl start-md lg:-start-xl p-md md:p-xl text-primary-dark bg-accent-base shadow-lg rounded-xl">
              <p className="text-4xl font-bold">2020</p>
              <p className="text-sm">Year Founded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
