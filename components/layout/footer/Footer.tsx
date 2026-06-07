import FooterMain from "./FooterMain";
import FooterLegal from "./FooterLegal";

function Footer() {
  return (
    <footer className="px-md text-sm text-muted-foreground bg-surface border-t border-subtle">
      <FooterMain />

      <FooterLegal />
    </footer>
  );
}

export default Footer;
