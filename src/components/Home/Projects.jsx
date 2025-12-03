import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects({ github = "https://github.com/Vishalpatil0111" }) {
  // Refs for animations
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);

  const projects = [
    {
      title: "23D Studio",
      desc: "Developed and deployed a responsive portfolio website for a design firm, built with React. Focused on clean UI, smooth animations, and optimized performance for a professional user experience.",
      img: "/1.webp",
      tags: ["Next.js", "Tailwind", "GSAP"],
      live: "https://23dstudio.com/",
    },
    {
      title: "Lung Disease Prediction Dashboard",
      desc: "An insightful dashboard for lung disease prediction using data visualization and prediction using model",
      img: "/lungs.jpg",
      tags: ["React", "Flask", "ML"],
      github: "https://github.com/Vishalpatil0111/LungsDiseaseDashboard",
      live: "#",
    },
    {
      title: "TalkAI",
      desc: "AI-powered chatbot built using React and Context .",
      img: "/ai.webp",
      tags: ["React", "Gemini AI", "Tailwind", "uuid"],
      github: "#",
      live: "https://talk-ai-mauve.vercel.app/",
    },
  ];

  // GSAP animations
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });

    // Image scroll/parallax
    imagesRef.current.forEach((img) => {
      gsap.from(img, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 95%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full h-full border border-white flex flex-col justify-between p-4 rounded-xl"
          >
            {/* TOP CONTENT */}
            <div className="w-full h-1/2  p-4 rounded-xl">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">{p.title}</h2>

                <p className="text-sm">{p.desc}</p>

                {/* TAGS */}
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-black/40 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS (NO ICONS) */}
                <div className="flex gap-4 mt-3">
                  {/* GitHub button */}
                  {p.github && p.github !== "#" && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all"
                    >
                      GitHub
                    </a>
                  )}

                  {/* Live Demo button */}
                  {p.live && p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* BOTTOM IMAGE */}
            <div className="w-full h-60 mt-4 overflow-hidden rounded-xl">
              <img
                ref={(el) => (imagesRef.current[i] = el)}
                className="w-full h-full object-cover"
                src={p.img}
                alt={p.title}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center mt-4">
        <a
          href={github}
          target="_blank"
          className="px-6 py-2 bg-[#F8D33A] text-black font-semibold text-md border border-yellow-300 transition-all hover:bg-yellow-300 hover:shadow-[0_0_15px_rgba(255,230,0,0.6)]"
        >
          View Projects
        </a>
      </div>
    </div>
  );
}

export default Projects;
