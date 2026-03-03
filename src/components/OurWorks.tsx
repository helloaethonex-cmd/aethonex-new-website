"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const works = [
  {
    name: "Travel-Trove",
    desc: "A Full Stack Travel Package Booking web app with a seamless animated design, User authentication, Package booking by date and people, Wishlist and my bookings, admin panel with control over everything accessible by admin only.(As hosted free it takes 50 secs to load at first)",
    image: "/works/travel-trove.png",
    link: "https://travel-trove.onrender.com",
    github: "https://github.com/kumarpritam1468/travel-trove",
  },
  {
    name: "Stock-Market Web App",
    desc: "A Full Stack Stock investment web application (Zerodha Clone) with User authentication, Stock Buying, Selling options, Investment Charts, Profit and Loss, Dummy Money in account.",
    image: "/works/zerodha-clone.png",
    link: "https://x.com/devPritam_7/status/1849089165046198334",
    github: "https://github.com/kumarpritam1468/stock-market-site",
  },
  {
    name: "Twitter-Clone",
    desc: "A Full stack twitter clone with image, text posting, likes, comments, profile viewing, follow/unfollow etc all features...(As hosted free it takes 50 secs to load at first)",
    image: "/works/twitter.png",
    link: "https://twitter-clone-wowx.onrender.com",
    github: "https://github.com/kumarpritam1468/twitter-clone",
  },
  {
    name: "Chat-Zing",
    desc: "A fully working MERN stack Chat Application with real time messaging, unique profile pic, online status, cookie authentication and a beautiful UI(As hosted free it takes 50 secs to load at first)",
    image: "/works/chat-zing.png",
    link: "https://chat-zing.onrender.com",
    github: "https://github.com/kumarpritam1468/Chat-Zing",
  },
  {
    name: "MERN portfolio",
    desc: "My previous MERN stack portfolio with jwt verification, admin panel & crud operations",
    image: "/works/portfolio.png",
    link: "https://pritam-kumar-portfolio.vercel.app",
    github: "https://github.com/kumarpritam1468/MERN-portfolio",
  },
];

export default function OurWorks() {
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
      id="works"
      ref={sectionRef}
      className="py-25 px-[5%] md:px-[10%]"
      style={{ background: "#0b0f1a" }}
    >
      <h2 className="text-center text-[2.5rem] font-bold text-[#00F5A0] relative section-heading mb-7.5">
        Our Works
      </h2>
      <p className="text-center text-white/90 max-w-225 mx-auto mb-15 text-[1.1rem]">
        A showcase of projects we&apos;ve built — from full-stack web apps to
        real-time chat platforms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <div
            key={work.name}
            className="fade-in-up group rounded-2xl overflow-hidden transition-all duration-500 flex flex-col"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              animationDelay: `${index * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(0, 245, 160, 0.3)";
              el.style.boxShadow = "0 20px 60px rgba(0, 245, 160, 0.12)";
              el.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255, 255, 255, 0.08)";
              el.style.boxShadow = "";
              el.style.transform = "";
            }}
          >
            {/* Project Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-t from-[#0b0f1a] via-transparent to-transparent z-10 opacity-60" />
              <Image
                src={work.image}
                alt={work.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F5A0] transition-colors duration-300">
                {work.name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5 flex-1">
                {work.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 relative overflow-hidden btn-shine"
                  style={{
                    background: "linear-gradient(135deg, #6C63FF, #00F5A0)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 8px 25px rgba(108, 99, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.transform = "";
                    el.style.boxShadow = "";
                  }}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </span>
                </a>
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white/90 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255, 255, 255, 0.15)";
                    el.style.borderColor = "rgba(0, 245, 160, 0.4)";
                    el.style.transform = "translateY(-2px)";
                    el.style.color = "#00F5A0";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255, 255, 255, 0.08)";
                    el.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    el.style.transform = "";
                    el.style.color = "rgba(255, 255, 255, 0.9)";
                  }}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
