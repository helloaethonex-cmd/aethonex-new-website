import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aethonex to kick-start your project. Reach out for a free discovery call and let's build something great together.",
  keywords: [
    "contact Aethonex",
    "hire web developer",
    "hire software agency",
    "book a demo",
    "get a quote",
    "digital solutions contact",
  ],
  alternates: {
    canonical: "https://aethonex.in/contact",
  },
  openGraph: {
    title: "Contact Us | Aethonex",
    description:
      "Reach out to Aethonex for a free discovery call and let's build something great together.",
    url: "https://aethonex.in/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Aethonex" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aethonex",
    description:
      "Reach out to Aethonex for a free discovery call and let's build something great together.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Contact />
    </main>
  );
}
