import endpoints from "@/lib/endpoints";
import Heading from "../shared/Heading";
import Link from "next/link";

function FAQSection() {
  return (
    <section className="section-spacing bg-surface">
      <div className="flex flex-col items-center gap-md">
        <div className="flex flex-col items-center gap-xs">
          <Heading className="text-2xl font-bold">Have Questions?</Heading>

          <p className="w-full md:w-3/4 text-center text-muted-foreground">
            Check out our FAQ page for quick answers to the most commonly asked
            questions.
          </p>
        </div>

        <Link
          href={endpoints.faq}
          className="w-fit p-sm text-center text-xs text-foreground hover:text-primary-dark bg-base hover:bg-accent-soft active:bg-accent-strong rounded-sm hover:shadow-sm active:shadow-none transition-colors duration-normal"
        >
          View FAQ
        </Link>
      </div>
    </section>
  );
}

export default FAQSection;
