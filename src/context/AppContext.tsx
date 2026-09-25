import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Role, View } from '@/data/mockData';

interface AppState {
  view: View;
  role: Role | null;
  navigate: (view: View) => void;
  loginAs: (role: Role) => void;
  logout: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View>('public');
  const [role, setRole] = useState<Role | null>(null);

  const navigate = (v: View) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const loginAs = (r: Role) => {
    setRole(r);
    setView(r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const logout = () => {
    setRole(null);
    setView('public');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <AppContext.Provider value={{ view, role, navigate, loginAs, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
