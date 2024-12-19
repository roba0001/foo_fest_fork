import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      count: 0,
      reservationId: null,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
      resetCount: () => set({ count: 0 }),
      setCount: (value) => set({ count: value }),
      setReservationId: (id) => set({ reservationId: id }),
    }),
    { name: "count-storage" }
  )
);
