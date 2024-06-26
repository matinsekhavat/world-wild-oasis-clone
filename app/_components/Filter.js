"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const capacity = searchParams.get("capacity");
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
      <Button handleFilter={handleFilter} filter="all" activeFilter={capacity}>
        All
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="small"
        activeFilter={capacity}
      >
        1&mdash; 3 guest
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="medium"
        activeFilter={capacity}
      >
        4&mdash; 7 guest
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="large"
        activeFilter={capacity}
      >
        8&mdash; 12 guest
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  // console.log(activeFilter, filter);
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-500" : "text-primary-50"
      } `}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
export default Filter;
