import { type User } from '@/lib/types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  user: User | null;
};
type Actions = {
  setUser: (user: State['user']) => void;
  clearUser: () => void;
};

export const useUser = create(
  persist<State & Actions>(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user_store',
    }
  )
);
