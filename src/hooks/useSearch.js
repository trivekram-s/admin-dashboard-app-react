import { useMemo } from "react";

export default function useSearch(items = [], query = "") {
  return useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.name?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        String(item.price).includes(q)
    );
  }, [items, query]);
}
