import { create } from "zustand";

interface TaskStore {
  showGlitch: boolean;
  setGlitch: (showGlitch: boolean) => void;
}

const useGlitchStore = create<TaskStore>((set) => ({
  showGlitch: false,
  setGlitch: (showGlitch: boolean) => set({ showGlitch }),
}));

export default useGlitchStore;