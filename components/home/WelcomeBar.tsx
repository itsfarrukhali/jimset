import Image from "next/image";

export default function WelcomeBar() {
  return (
    <section className="border-b border-gray-100 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        {/* Left – BBSU logo */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="relative h-12 w-40 sm:h-14 sm:w-48">
            <Image
              src="/brand/bbsutsd_logo.png"
              alt="BBSU Logo"
              sizes="(max-width: 640px) 160px, 192px"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-[11px] uppercase tracking-wide text-gray-500">
            Affiliated with
          </span>
        </div>

        {/* Center – JIMSET branding */}
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12">
            <Image
              src="/brand/jimset.png"
              alt="JIMSET Logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="font-heading text-base font-bold tracking-tight text-primary-dark sm:text-lg">
              Welcome to JIMSET
            </h2>
            <p className="text-sm text-gray-500">
              Jinnah Institute of Management Sciences, Engineering & Technology
            </p>
          </div>
        </div>

        {/* Right – JPI logo */}
        <div className="flex flex-col items-center gap-1 sm:items-end">
          <div className="relative h-12 w-40 sm:h-14 sm:w-48">
            <Image
              src="/brand/jpi-logo-tp.png"
              alt="JPI Logo"
              sizes="(max-width: 640px) 160px, 192px"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-[11px] uppercase tracking-wide text-gray-500">
            Under JPI
          </span>
        </div>
      </div>
    </section>
  );
}
