"use client";

import React from "react";

import { useState } from "react";
import { Search, X } from "lucide-react";

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log("Searching for:", searchQuery);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar foros..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-center text-slate-900 transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
        />

        {/* Centered Search Icon - only visible when no text */}
        {!searchQuery && (
          <div className="pointer-events-none absolute inset-y-0 left-1/2 flex -translate-x-20 items-center">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
        )}

        {/* Clear Button - appears when there's text */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-14 flex items-center text-slate-400 transition-colors hover:text-slate-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex h-12 w-12 items-center justify-center rounded-r-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-all duration-200 hover:from-blue-600 hover:to-blue-700"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
