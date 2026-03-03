import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Aethonex",
  description:
    "Get in touch with Aethonex to start your digital transformation journey.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Contact />
    </main>
  );
}
