import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
      resetCount: () => set({ count: 0 }),
      setCount: (value) => set({ count: value }), // New function to set count directly
    }),
    { name: "count-storage" }
  )
);

export default useStore