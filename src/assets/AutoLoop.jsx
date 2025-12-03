import React from "react";

const row1 = [
  { label: "Web Development", color: "bg-[#AEE1FA]" },
  { icon: "🌟" },
  { label: "No Code Development", color: "bg-[#AEE1FA]" },
  { icon: "✨" },
  { label: "Design ", color: "bg-[#F7A8D8]" },
  { icon: "⭐" },
  { label: "AI Interaction", color: "bg-[#F7A8D8]" },
  { icon: "🌼" },
  { label: "Freelancer", color: "bg-[#F9DA73]" },
];

const row2 = [
  { label: "Design", color: "bg-[#F9DA73]" },
  { icon: "🔆" },
  { label: "Developer", color: "bg-[#F7A8D8]" },
  { icon: "🌟" },
  { label: "Search Engine Optimization", color: "bg-[#F9DA73]" },
  { icon: "✨" },
  { label: "Web Application", color: "bg-[#AEE1FA]" },
];

const Pill = ({ label, color }) => (
  <div
    className={`${color} px-6 py-3 rounded-full text-black font-medium whitespace-nowrap`}
  >
    {label}
  </div>
);

const Icon = ({ icon }) => <span className="text-2xl px-4">{icon}</span>;

const Row = ({ data, reverse }) => (
  <div
    className={`flex gap-6 whitespace-nowrap ${
      reverse ? "animate-marquee-reverse" : "animate-marquee"
    }`}
  >
    {[...data, ...data].map((item, idx) =>
      item.label ? (
        <Pill key={idx} label={item.label} color={item.color} />
      ) : (
        <Icon key={idx} icon={item.icon} />
      )
    )}
  </div>
);

export default function TwoLineMarquee() {
  return (
    <div className="w-full flex flex-col gap-6 overflow-hidden py-6">
      {/* Line 1 - Left → Right */}
      <Row data={row1} reverse={false} />

      {/* Line 2 - Right → Left */}
      <Row data={row2} reverse={true} />
    </div>
  );
}
