import { create } from "zustand";
import { persist } from "zustand/middleware";

// opdater her så den hænger sammen med GuestPassPriceCalculator komponent
const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
      resetCount: () => set({ count: 0 }),
    }),
    { name: "count-storage" }
  )
);

export default useStore;
