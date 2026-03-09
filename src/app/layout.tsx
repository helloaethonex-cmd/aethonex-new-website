import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://aethonex.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "Aethonex | Digital Solutions for Startups",
    template: "%s | Aethonex",
  },
  description:
    "Aethonex transforms startup visions into reality with cutting-edge digital solutions — UI/UX design, full-stack development, AI automation, payment gateway integration, and more.",
  keywords: [
    "digital solutions",
    "startup development",
    "web development",
    "UI/UX design",
    "full stack development",
    "API integration",
    "AI automation",
    "payment gateway",
    "software agency",
    "Aethonex",
  ],
  authors: [{ name: "Aethonex", url: BASE_URL }],
  creator: "Aethonex",
  publisher: "Aethonex",

  // ── Canonical & Alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Aethonex",
    title: "Aethonex | Digital Solutions for Startups",
    description:
      "Transform your startup vision into reality with Aethonex — experts in web development, UI/UX design, AI automation, and full-stack digital solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aethonex — Digital Solutions for Startups",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Aethonex | Digital Solutions for Startups",
    description:
      "Transform your startup vision into reality with Aethonex — web development, UI/UX, AI automation & more.",
    images: ["/og-image.png"],
    // creator: "@aethonex",  // Add when Twitter account is created
    // site: "@aethonex",     // Add when Twitter account is created
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // ── Theme ─────────────────────────────────────────────────────────────────
  other: {
    "theme-color": "#0b0f1a",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0b0f1a",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aethonex",
  url: "https://aethonex.in",
  logo: "https://aethonex.in/logo.png",
  description:
    "Aethonex transforms startup visions into reality with cutting-edge digital solutions — UI/UX design, full-stack development, AI automation, payment gateway integration, and more.",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://aethonex.in/contact",
  },
  // sameAs: [], // Add social media URLs here when accounts are created
  offers: {
    "@type": "Offer",
    description:
      "UI/UX Design, Frontend Development, Backend Development, API Integration, Payment Gateway, Database Services, AI & Automation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
