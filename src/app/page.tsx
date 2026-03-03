"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <TechStack />
      <ServicesOverview />
      <Testimonials />
      <FAQ />

      {/* Bottom CTA / Book a Demo */}
      <section
        className="py-25 px-[5%] md:px-[10%] text-center relative overflow-hidden"
        style={{ background: "#0b0f1a" }}
      >
        {/* Decorative glow */}
        <div
          className="absolute w-125 h-125 rounded-full pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 245, 160, 0.12), transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="relative z-10 max-w-175 mx-auto">
          <h2 className="text-[2.2rem] md:text-[3rem] font-bold mb-6 leading-tight">
            <span className="gradient-text">Ready to Build</span>{" "}
            <span className="text-white">Something Amazing?</span>
          </h2>
          <p className="text-white/70 text-[1.1rem] mb-10 leading-relaxed">
            Let&apos;s turn your vision into a digital reality. Book a free discovery call with our experts to discuss your project requirements and explore how we can help.
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            <Link
              href="/contact"
              className="relative overflow-hidden flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base text-white transition-all duration-300 btn-shine hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
                boxShadow: "0 4px 25px rgba(108, 99, 255, 0.4)",
              }}
            >
              Book a Demo
            </Link>
            <Link
              href="/services"
              className="flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base text-white bg-transparent transition-all duration-300 hover:border-[#00F5A0] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,245,160,0.2)]"
              style={{
                border: "2px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
