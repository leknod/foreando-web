"use client";

import { useState, useMemo } from "react";
import { FilterBar } from "@/components/layout/FilterBar";
import ForumCard from "@/components/layout/ForumCard";

export default function ForumsList({ initialForums }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las categorías",
  );

  // Get uniquely available categories from the initial forums list
  const availableCategories = useMemo(() => {
    const cats = new Set(
      initialForums.map((forum) => forum.categories?.name).filter(Boolean),
    );
    return ["Todas las categorías", ...Array.from(cats).sort()];
  }, [initialForums]);

  const filteredForums = useMemo(() => {
    return initialForums.filter((forum) => {
      const matchesSearch =
        forum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (forum.short_description &&
          forum.short_description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()));

      const forumCategory = forum.categories?.name || "";
      const matchesCategory =
        selectedCategory === "Todas las categorías" ||
        forumCategory.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [initialForums, searchQuery, selectedCategory]);

  return (
    <>
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        availableCategories={availableCategories}
      />

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredForums.length > 0 ? (
          filteredForums.map((forum, index) => (
            <ForumCard key={forum.id} forum={forum} index={index} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-slate-500">
            No se encontraron foros que coincidan con{" "}
            {searchQuery ? `"${searchQuery}"` : "la categoría seleccionada"}.
          </div>
        )}
      </div>
    </>
  );
}
