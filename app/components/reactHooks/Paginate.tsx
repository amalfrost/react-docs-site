import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { hooksData } from "~/data/reacthooks";

// --- Example hook data ---


function HookCard({ hook }) {
  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-md mb-6 text-white">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-2">
        {hook.name}
      </h2>
      <p className="text-gray-300 mb-3">{hook.description}</p>
      {hook.precaution && (
        <div className="bg-gray-800 p-3 rounded mb-3">
          <h3 className="text-yellow-400 font-semibold mb-1">⚠️ Precaution</h3>
          <p className="text-gray-300 text-sm">{hook.precaution}</p>
        </div>
      )}
<pre className="bg-black p-3 whitespace-break-spaces rounded text-green-400 text-sm overflow-x-auto max-w-full">
        {hook.example}
      </pre>
    </div>
  );
}

export default function HooksPagination({ itemsPerPage = 1 }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = hooksData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(hooksData.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % hooksData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-6 text-white overflow-x-hidden max-w-full">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        React Hooks Reference 🧩
      </h1>

      {currentItems.map((hook) => (
        <HookCard key={hook.name} hook={hook} />
      ))}

      {/* Pagination container */}
      <div className="mt-8 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next ›"
          previousLabel="‹ Prev"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          containerClassName="flex flex-wrap justify-center items-center gap-2 w-fit max-w-full"
          pageLinkClassName="px-3 py-1 cursor-pointer bg-gray-800 text-gray-300 rounded hover:bg-blue-600 hover:text-white transition"
          activeLinkClassName="bg-blue-600 text-white"
          previousLinkClassName="px-3 cursor-pointer py-1 bg-gray-800 text-gray-300 rounded hover:bg-blue-600 hover:text-white transition"
          nextLinkClassName="px-3 py-1 cursor-pointer bg-gray-800 text-gray-300 rounded hover:bg-blue-600 hover:text-white transition"
          breakLinkClassName="px-2 text-gray-400"
        />
      </div>
    </div>
  );
}
