import { create } from "zustand";

interface TestState {
  message: string;
  loading: boolean;
  fetchTest: () => Promise<void>;
}

const useStore = create<TestState>((set) => ({
  message: "",
  loading: false,
  fetchTest: async () => {
    try {
      set({ loading: true });
      const response = await fetch("http://localhost:5000/api/test");
      const data = await response.json();
      set({ message: data.message });
    } catch (error) {
      console.error("请求失败:", error);
      set({ message: "请求失败" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;
