"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStartup India",
    text: "Aethonex transformed our idea into a stunning product. Their attention to UI/UX details and development quality exceeded our expectations. The team delivered on time and was incredibly responsive throughout.",
    avatar: "RS",
  },
  {
    name: "Sarah Chen",
    role: "CEO, DigitalWave",
    text: "Working with Aethonex was a game-changer for our business. They built our entire SaaS platform from scratch — beautiful frontend, rock-solid backend, and seamless payment integration. Highly recommended!",
    avatar: "SC",
  },
  {
    name: "Amit Patel",
    role: "CTO, FinEdge Solutions",
    text: "The team at Aethonex delivered a complex fintech dashboard that our users love. Their expertise in React, Node.js, and data visualization is top-notch. They truly understand modern web development.",
    avatar: "AP",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    sectionRef.current
      ?.querySelectorAll(".fade-in-up")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-25 px-[5%] md:px-[10%] relative"
      style={{
        background:
          "linear-gradient(135deg, rgba(26, 31, 56, 0.5), rgba(11, 15, 26, 0.8))",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute w-100 h-100 rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(108, 99, 255, 0.15), transparent 70%)",
          top: "-100px",
          right: "-100px",
        }}
      />

      <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
        What Clients Say
      </h2>
      <p className="text-center text-white/80 max-w-225 mx-auto mb-15 text-[1.1rem]">
        Trusted by founders and CTOs building the next generation of digital
        products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-350 mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={t.name}
            className="fade-in-up relative p-8 rounded-2xl flex flex-col transition-all duration-500 cursor-default"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              animationDelay: `${index * 0.15}s`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(108, 99, 255, 0.35)";
              el.style.boxShadow = "0 15px 50px rgba(108, 99, 255, 0.12)";
              el.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255, 255, 255, 0.08)";
              el.style.boxShadow = "";
              el.style.transform = "";
            }}
          >
            {/* Quote icon */}
            <svg
              className="w-8 h-8 mb-5 text-[#6C63FF] opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-white/75 text-[0.95rem] leading-[1.8] flex-1 mb-6">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
                }}
              >
                {t.avatar}
              </div>
              <div>
                <p className="text-white font-semibold text-[0.95rem] leading-tight">
                  {t.name}
                </p>
                <p className="text-white/50 text-[0.8rem]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
