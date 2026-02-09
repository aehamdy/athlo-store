import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQCategory } from "../types";

interface FAQItemProps {
  item: FAQCategory;
}

function FAQItem({ item }: FAQItemProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="bg-surface border border-subtle rounded-xl"
    >
      {item.faqs.map((faq, fIdx) => (
        <AccordionItem key={fIdx} value={`${fIdx}-${fIdx}`} className="px-xl">
          <AccordionTrigger className="text-start hover:no-underline">
            {faq.q}
          </AccordionTrigger>

          <AccordionContent className="text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQItem;
