"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const overviewItems = [
  {
    title: "UI/UX Design",
    desc: "From initial wireframes to high-fidelity Figma prototypes, we engineer interfaces focused on driving user conversion and delivering an intuitive experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Web Development",
    desc: "We build scalable, cutting-edge responsive web applications leveraging Next.js, React, and seamless UI frameworks designed to perform.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "API & Backend Systems",
    desc: "Building rock-solid APIs and backend infrastructure relying on Node.js, Express, and efficient database architectures ensuring safe data handling.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  }
];

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
        background: "linear-gradient(135deg, rgba(11, 15, 26, 0.8), rgba(26, 31, 56, 0.4))",
      }}
    >
      <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
        What We Do
      </h2>
      <p className="text-center text-white/80 max-w-225 mx-auto mb-15 text-[1.1rem]">
        A complete digital suite tailored for your startup&apos;s journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {overviewItems.map((item, index) => (
          <div
            key={item.title}
            className="fade-in-up group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              animationDelay: `${index * 0.15}s`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translateY(-8px)";
              el.style.background = "rgba(108, 99, 255, 0.05)";
              el.style.borderColor = "rgba(108, 99, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "";
              el.style.background = "rgba(255, 255, 255, 0.03)";
              el.style.borderColor = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-[#00F5A0] shadow-[0_0_20px_rgba(0,245,160,0.1)] group-hover:scale-110 transition-transform duration-300 bg-white/5">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 fade-in-up" style={{ animationDelay: '0.45s' }}>
        <Link
          href="/services"
          className="group flex items-center gap-2 text-[#00F5A0] font-medium border border-[#00F5A0]/30 px-6 py-2.5 rounded-full hover:bg-[#00F5A0]/10 transition-colors duration-300"
        >
          View All Services
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
