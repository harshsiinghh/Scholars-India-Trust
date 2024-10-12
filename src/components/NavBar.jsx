import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-2 bg-white border-b border-gray-200">
      <div className="flex items-center">
        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-2 text-lg font-bold text-black">Scholars India Trust</span>
      </div>
      <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded">
        Donate Now
      </button>
    </nav>
  );
}