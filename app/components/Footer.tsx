import React from "react";
import { SiReactivex } from "react-icons/si";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white w-full ">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex gap-8">
        {/* Column 1 - Logo and About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <SiReactivex className="text-3xl text-red-700 animate-spin-slow" />
            <h2 className="font-bold text-xl">React Docs</h2>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed hidden sm:block">
            A learning hub showcasing React fundamentals, hooks, and live
            examples — built by developers, for developers.
          </p>
        </div>

        {/* Column 2 - Quick Links */}

        {/* Column 3 - Socials */}
        <div>
          <h3 className="font-semibold hidden sm:block whitespace-nowrap text-lg mb-3 border-b border-blue-300 pb-1 w-fit">
            Connect Me
          </h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-400 text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} React Docs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
