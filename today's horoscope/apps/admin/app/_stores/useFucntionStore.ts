import { create } from 'zustand';

interface UseFunctionStore {
  isOpenedFunction: boolean;
  setIsOpenedFunction: (state: boolean) => void;
}

const useFunctionStore = create<UseFunctionStore>(set => ({
  isOpenedFunction: false,
  setIsOpenedFunction: (state: boolean) => set(() => ({ isOpenedFunction: state })),
}));

export default useFunctionStore;
