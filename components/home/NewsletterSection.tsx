import NewsletterForm from "../forms/NewsletterForm";
import Heading from "../shared/Heading";

type NewsletterSectionProps = {
  variant: "default" | "compact";
};

function NewsletterSection({ variant = "default" }: NewsletterSectionProps) {
  return (
    <div
      className={`flex flex-col gap-md ${variant === "default" ? "items-center w-4/5 md:w-2/4 lg:w-2/5 mx-auto" : "items-start"}`}
    >
      {/* Newsletter Header and Paragraph */}
      <div
        className={`flex flex-col ${variant === "default" ? "items-center" : "items-start"} gap-sm`}
      >
        <Heading
          as="h3"
          className={`font-semibold text-foreground ${variant === "default" ? "font-bold text-2xl" : ""}`}
        >
          Newsletter
        </Heading>

        <p
          className={`${variant === "default" ? "text-muted-foreground" : ""}`}
        >
          Subscribe to get special offers and updates
        </p>
      </div>

      {/* Newsletter Form */}
      <NewsletterForm />
    </div>
  );
}

export default NewsletterSection;
