import React from "react";

const ReactDocs = () => {
  return (
    <div className="p-6 text-white leading-relaxed">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-cyan-400">
        Introduction to React ⚛️
      </h1>

      {/* About React */}
      <section className="mb-8">
        <p className="text-gray-200 mb-4">
          <span className="text-blue-400 font-semibold">React</span> is a
          JavaScript library used for building fast, interactive, and
          component-based user interfaces. It allows developers to build
          complex web applications by combining small, reusable pieces of UI
          called{" "}
          <span className="text-yellow-400 font-semibold">components</span>.
        </p>

        <p className="text-gray-200 mb-4">
          Each component handles its own logic and UI, which makes React
          applications easy to maintain and scale. React uses a{" "}
          <span className="text-green-400 font-semibold">Virtual DOM</span> to
          efficiently update only the parts of the page that change — improving
          performance and user experience.
        </p>

        <p className="text-gray-300">
          React was originally developed by{" "}
          <span className="text-blue-300">Meta (Facebook)</span> and is now
          maintained by a large open-source community. It is one of the most
          popular libraries for building modern front-end applications.
        </p>
      </section>

      {/* Installation Guide */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
          🧩 Installing React (using Vite)
        </h2>
        <p className="text-gray-200 mb-3">
          The easiest way to start a new React project is using{" "}
          <span className="font-semibold text-yellow-400">Vite</span>, a fast
          build tool for modern JavaScript frameworks.
        </p>

        <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-4 text-sm font-mono text-gray-100">
          <p># Create a new React app using Vite</p>
          <p className="text-green-400">
            npm create vite@latest my-react-app -- --template react
          </p>

          <p className="mt-3"># Move into your project folder</p>
          <p className="text-green-400">cd my-react-app</p>

          <p className="mt-3"># Install dependencies</p>
          <p className="text-green-400">npm install</p>

          <p className="mt-3"># Start the development server</p>
          <p className="text-green-400">npm run dev</p>
        </div>

        <p className="text-gray-400 mt-3 italic">
          💡 Tip: Open{" "}
          <span className="text-gray-200">http://localhost:5173</span> in your
          browser to view your app.
        </p>
      </section>

      {/* Tailwind CSS Setup */}
      <section>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
          🎨 Adding Tailwind CSS for Styling
        </h2>
        <p className="text-gray-200 mb-3">
          <span className="text-sky-400 font-semibold">Tailwind CSS</span> is a
          utility-first CSS framework that makes styling React applications
          faster and more consistent. It’s highly recommended for modern UI
          development.
        </p>

        <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-4 text-sm font-mono text-gray-100">
          <p># Install Tailwind and its dependencies</p>
          <p className="text-green-400">
            npm install -D tailwindcss postcss autoprefixer
          </p>

          <p className="mt-3"># Initialize Tailwind config</p>
          <p className="text-green-400">npx tailwindcss init -p</p>

          <p className="mt-3"># Update tailwind.config.js</p>
          <p className="text-gray-300">
            Add this under <code>content</code>:
          </p>
          <pre className="bg-black p-3 rounded mt-2 overflow-x-auto text-gray-200">
{`content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],`}
          </pre>

          <p className="mt-3"># Add Tailwind directives in your CSS</p>
          <pre className="bg-black p-3 rounded mt-2 overflow-x-auto text-gray-200">
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </pre>
        </div>

        <p className="text-gray-400 mt-3 italic">
          🚀 You can now use Tailwind classes like{" "}
          <code className="bg-gray-800 text-cyan-400 px-1 rounded">
            bg-blue-500 text-white p-4
          </code>{" "}
          directly in your React components.
        </p>
      </section>
    </div>
  );
};

export default ReactDocs;
