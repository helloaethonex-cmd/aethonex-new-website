import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aethonex's full suite of digital services — UI/UX design, frontend & backend development, API integration, AI automation, payment gateway, and database solutions.",
  keywords: [
    "web development services",
    "UI UX design",
    "frontend development",
    "backend development",
    "API integration",
    "AI automation",
    "payment gateway integration",
    "database services",
    "digital services India",
  ],
  alternates: {
    canonical: "https://aethonex.in/services",
  },
  openGraph: {
    title: "Services | Aethonex",
    description:
      "UI/UX design, full-stack development, AI automation, payment gateways & more — Aethonex delivers end-to-end digital solutions for startups.",
    url: "https://aethonex.in/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aethonex Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Aethonex",
    description:
      "UI/UX design, full-stack development, AI automation & more — end-to-end digital solutions for startups.",
    images: ["/og-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Services />
    </main>
  );
}
