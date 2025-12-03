export default function ExperienceSection() {
  const openResume = () => {
    // Opens in new tab
    window.open("/Vishal-Resume.pdf", "_blank");
  };

  return (
    <div className="w-full flex justify-center py-16 px-4">
      <div
        className="
        w-full max-w-[1400px] 
        bg-[#1A1A1A] 
        rounded-[40px] 
        p-8 md:p-16 
        flex flex-col md:flex-row 
        gap-10 md:gap-20
      "
      >
        {/* LEFT SIDE */}
        <div className="flex-1 text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Shaping{" "}
            <span className="bg-[#F7A8D8] text-black px-4 py-1 md:px-6 md:py-2 rounded-[40px]">
              Experiences
            </span>
            <br />& Building Connections
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 text-gray-300 text-base md:text-lg leading-relaxed text-center md:text-left">
          <p>
            With 4 years of experience in UI/UX and visual design, I’ve
            collaborated cross-functionally with product stakeholders,
            designers, developers and marketing teams to craft user-centric
            solutions that are both intuitive and impactful.
          </p>
          <br />
          <p>
            From redesigning complex platforms to building a brand from scratch,
            I bring strategic thinking, empathy, and attention to detail into
            every project. I’m passionate about fostering collaboration, solving
            problems creatively, and designing experiences that drive real
            business growth.
          </p>

          {/* Button */}
          <button
            onClick={openResume}
            className="
              mt-8 
              bg-[#F8D33A] 
              px-8 py-3 md:px-10 md:py-4 
              rounded-full 
              text-black 
              font-semibold 
              text-base md:text-lg 
              hover:scale-[1.03] 
              transition 
              flex cursor-target items-center justify-center md:justify-start gap-2
            "
          >
            Download Resume
            
          </button>
        </div>
      </div>
    </div>
  );
}
