import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      count: 0,
      reservationId: null,

      regularTicketPrice: 799,
      vipTicketPrice: 1299,
      regularPriceCounter: 0,
      vipPriceCounter: 0,
      optionalGreenCamping: false,
      selectedTentPrice: 0,

      // resetCount: () => set({ count: 0 }),
      setCount: (value) => set({ count: value }),
      setReservationId: (id) => set({ reservationId: id }),
    }),
    { name: "count-storage" }
  )
);
