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
  activeCard: string[];
  setActiveCard: (setClose: string[]) => void;
}

export const useCloseStore = create<CloseStore>((set) => ({
  activeCard: ["DEVSOC 2024"],
  setActiveCard: (activeCard: string[]) => set({ activeCard }),
}));

interface TerminalStore {
  showTerminal: boolean;
  setShowTerminal: (setClose: boolean) => void;
}

export const useTerminalStore = create<TerminalStore>((set) => ({
  showTerminal: true,
  setShowTerminal: (showTerminal: boolean) => set({ showTerminal }),
}));

interface selectedStore {
  selectedComponent: string | null;
  setSelectedComponent: (setClose: string | null) => void;
}

export const useSelectedStore = create<selectedStore>((set) => ({
  selectedComponent: "DEVSOC 2024",
  setSelectedComponent: (selectedComponent: string | null) =>
    set({ selectedComponent }),
}));

interface FooterStore {
  showFooter: boolean;
  setShowFooter: (showFooter: boolean) => void;
}

export const useFooterStore = create<FooterStore>((set) => ({
  showFooter: false,
  setShowFooter: (showFooter: boolean) => set({ showFooter }),
}));
interface mobileTerminalSizeStore {
  size: boolean;
  setSize: (showFooter: boolean) => void;
}

export const useMobileTerminalStore = create<mobileTerminalSizeStore>((set) => ({
  size: false,
  setSize: (size: boolean) => set({ size }),
}));

interface TypeStore {
  typingCompleted: boolean;
  setTypingCompleted: (typingCompleted: boolean) => void;
}

export const useTypeStore = create<TypeStore>((set) => ({
  typingCompleted: false,
  setTypingCompleted: (typingCompleted: boolean) => set({ typingCompleted }),
}));

export const useType2Store = create<TypeStore>((set) => ({
  typingCompleted: false,
  setTypingCompleted: (typingCompleted: boolean) => set({ typingCompleted }),
}));
