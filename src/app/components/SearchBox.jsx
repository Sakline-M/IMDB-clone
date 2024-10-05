"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setsearch] = useState("");
  const router = useRouter()

  const handleSubmit = (e) =>{
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keyword..."
        className="w-full h-14 rounded-md placeholder-gray-500  outline-none bg-transparent flex-1"
        valu={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
