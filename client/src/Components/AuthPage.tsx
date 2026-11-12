import React, { useState } from "react";
import { ArrowIcon } from "./Icons";
import { useAppContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

export default function AuthModal() {
  const { isAuthModalOpen, setAuthModalOpen, login, register } = useAppContext();

  const [isLoginTab, setIsLoginTab] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Agar modal band hai toh kuch render mat karo
  if (!isAuthModalOpen) return null;

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleClose = () => {
    resetForm();
    setAuthModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoginTab && password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setFormLoading(true);
    let success: boolean;

    if (isLoginTab) {
      success = await login(email, password);
    } else {
      success = await register(username, email, password);
    }

    setFormLoading(false);
    if (success) {
      handleClose();
    }
  };

  const handleGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030407cc] backdrop-blur-md transition-opacity"
      onClick={handleClose}
    >
      <div
        className="relative w-[90%] max-w-[440px] bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[rgba(53,104,202,0.32)] shadow-[0_30px_90px_rgba(0,0,0,0.8)] p-[40px] transition-all hover:border-[rgba(212,255,36,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#5d687b] hover:text-[#d4ff24] transition-colors"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em] mb-4 text-center">
          [ SYSTEM AUTHENTICATION ]
        </div>
        <h2 className="text-[28px] leading-[1.1] tracking-[-0.04em] font-bold text-center mb-8">
          {isLoginTab ? "Welcome back," : "Join the arena,"}<br />
          <span className="text-[#d4ff24]">Developer.</span>
        </h2>

        {/* Tabs */}
        <div className="flex border-b border-[#1d2636] mb-6">
          <button
            type="button"
            onClick={() => setIsLoginTab(true)}
            className={`flex-1 pb-3 text-[10px] font-['JetBrains_Mono',monospace] tracking-[0.1em] font-bold transition-colors ${isLoginTab ? 'text-[#d4ff24] border-b-2 border-[#d4ff24]' : 'text-[#5d687b] hover:text-[#aab1c0]'}`}
          >
            SIGN IN
          </button>
          <button
            type="button"
            onClick={() => setIsLoginTab(false)}
            className={`flex-1 pb-3 text-[10px] font-['JetBrains_Mono',monospace] tracking-[0.1em] font-bold transition-colors ${!isLoginTab ? 'text-[#d4ff24] border-b-2 border-[#d4ff24]' : 'text-[#5d687b] hover:text-[#aab1c0]'}`}
          >
            SIGN UP
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLoginTab && (
            <div>
              <label className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em] mb-2 block">USERNAME</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4f5a6e] font-['JetBrains_Mono',monospace] text-[11px]">@</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="async_killer"
                  className="w-full h-[48px] bg-[#080b10] border border-[#253b60] pl-8 pr-4 text-[#e8edf6] font-['JetBrains_Mono',monospace] text-[11px] focus:outline-none focus:border-[#d4ff24] focus:shadow-[0_0_15px_rgba(212,255,36,0.15)] transition-all"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em] mb-2 block">EMAIL ADDRESS</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="dev@example.com"
              className="w-full h-[48px] bg-[#080b10] border border-[#253b60] px-4 text-[#e8edf6] font-['JetBrains_Mono',monospace] text-[11px] focus:outline-none focus:border-[#d4ff24] focus:shadow-[0_0_15px_rgba(212,255,36,0.15)] transition-all"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em] block">PASSWORD</label>
              {isLoginTab && <a href="#" className="text-[#65728a] font-['JetBrains_Mono',monospace] text-[8px] hover:text-[#d4ff24]">FORGOT?</a>}
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full h-[48px] bg-[#080b10] border border-[#253b60] pl-4 pr-16 text-[#e8edf6] font-['JetBrains_Mono',monospace] text-[11px] focus:outline-none focus:border-[#d4ff24] focus:shadow-[0_0_15px_rgba(212,255,36,0.15)] transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5d687b] hover:text-[#d4ff24] font-['JetBrains_Mono',monospace] text-[8px] tracking-[0.1em]"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={formLoading}
            className="relative overflow-hidden group mt-2 bg-[#d4ff24] text-[#080b07] h-[52px] px-6 flex items-center justify-center gap-4 font-['JetBrains_Mono',monospace] font-bold text-[11px] tracking-[0.05em] shadow-[5px_5px_0_rgba(21,88,201,0.5)] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[7px_7px_0_rgba(21,88,201,0.7)] transition-all disabled:opacity-60"
          >
            {formLoading ? "PROCESSING..." : isLoginTab ? "INITIALIZE LOGIN" : "CREATE ACCOUNT"} <ArrowIcon className="w-4" />
          </button>
        </form>

        <div className="flex items-center gap-4 my-5">
          <div className="flex-1 h-[1px] bg-[#1d2636]"></div>
          <span className="text-[#5d687b] font-['JetBrains_Mono',monospace] font-medium text-[8px] tracking-[0.1em]">OR CONTINUE WITH</span>
          <div className="flex-1 h-[1px] bg-[#1d2636]"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full h-[52px] bg-[#0d1119] border border-[#202a39] flex items-center justify-center gap-3 text-[#aab1c0] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.08em] hover:bg-[rgba(21,88,201,0.1)] hover:border-[#3176ec] hover:text-white transition-all"
        >
          <span className="w-[18px] h-[18px] grid place-items-center border border-[#475167] rounded-full text-[10px] text-[#aeb5c3] font-bold">G</span>
          GOOGLE OAUTH
        </button>
      </div>
    </div>
  );
}