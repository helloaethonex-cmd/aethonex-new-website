import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the passionate developers, designers, and strategists behind Aethonex — a team dedicated to transforming startup ideas into powerful digital products.",
  keywords: [
    "Aethonex team",
    "software developers",
    "web designers",
    "startup team",
    "tech team India",
  ],
  alternates: {
    canonical: "https://aethonex.in/team",
  },
  openGraph: {
    title: "Our Team | Aethonex",
    description:
      "Meet the developers, designers, and strategists behind Aethonex — passionate about building powerful digital products.",
    url: "https://aethonex.in/team",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aethonex Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Aethonex",
    description:
      "Meet the developers, designers, and strategists behind Aethonex.",
    images: ["/og-image.png"],
  },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-20">
      <Team />
    </main>
  );
}
