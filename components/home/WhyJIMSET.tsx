import { features } from "@/data/features";

export default function WhyJIMSET() {
  return (
    <section className="py-20 md:py-28 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Our Strengths
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-dark mt-2 mb-4">
            Why Choose JIMSET?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            A learning environment focused on practical skills, ethical values,
            and career readiness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
                <feature.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
