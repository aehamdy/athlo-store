import Heading from "@/components/shared/Heading";

type PrivacyPolicyCardProps = {
  title: string;
  body: string;
};

function PrivacyPolicyCard({ title, body }: PrivacyPolicyCardProps) {
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

export default PrivacyPolicyCard;
