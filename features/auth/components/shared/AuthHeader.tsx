import Heading from "@/components/shared/Heading";
import Logo from "@/components/shared/Logo";

type AuthHeaderProps = {
  title: string;
  description: string;
};

function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-md">
      <Logo />

      <div className="flex flex-col items-center gap-sm">
        <Heading className="font-bold text-xl text-foreground">{title}</Heading>

        <p className="text-center text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default AuthHeader;
