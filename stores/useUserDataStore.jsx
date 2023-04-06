import { create } from "zustand";

const useUserDataStore = create((set) => ({
    userData: {},
    setData: (data) => set({ userData: data }),
    setLocalStore: (data) => {
        localStorage.setItem('userData', JSON.stringify(data))
    },
    getLocalStore: () => {
        return JSON.parse(localStorage.getItem('userData'))
    }
}));

export default useUserDataStore;
