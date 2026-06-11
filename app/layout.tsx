import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jimset.com",
  ),

  title: {
    default: "JIMSET Karachi | B.E Technology Evening Programs",
    template: "%s | JIMSET Karachi",
  },

  description:
    "JIMSET (Jinnah Institute of Management Sciences, Engineering & Technology) Karachi offers 4-Year Evening B.E Technology programs in Electrical and Mechanical Engineering. DAE and HSC graduates eligible with 50% marks.",

  keywords: [
    "JIMSET Karachi",
    "B.E Technology Karachi",
    "Bachelor of Engineering Technology evening",
    "DAE to BE Technology",
    "evening engineering program Karachi",
    "Jinnah Institute Karachi",
    "BE Electrical Karachi",
    "BE Mechanical Karachi",
    "Anjuman-e-Islamia Trust",
    "engineering college Karachi evening",
    "DAE graduates degree program",
    "HSC Pre-Engineering degree Karachi",
  ],

  authors: [{ name: "JIMSET", url: "https://jimset.com" }],
  creator:
    "JIMSET — Jinnah Institute of Management Sciences Engineering & Technology",
  publisher: "Anjuman-e-Islamia Trust Pakistan",

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://jimset.com",
    siteName: "JIMSET Karachi",
    title: "JIMSET Karachi | 4-Year B.E Technology Evening Programs",
    description:
      "Evening B.E Technology programs in Electrical & Mechanical Engineering. Open for DAE and HSC graduates. Affordable fees with installment option.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JIMSET — Jinnah Institute of Management Sciences Engineering & Technology Karachi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JIMSET Karachi | B.E Technology Evening Programs",
    description:
      "4-Year Evening B.E Technology in Electrical & Mechanical. DAE & HSC eligible. Karachi.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://jimset.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "GOOGLE_SEARCH_CONSOLE_CODE_YAHAN", // baad mein add karo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        dmSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "JIMSET — Jinnah Institute of Management Sciences, Engineering & Technology",
              alternateName: "JIMSET",
              url: "https://jimset.com",
              logo: "https://jimset.com/brand/jimset.png",
              description:
                "4-Year Evening B.E Technology programs in Electrical and Mechanical Engineering. DAE and HSC graduates eligible.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ST-1, 5-C, Near Matric Board Office, Nazimabad",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              telephone: "+92-330-0370660",
              email: "info@jimset.com",
              foundingOrganization: "Anjuman-e-Islamia Trust Pakistan",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "B.E Technology Programs",
                itemListElement: [
                  {
                    "@type": "Course",
                    name: "Bachelor of Engineering Technology — Electrical",
                    description:
                      "4-Year Evening B.E Electrical Technology program",
                    provider: { "@type": "Organization", name: "JIMSET" },
                  },
                  {
                    "@type": "Course",
                    name: "Bachelor of Engineering Technology — Mechanical",
                    description:
                      "4-Year Evening B.E Mechanical Technology program",
                    provider: { "@type": "Organization", name: "JIMSET" },
                  },
                ],
              },
            }),
          }}
        />
        <SpeedInsights />
        <Analytics />
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
