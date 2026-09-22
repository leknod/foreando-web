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
          className="h-12 w-full rounded-xl border border-border bg-card px-4 text-center text-foreground transition-all duration-200 placeholder:text-foreground-subtle focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
        />

        {/* Centered Search Icon - only visible when no text */}
        {!searchQuery && (
          <div className="pointer-events-none absolute inset-y-0 left-1/2 flex -translate-x-20 items-center">
            <Search className="h-5 w-5 text-foreground-subtle" />
          </div>
        )}

        {/* Clear Button - appears when there's text */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-14 flex items-center text-foreground-subtle transition-colors hover:text-foreground-muted"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex h-12 w-12 items-center justify-center rounded-r-xl bg-linear-to-r from-primary to-primary-hover text-primary-foreground transition-all duration-200 hover:from-primary-hover hover:to-primary-active"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
