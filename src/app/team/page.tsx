import Team from "@/components/Team";

export const metadata = {
  title: "Our Team | Aethonex",
  description: "Meet the talented team behind Aethonex.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-20">
      <Team />
    </main>
  );
}
