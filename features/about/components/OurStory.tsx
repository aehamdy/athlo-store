import appConfig from "@/config/appConfig";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Heading from "@/components/shared/Heading";

function OurStory() {
  const t = useTranslations("aboutPage.ourStory");

  return (
    <section className="section-spacing bg-base">
      <div className="mx-auto px-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5xl items-center">
          <div>
            <Heading as="h2" className="text-3xl font-bold mb-xl">
              {t("title")}
            </Heading>

            <div className="space-y-md text-muted-foreground">
              {/* <p>
                <span className="font-bold text-accent-base">
                  {appConfig.name}
                </span>{" "}
                was founded in{" "}
                <span className="font-bold">{appConfig.foundedIn}</span> by a
                group of passionate athletes who saw a gap in the market for
                high-quality, affordable sportswear.
              </p> */}
              <p>
                {t.rich("paragraph1", {
                  name: () => (
                    <span className="font-bold text-accent-base">
                      {appConfig.name}
                    </span>
                  ),
                  year: () => (
                    <span className="font-semibold">{appConfig.foundedIn}</span>
                  ),
                })}
              </p>

              <p>{t("paragraph2")}</p>

              <p>{t("paragraph3")}</p>
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
              <p className="text-4xl font-bold">{appConfig.foundedIn}</p>
              <p className="text-sm">{t("yearFounded")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
