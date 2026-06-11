import PageHero from "@/components/shared/PageHero";
import { MapPin, Phone, Mail } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact JIMSET Karachi. ST-1, 5-C, Near Matric Board Office, Nazimabad, Karachi. Call: 0330-0370660 / 021-99260294.",
  alternates: { canonical: "https://jimset.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <MapPin className="text-primary mt-1" size={24} />
              <div>
                <h3 className="font-bold text-primary-dark">Address</h3>
                <p className="text-gray-700">
                  ST-1, 5-C, Near Matric Board Office, Nazimabad, Karachi
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-primary mt-1" size={24} />
              <div>
                <h3 className="font-bold text-primary-dark">Phone</h3>
                <a href="tel:0330-0370660" className="text-gray-700">
                  0330-0370660
                </a>
                <br />
                <a href="tel:02199260294" className="text-gray-700">
                  021-99260294
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="text-primary mt-1" size={24} />
              <div>
                <h3 className="font-bold text-primary-dark">Email</h3>
                <a href="mailto:info@jimset.com" className="text-gray-700">
                  info@jimset.com
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md border-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.545108929443!2d67.0283368!3d24.9259224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f91913dab87%3A0x250aa761123bea61!2sJINNAH%20POLYTECHNIC%20INSTITUTE!5e0!3m2!1sen!2s!4v1779086938193!5m2!1sen!2s"
              width="100%"
              allowFullScreen
              loading="lazy"
              title="Map"
            />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
