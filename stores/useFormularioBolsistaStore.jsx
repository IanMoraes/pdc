import { create } from "zustand";

const useUserDataStore = create((set) => ({
    formularioBolsista: {},
    setData: (data) => set({ userData: data }),
    setLocalStore: (data) => {
        localStorage.setItem('formularioBolsista', JSON.stringify(data))
    },
    getLocalStore: () => {
        return JSON.parse(localStorage.getItem('formularioBolsista'))
    }
}));

export default useUserDataStore;
