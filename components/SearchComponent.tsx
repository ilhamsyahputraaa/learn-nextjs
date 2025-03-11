"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    router.push(`?query=${e.target.value}`); // Update URL saat user mengetik
  };

  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={search}
      onChange={handleSearch}
      className="p-2 border border-gray-300 rounded-md w-fit"
    />
  );
}
