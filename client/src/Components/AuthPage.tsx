import { useState } from "react";
import { ArrowIcon } from "./Icons";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    // Fixed overlay jo website ko background me blur kar dega
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030407cc] backdrop-blur-md transition-opacity"
      onClick={onClose} // Background pe click karne se band hoga
    >
      {/* Modal Box */}
      <div 
        className="relative w-[90%] max-w-[440px] bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[rgba(53,104,202,0.32)] shadow-[0_30px_90px_rgba(0,0,0,0.8)] p-[40px] transition-all hover:border-[rgba(212,255,36,0.4)]"
        onClick={(e) => e.stopPropagation()} // Box ke andar click karne se band NAHI hoga
      >
        
        {/* Close Button (X) */}
        <button 
          onClick={onClose} 
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
          {isLogin ? "Welcome back," : "Join the arena,"}<br />
          <span className="text-[#d4ff24]">Developer.</span>
        </h2>

        {/* Tabs */}
        <div className="flex border-b border-[#1d2636] mb-6">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 pb-3 text-[10px] font-['JetBrains_Mono',monospace] tracking-[0.1em] font-bold transition-colors ${isLogin ? 'text-[#d4ff24] border-b-2 border-[#d4ff24]' : 'text-[#5d687b] hover:text-[#aab1c0]'}`}
          >
            SIGN IN
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 pb-3 text-[10px] font-['JetBrains_Mono',monospace] tracking-[0.1em] font-bold transition-colors ${!isLogin ? 'text-[#d4ff24] border-b-2 border-[#d4ff24]' : 'text-[#5d687b] hover:text-[#aab1c0]'}`}
          >
            SIGN UP
          </button>
        </div>

        {/* Backend Connectable Form */}
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          
          {!isLogin && (
            <div>
              <label className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em] mb-2 block">USERNAME</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4f5a6e] font-['JetBrains_Mono',monospace] text-[11px]">@</span>
                <input 
                  type="text" 
                  name="username"
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
              name="email"
              placeholder="dev@example.com"
              className="w-full h-[48px] bg-[#080b10] border border-[#253b60] px-4 text-[#e8edf6] font-['JetBrains_Mono',monospace] text-[11px] focus:outline-none focus:border-[#d4ff24] focus:shadow-[0_0_15px_rgba(212,255,36,0.15)] transition-all"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em] block">PASSWORD</label>
              {isLogin && <a href="#" className="text-[#65728a] font-['JetBrains_Mono',monospace] text-[8px] hover:text-[#d4ff24]">FORGOT?</a>}
            </div>
            <input 
              type="password" 
              name="password"
              placeholder="••••••••••••"
              className="w-full h-[48px] bg-[#080b10] border border-[#253b60] px-4 text-[#e8edf6] font-['JetBrains_Mono',monospace] text-[11px] focus:outline-none focus:border-[#d4ff24] focus:shadow-[0_0_15px_rgba(212,255,36,0.15)] transition-all"
              required
            />
          </div>

          <button type="submit" className="relative overflow-hidden group mt-2 bg-[#d4ff24] text-[#080b07] h-[52px] px-6 flex items-center justify-center gap-4 font-['JetBrains_Mono',monospace] font-bold text-[11px] tracking-[0.05em] shadow-[5px_5px_0_rgba(21,88,201,0.5)] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[7px_7px_0_rgba(21,88,201,0.7)] transition-all">
            {isLogin ? "INITIALIZE LOGIN" : "CREATE ACCOUNT"} <ArrowIcon className="w-4" />
          </button>
        </form>

        <div className="flex items-center gap-4 my-5">
          <div className="flex-1 h-[1px] bg-[#1d2636]"></div>
          <span className="text-[#5d687b] font-['JetBrains_Mono',monospace] font-medium text-[8px] tracking-[0.1em]">OR CONTINUE WITH</span>
          <div className="flex-1 h-[1px] bg-[#1d2636]"></div>
        </div>

        <button className="w-full h-[52px] bg-[#0d1119] border border-[#202a39] flex items-center justify-center gap-3 text-[#aab1c0] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.08em] hover:bg-[rgba(21,88,201,0.1)] hover:border-[#3176ec] hover:text-white transition-all">
          <span className="w-[18px] h-[18px] grid place-items-center border border-[#475167] rounded-full text-[10px] text-[#aeb5c3] font-bold">G</span>
          GOOGLE OAUTH
        </button>

      </div>
    </div>
  );
}