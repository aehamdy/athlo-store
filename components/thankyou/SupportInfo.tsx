import ROUTES from "@/lib/routes";
import Link from "next/link";

function SupportInfo() {
  return (
    <div>
      <p className="mt-3xl text-sm text-muted-foreground animate-fade-in">
        Have questions? Contact us through our{" "}
        <Link
          href={ROUTES.public.contact}
          className="hover:text-accent-base underline"
        >
          contact page
        </Link>
      </p>
    </div>
  );
}

export default SupportInfo;
