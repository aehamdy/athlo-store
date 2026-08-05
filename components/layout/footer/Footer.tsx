import FooterMain from "./FooterMain";
import FooterLegal from "./FooterLegal";

function Footer() {
  return (
    <footer className="px-md text-black bg-accent-soft border-t border-balck rounded-t-4xl">
      <FooterMain />

      <FooterLegal />
    </footer>
  );
}

export default Footer;
