import { create } from "zustand";
import { persist } from "zustand/middleware";

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

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))
