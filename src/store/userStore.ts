import { create } from "zustand";
import { devtools } from "zustand/middleware"; // devtools 미들웨어 추가

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "UserStore", // Redux DevTools에서 보여질 이름
    }
  )
);
