import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: any;
  user_metadata: {
    organization: {
      id: string;
      name: string;
      logo_url: string | undefined;
    };
    first_name: string;
    last_name: string;
    photo_url: string;
  };
  identities: any[];
  created_at: string;
  updated_at: string;
};
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
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
