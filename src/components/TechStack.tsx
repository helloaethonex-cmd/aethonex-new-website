"use client";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Tailwind CSS",
  "Figma",
  "AWS",
  "Stripe",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "Firebase",
  "Express.js",
  "Python",
  "Redis",
  "Prisma",
  "Vercel",
];

export default function TechStack() {
  // Duplicate the list for seamless infinite scrolling
  const items = [...technologies, ...technologies];

  return (
    <section
      className="py-10 overflow-hidden relative"
      style={{ background: "#0b0f1a" }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-r from-[#0b0f1a] to-transparent" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-l from-[#0b0f1a] to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap gap-6">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/80 shrink-0 transition-colors duration-300 hover:text-[#00F5A0] hover:border-[#00F5A0]/40 cursor-default"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] shrink-0" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
