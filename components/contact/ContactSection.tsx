import ContactCard from "@/features/contact/components/ContactCard";
import ContactUsForm from "../forms/ContactUsForm";
import Heading from "../shared/Heading";
import { Info } from "@/features/contact/types";
import appConfig from "@/config/appConfig";
import Icon from "../shared/Icon";

const contactInfo: Info[] = [
  {
    id: 1,
    icon: "MapPin",
    title: "Address",
    details: [
      appConfig.address.street,
      `${appConfig.address.city}, ${appConfig.address.country}`,
    ],
  },
  {
    id: 2,
    icon: "Phone",
    title: "Phone",
    details: [
      appConfig.contact.numbers.primary,
      appConfig.contact.numbers.secondary,
    ],
  },
  {
    id: 3,
    icon: "Mail",
    title: "Email",
    details: [appConfig.contact.emails.info, appConfig.contact.emails.support],
  },
  {
    id: 4,
    icon: "Clock",
    title: "Business Hours",
    details: ["Sunday - Thursday: 9 AM - 6 PM", "Friday - Saturday: Closed"],
  },
];

function ContactSection() {
  return (
    <section className="section-spacing bg-base">
      <div className="px-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5xl">
          {/* Contact Form */}
          <div className="p-8 bg-surface border border-subtle rounded-2xl">
            <h2 className="font-bold text-2xl mb-xl">Send Message</h2>
            <ContactUsForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-3xl">
            <div className="space-y-sm">
              <Heading className="font-bold text-2xl">
                Contact Information
              </Heading>

              <p className="text-muted-foreground">
                Feel free to reach out to us with any questions or inquiries.
                Our team is ready to help you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-xl">
              {contactInfo.map((info) => (
                <ContactCard key={info.id} info={info} />
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-surface border border-subtle rounded-xl overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="MapPin"
                    className="w-12 h-12 mx-auto mb-2 text-muted-foreground"
                  />

                  <p className="text-muted-foreground">Location Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
