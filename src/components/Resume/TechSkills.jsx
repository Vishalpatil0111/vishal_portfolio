import TargetCursor from "../TargetCursor";

export default function TechnicalSkills() {
  const skills = {
    Languages: ["Python", "JavaScript"],
    "Frontend & Backend": ["React", "Node.js", "FastAPI", "MongoDB", "MYSQL"],
    Tools: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Vercel"],
    "AI / ML": ["TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "OpenAI"],
  };

    return (
      <div>
     
        <section className="w-full flex justify-center py-20 px-6">
          <div className="w-full max-w-[1400px] bg-[#1A1A1A] rounded-[40px] p-10 md:p-14 border border-white/10 shadow-lg">
            {/* Section Title */}
            <span className="bg-[#BEE7FF] text-black px-10 py-4 rounded-full font-semibold text-lg">
              TECHNICAL SKILLS
            </span>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Loop Through Skill Groups */}
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="flex flex-col gap-4">
                  {/* Category TItle */}
                  <h3 className="text-white font-semibold text-xl">
                    {category}
                  </h3>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-4 ">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-6 py-3 cursor-target  rounded-full border border-white/20 text-white text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}
