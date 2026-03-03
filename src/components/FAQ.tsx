"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What exactly does Aethonex do?",
    answer:
      "Aethonex is a full-service digital agency focused on empowering businesses with modern digital solutions. We specialize in UI/UX design, building scalable frontend apps, designing robust backend architectures, integrating complex APIs, and offering fully-fledged full-stack development using tools like Next.js, Node.js, and MongoDB.",
  },
  {
    question: "Do you design websites or just build them?",
    answer:
      "We provide end-to-end digital services. This means we design stunning, user-friendly UI/UX in tools like Figma, and then develop them into highly responsive, performant, and reliable products.",
  },
  {
    question: "What is your development stack?",
    answer:
      "Our core stack includes React, Next.js, Node.js, and TypeScript. However, we also have expertise with Tailwind CSS, MongoDB, PostgreSQL, AWS, React Native, Prisma, and integrating third-party services like Stripe or Firebase as needed by the project.",
  },
  {
    question: "How much does a project typically cost?",
    answer:
      "Project costs vary greatly depending on the scope, complexity, and specific requirements. We prefer to start with a kickoff discussion or a demo session to understand your needs before providing a tailored proposal.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer:
      "Timelines are dependent on the project scope. A standard landing page may take 1-2 weeks, while a more complex web application MVP might take 4-8 weeks to deliver. We establish transparent timelines upfront.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className="py-25 px-[5%] md:px-[10%]"
      style={{ background: "#0b0f1a" }}
      ref={sectionRef}
    >
      <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-white/80 max-w-225 mx-auto mb-15 text-[1.1rem]">
        Everything you need to know about our digital agency and approach.
      </p>

      <div className="max-w-300 mx-auto grid gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="fade-in-up transition-all duration-300 rounded-xl overflow-hidden cursor-pointer border"
              style={{
                background: isOpen
                  ? "rgba(108, 99, 255, 0.08)"
                  : "rgba(255, 255, 255, 0.05)",
                borderColor: isOpen
                  ? "rgba(108, 99, 255, 0.4)"
                  : "rgba(255, 255, 255, 0.05)",
              }}
              onClick={() => toggleAccordion(index)}
            >
              <div className="px-6 py-5 flex items-center justify-between">
                <h3 className="font-semibold text-lg text-white/90">
                  {faq.question}
                </h3>
                <div
                  className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#6C63FF]/20" : "bg-white/5"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${
                      isOpen ? "text-[#00F5A0]" : "text-white/60"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-64 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <p className="text-white/70 leading-relaxed text-[0.95rem]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
