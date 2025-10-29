import React from "react";

export default function Thesis() {
  const redirectToThesis = () => {
    const targetUrl =
      "https://resolute-jam-a6f.notion.site/Scalable-and-Privacy-Preserving-Deepfake-Detection-Framework-Accepted-for-Publication-at-SLDT-2025-28c5f9b148b980ed9cf4c277b926d961";
    window.open(targetUrl, "_blank");
  };

  return (
    <div className="block bg-white rounded-3xl p-4 sm:p-6 lg:p-7 h-full w-full relative">
      {/* Top-right external link button */}
      <button
        className="absolute z-10 right-3 top-3 sm:right-4 sm:top-5 bg-white rounded-full p-1.5 sm:p-2 transform transition duration-500 hover:scale-125 border"
        onClick={redirectToThesis}
        aria-label="Open thesis link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-3 h-3 sm:w-4 sm:h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>

      {/* Date */}
      <p className="text-xs sm:text-sm text-gray-400 mb-2 lg:mb-7">
        September, 2025
      </p>

      {/* Title */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
        Research Project — Accepted at SLDT 2025
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Honours thesis accepted at the 2025 Symposium on Learning, Data, and
        Technology. A scalable, privacy-preserving deepfake detection framework
        using blockchain verification and cryptographic privacy mechanisms.
      </p>
    </div>
  );
}
