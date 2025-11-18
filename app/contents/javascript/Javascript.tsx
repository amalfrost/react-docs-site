import { useState } from "react";
import { jsTopics } from "~/data/javascript";

export default function Javascript() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="p-6 text-white">
        
      <h1 className="text-3xl font-bold mb-4">JavaScript Fundamentals ⚡</h1>

      {jsTopics.map((topic) => (
        <div key={topic.id} className="mb-4">
          <button
            onClick={() => setOpenId(openId === topic.id ? null : topic.id)}
            className="text-xl font-semibold text-cyan-400 flex justify-between w-full hover:text-cyan-300"
          >
            {topic.title}
            <span>{openId === topic.id ? "−" : "+"}</span>
          </button>
          {openId === topic.id && (
            <p className="text-gray-300 mt-2">{topic.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
