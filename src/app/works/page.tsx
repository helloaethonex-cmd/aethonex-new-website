import OurWorks from "@/components/OurWorks";

export const metadata = {
  title: "Our Works | Aethonex",
  description:
    "A showcase of projects built by Aethonex, from full-stack web apps to real-time chat platforms.",
};

export default function WorksPage() {
  return (
    <main className="min-h-screen pt-20">
      <OurWorks />
    </main>
  );
}
