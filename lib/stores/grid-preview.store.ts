import { GridPreviewState } from "@/features/products/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGridPreviewStore = create<GridPreviewState>()(
  persist(
    (set) => ({
      count: 4,

      setCount: (count) => set({ count }),
    }),
    {
      name: "products-grid-view",
    },
  ),
);

export default useGridPreviewStore;
