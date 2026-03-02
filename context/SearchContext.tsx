"use client";

import { createContext, useContext, useState } from "react";

type SearchContextType = {
  search: string;
  setSearch: (value: string) => void;
  clearSearch: () => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
   const [search, setSearch] = useState("");

   const clearSearch = () => {
    setSearch("");
   };

   return (
    <SearchContext.Provider value={{ search, setSearch , clearSearch}}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider");
  }
  return context;
}