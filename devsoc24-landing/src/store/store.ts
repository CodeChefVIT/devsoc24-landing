import { create } from "zustand";

interface TaskStore {
  showGlitch: boolean;
  setGlitch: (showGlitch: boolean) => void;
}
interface CloseStore {
  activeCard: string;
  setActiveCard: (setClose: string) => void;
}

const useGlitchStore = create<TaskStore>((set) => ({
  showGlitch: false,
  setGlitch: (showGlitch: boolean) => set({ showGlitch }),
}));

export default useGlitchStore;

export const useCloseStore = create<CloseStore>((set) => ({
  activeCard: "DEVSOC 2024",
  setActiveCard: (activeCard: string) => set({ activeCard }),
}));
