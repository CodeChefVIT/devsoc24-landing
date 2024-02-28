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

interface CloseStore {
  activeCard: string;
  setActiveCard: (setClose: string) => void;
}

export const useCloseStore = create<CloseStore>((set) => ({
  activeCard: "DEVSOC 2024",
  setActiveCard: (activeCard: string) => set({ activeCard }),
}));

interface TerminalStore {
  showTerminal: boolean;
  setShowTerminal: (setClose: boolean) => void;
}

export const useTerminalStore = create<TerminalStore>((set) => ({
  showTerminal: true,
  setShowTerminal: (showTerminal: boolean) => set({ showTerminal }),
}));
