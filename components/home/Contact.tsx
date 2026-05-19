import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-surface px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
            Our Location
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex gap-4 items-start bg-white p-6 rounded-lg border border-gray-100">
            <MapPin className="text-primary mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-primary-dark">Address</h3>
              <p className="text-sm text-gray-600 leading-relaxed mt-1">
                ST-1, 5-C, Near Matric Board Office,
                <br />
                Nazimabad, Karachi
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-white p-6 rounded-lg border border-gray-100">
            <Phone className="text-primary mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-primary-dark">Phone</h3>
              <a
                href="tel:0330-0370660"
                className="text-sm text-gray-600 block mt-1"
              >
                0330-0370660
              </a>
              <a
                href="tel:021-99260294"
                className="text-sm text-gray-600 block"
              >
                021-99260294
              </a>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-white p-6 rounded-lg border border-gray-100">
            <Mail className="text-primary mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-primary-dark">Email</h3>
              <a
                href="mailto:info@jimset.edu.pk"
                className="text-sm text-gray-600 mt-1"
              >
                info@jimset.edu.pk
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.545108929443!2d67.0283368!3d24.9259224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f91913dab87%3A0x250aa761123bea61!2sJINNAH%20POLYTECHNIC%20INSTITUTE!5e0!3m2!1sen!2s!4v1779086938193!5m2!1sen!2s"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JIMSET Location Map"
          />
        </div>
      </div>
    </section>
  );
}
