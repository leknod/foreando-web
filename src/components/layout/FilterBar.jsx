"use client";

import { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";

const categories = [
  "Todas las categorías",
  "Tecnología",
  "Informática",
  "Motor",
  "Deportes",
  "Adultos",
  "Otros",
  "Ocio y entretenimiento",
  "Fotografía",
  "General",
  "Economía y finanzas",
];

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  availableCategories,
}) {
  // Use props if provided, otherwise fallback to local state
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [localSelectedCategory, setLocalSelectedCategory] = useState(
    "Todas las categorías",
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentSearchQuery =
    searchQuery !== undefined ? searchQuery : localSearchQuery;
  const currentCategory =
    selectedCategory !== undefined ? selectedCategory : localSelectedCategory;

  // Use dynamically passed categories or fallback to hardcoded ones
  const displayCategories = availableCategories || categories;

  const handleSearchUpdate = (value) => {
    if (onSearchChange) onSearchChange(value);
    setLocalSearchQuery(value);
  };

  const handleCategorySelect = (category) => {
    if (onCategoryChange) onCategoryChange(category);
    setLocalSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const clearSearch = () => {
    handleSearchUpdate("");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          {!currentSearchQuery && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Search className="mr-2 h-5 w-5 text-slate-400" />
              <span className="text-slate-400">Buscar foros...</span>
            </div>
          )}
          <input
            type="text"
            value={currentSearchQuery}
            onChange={(e) => handleSearchUpdate(e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-center text-slate-900 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
          />
          {currentSearchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 transition-colors hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="relative md:w-56">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex h-12 w-full items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 text-slate-700 transition-all duration-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
          >
            <span className="truncate text-sm font-medium">
              {currentCategory}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />

              <div className="absolute top-full right-0 left-0 z-20 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
                <div className="max-h-64 overflow-y-auto py-2">
                  {displayCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        currentCategory === category
                          ? "bg-blue-50 font-medium text-blue-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
