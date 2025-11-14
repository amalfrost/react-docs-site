import { FaArrowCircleRight } from "react-icons/fa";
import Intro from "./Intro";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white py-32 px-6 md:px-12"
    style={{ backgroundImage: "url('/pattern-randomized.svg')" }}
    >
      {/* Overlay for subtle gradient */}
      <div className="absolute from-black/40 to-black/90 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Master <span className="text-blue-400">React</span> Like a Pro
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
          Interactive documentation with live examples, modern hooks, and advanced concepts — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all">
            Get Started <FaArrowCircleRight size={18} />
          </button>
          <button className="border border-gray-500 hover:border-white cursor-pointer text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all">
            View Examples
          </button>
        </div>
      </div>

      {/* Decorative React logo pattern */}
      <div className="absolute -bottom-20 right-10 opacity-10 w-64 h-64 pointer-events-none">
        <img src="/react-icon.svg" alt="React Logo" className="w-full h-full" />
      </div>
      <Intro />
    </section>
  );
}
