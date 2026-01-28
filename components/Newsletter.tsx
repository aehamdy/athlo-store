import NewsletterForm from "./forms/NewsletterForm";
import Heading from "./shared/Heading";

type NewsletterProps = {
  variant: "default" | "compact";
};

function Newsletter({ variant = "default" }: NewsletterProps) {
  return (
    <div
      className={`flex flex-col gap-md ${variant === "default" ? "items-center w-full md:w-3/4 lg:w-2/5" : "items-start"}`}
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

export default Newsletter;
