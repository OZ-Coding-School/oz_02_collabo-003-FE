import { create } from 'zustand';

interface UseTabStore {
  tabId: number;
  setTabId: (newTabId: number) => void;
}

const useTabStore = create<UseTabStore>(set => ({
  tabId: 1,
  setTabId: (newTabId: number) => set(() => ({ tabId: newTabId })),
}));

export default useTabStore;
