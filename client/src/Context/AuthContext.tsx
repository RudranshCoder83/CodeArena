import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import toast from "react-hot-toast";
import api from "../api/Axios";

interface User {
  _id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

interface AppContextType {
  user: User | null;
  loading: boolean;
  isAuthModalOpen: boolean;
  setAuthModalOpen: (val: boolean) => void;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const fetchUser = async () => {
    try {
      const { data } = await api.get("/auth/me");
      setUser(data);
    } catch {
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) { setLoading(false); return; }
    fetchUser().finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await api.post("/auth/signin", { email, password });
      localStorage.setItem("token", data.token);
      await fetchUser();
      toast.success("Welcome back!");
      return true;
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Login failed");
      return false;
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await api.post("/auth/signup", { username, email, password });
      localStorage.setItem("token", data.token);
      await fetchUser();
      toast.success("Account created!");
      return true;
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Registration failed");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out");
  };

  return (
    <AppContext.Provider value={{ user, loading, isAuthModalOpen, setAuthModalOpen, login, register, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside AppContextProvider");
  return ctx;
}

// backward compat alias
export { AppContextProvider as AuthProvider };
export function useAuth() { return useAppContext(); }