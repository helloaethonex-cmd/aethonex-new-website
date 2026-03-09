import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Aethonex — our mission to empower startups, our values, and the vision that drives everything we build.",
  keywords: [
    "about Aethonex",
    "digital agency India",
    "software agency",
    "startup solutions",
    "tech company",
  ],
  alternates: {
    canonical: "https://aethonex.in/about",
  },
  openGraph: {
    title: "About Us | Aethonex",
    description:
      "Discover the story behind Aethonex — our mission, values, and vision that drives everything we build.",
    url: "https://aethonex.in/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Aethonex" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Aethonex",
    description: "Discover the story behind Aethonex — our mission, values, and vision.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <About />
    </main>
  );
}
