import PageHero from "@/components/shared/PageHero";
import { MapPin, Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

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
                <a href="mailto:info@jimset.edu.pk" className="text-gray-700">
                  info@jimset.edu.pk
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
          <h2 className="font-display text-2xl font-bold text-primary-dark mb-6">
            Send a Message
          </h2>
          <form className="space-y-4 bg-surface p-6 rounded-xl border">
            <div>
              <label
                htmlFor="c-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <Input
                id="c-name"
                placeholder="Your name"
                className="h-10 text-2xl font-display text-primary-dark"
              />
            </div>
            <div>
              <label
                htmlFor="c-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input
                id="c-email"
                type="email"
                placeholder="you@example.com"
                className="h-10 text-2xl font-display text-primary-dark"
              />
            </div>
            <div>
              <label
                htmlFor="c-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <Textarea
                id="c-message"
                rows={4}
                placeholder="How can we help?"
                className="text-2xl h-full font-display text-primary-dark"
              />
            </div>
            <Button
              type="submit"
              className="bg-primary text-sm text-white w-full h-12"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
