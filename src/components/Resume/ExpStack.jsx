import { motion } from "framer-motion";

const experiences = [
  {
    role: "Trainee Software Engineer",
    company: "The Shine Media",
    date: "Sep 2024 - Present",
    points: [
      "Developed and maintained responsive websites using React.js, HTML5, CSS3, Tailwind, and JavaScript, improving UI consistency and reducing layout issues by 30%.",

      "Collaborated with senior developers to build reusable UI components, resulting in a 20% faster development cycle for new features.",

      "Optimized website performance by implementing lazy loading, image optimization, and API response caching, improving page load speed by up to 40%.",

      "Implemented REST APIs integration using Axios/Fetch, validating data flows and improving application reliability.",

      "Built interactive UI elements using React hooks, context APIs, and custom utility components, leading to smoother user experience.",
    ],
  },
  {
    role: "Intern",
    company: "Zabuza Labs",
    date: "Sep 2023 - Feb 2024",
    points: [
      "Developed and deployed Python-based APIs using FastAPI, integrating Generative AI capabilities such as text-to-image generation and text summarization, enabling advanced user-facing features.",
      "Enhanced backend performance by optimizing response times and implementing asynchronous processing, improving overall system scalability and reducing latency.",

    ],
  },
];

export default function ExperienceStack() {
  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row gap-10 md:gap-20">
        {/* LEFT BADGE */}
        <div className="md:pt-6 flex md:block md:items-center justify-center md:justify-start">
          <span className="bg-[#BEE7FF] text-black px-10 py-4 rounded-full font-semibold text-lg shadow-md">
            EXPERIENCES
          </span>
        </div>

        {/* RIGHT CARD STACK */}
        <div className="flex flex-col gap-10 md:gap-20 relative">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="
                bg-[#1A1A1A] 
                text-white 
                rounded-[30px] md:rounded-[40px] 
                p-6 sm:p-8 md:p-14 
                shadow-xl 
                border border-white/5 
                relative
              "
              style={{
                // Mobile → NO overlap
                // Tablet/Desktop → overlap
                marginTop:
                  window.innerWidth < 768 ? "0px" : i === 0 ? "0px" : "-100px",
                zIndex: 10 - i,
              }}
            >
              {/* TITLE */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {exp.role}
              </h2>

              <p className="text-gray-400 mt-1 text-sm sm:text-base md:text-lg">
                {exp.company}
              </p>

              {/* DATE */}
              <span
                className="
                inline-block 
                bg-[#BEE7FF] 
                text-black 
                px-5 md:px-6 
                py-2 
                rounded-full 
                text-xs sm:text-sm 
                font-semibold 
                mt-5 mb-5
              "
              >
                {exp.date}
              </span>

              {/* BULLETS */}
              <ul className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                {exp.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#BEE7FF] text-xl leading-none">
                      •
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
