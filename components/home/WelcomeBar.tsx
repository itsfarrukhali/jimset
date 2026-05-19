import Image from "next/image";

export default function WelcomeBar() {
  return (
    <section className="bg-white border-b border-gray-100 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
        {/* Left – BBSU logo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="relative h-16 sm:h-20 w-45 sm:w-55">
            <Image
              src="/brand/bbsutsd_logo.png"
              alt="BBSU Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Affiliated with
          </span>
        </div>

        {/* Center – JIMSET branding */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-lg">J</span>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-primary-dark">
                Welcome to JIMSET
              </h2>
              <p className="text-gray-500 text-sm">
                A constituent institute of Jinnah Polytechnic Institute (JPI)
              </p>
            </div>
          </div>
        </div>

        {/* Right – JPI logo */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <div className="relative h-20 sm:h-24 w-52 sm:w-60">
            <Image
              src="/brand/jpi-logo-tp.png"
              alt="JPI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Under
          </span>
        </div>
      </div>
    </section>
  );
}
