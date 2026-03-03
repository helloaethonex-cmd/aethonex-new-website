import About from "@/components/About";

export const metadata = {
  title: "About Us | Aethonex",
  description:
    "Learn more about Aethonex's mission, vision, and approach to digital solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <About />
    </main>
  );
}
