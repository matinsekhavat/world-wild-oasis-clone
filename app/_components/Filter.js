"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(value) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", value);
    console.log(params.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("small")}
      >
        1&mdash; 3 guest
      </button>{" "}
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("medium")}
      >
        4&mdash; 7 guest
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("large")}
      >
        8&mdash; 12 guest
      </button>
    </div>
  );
}

export default Filter;
