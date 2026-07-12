import ContactCard from "@/features/contact/components/ContactCard";
import { Info } from "@/features/contact/types";
import appConfig from "@/config/appConfig";
import { useTranslations } from "next-intl";
import Heading from "@/components/shared/Heading";
import ContactUsForm from "@/features/forms/ContactUsForm";
import Icon from "@/components/shared/Icon";

const mainLocation = appConfig.locations?.[0];

const contactInfo: Info[] = [
  {
    id: 1,
    icon: "MapPin",
    title: "address",
    details: mainLocation
      ? [
          mainLocation.addresses[0]?.street,
          mainLocation.addresses[0]?.city,
          mainLocation.addresses[0]?.country,
        ]
      : [],
  },
  {
    id: 2,
    icon: "Phone",
    title: "phone",
    details: appConfig.contact.phones.map((phone) => phone.value),
  },
  {
    id: 3,
    icon: "Mail",
    title: "email",
    details: appConfig.contact.emails.map((email) => email.value),
  },
  {
    id: 4,
    icon: "Clock",
    title: "businessHours",
    details: ["businessHours.line1", "businessHours.line2"],
  },
];

function ContactSection() {
  const t = useTranslations("contactPage");

  return (
    <section className="section-spacing bg-base">
      <div className="px-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5xl">
          {/* Contact Form */}
          <div className="p-8 bg-surface border border-subtle rounded-2xl">
            <Heading
              as="h2"
              className="mb-xl font-bold text-2xl text-foreground"
            >
              {t("sendMessage")}
            </Heading>

            <ContactUsForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-3xl">
            <div className="space-y-sm">
              <Heading className="font-bold text-2xl text-foreground">
                {t("contactInformation.title")}
              </Heading>

              <p className="text-muted-foreground">
                {t("contactInformation.description")}
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
