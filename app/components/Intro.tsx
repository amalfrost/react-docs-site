import React from "react";
import { FaBook, FaCode, FaBrain, FaBolt } from "react-icons/fa";

const sections = [
  {
    title: "Docs",
    description:
      "Dive into concise, easy-to-understand explanations of React fundamentals — hooks, lifecycle, context, performance, and more.",
    icon: <FaBook className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Examples",
    description:
      "Explore live, editable code examples for every topic. See React hooks and components in action, and experiment right inside the browser.",
    icon: <FaCode className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Interview Prep",
    description:
      "Sharpen your skills with curated React interview questions, coding challenges, and hands-on practice sections.",
    icon: <FaBrain className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Patterns & Performance",
    description:
      "Learn modern React patterns, optimization tips, and best practices used in real-world projects.",
    icon: <FaBolt className="w-8 h-8 text-yellow-400" />,
  },
];

const Intro = () => {
  return (
    <section className="relative py-24 px-6 md:px-12  text-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Welcome to <span className="text-blue-400">ReactDocs</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          This interactive documentation site helps you learn, experiment, and
          prepare for React development — all in one place.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-900/50 hover:bg-gray-800 cursor-pointer transition-all border border-gray-800 rounded-2xl p-6 text-left shadow-lg backdrop-blur-sm hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {section.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
