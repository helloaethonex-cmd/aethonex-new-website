import OurWorks from "@/components/OurWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works",
  description:
    "Browse Aethonex's portfolio — real-world projects spanning full-stack web apps, real-time platforms, AI-powered tools, and scalable startup solutions.",
  keywords: [
    "Aethonex portfolio",
    "web app projects",
    "startup projects",
    "software portfolio",
    "full stack projects",
    "real-time applications",
    "AI projects",
  ],
  alternates: {
    canonical: "https://aethonex.in/works",
  },
  openGraph: {
    title: "Our Works | Aethonex",
    description:
      "Browse Aethonex's portfolio — full-stack web apps, real-time platforms, AI-powered tools, and more.",
    url: "https://aethonex.in/works",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aethonex Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Works | Aethonex",
    description:
      "Browse Aethonex's portfolio — full-stack apps, real-time platforms and AI-powered solutions.",
    images: ["/og-image.png"],
  },
};

export default function WorksPage() {
  return (
    <main className="min-h-screen pt-20">
      <OurWorks />
    </main>
  );
}
