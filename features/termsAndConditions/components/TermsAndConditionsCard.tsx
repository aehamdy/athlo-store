import Heading from "@/components/shared/Heading";

type TermsAndConditionsCardProps = {
  title: string;
  body: string;
};

function TermsAndConditionsCard({ title, body }: TermsAndConditionsCardProps) {
  return (
    <article className="w-full">
      <div className="space-y-sm p-xl bg-card border border-border rounded-xl">
        <Heading as="h2" className="font-bold text-xl text-accent-base">
          {title}
        </Heading>

        <p className="leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}

export default TermsAndConditionsCard;
