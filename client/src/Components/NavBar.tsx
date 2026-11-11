import { ArrowIcon, BoltIcon } from "./Icons";

const Logo = () => (
  <a href="#top" className="flex items-center gap-3 font-bold text-[18px] tracking-[-0.04em]" aria-label="Code Arena home">
    <span className="text-[#2c73ff] flex items-center font-['JetBrains_Mono',monospace] font-semibold text-[12px]">
      <span>&lt;</span>
      <BoltIcon className="text-[#d4ff24] w-[15px] -mx-[2px]" />
      <span>/&gt;</span>
    </span>
    <span>Code Arena<span className="text-[#d4ff24] animate-[blink_1.2s_step-end_infinite]">_</span></span>
  </a>
);

export default function NavBar() {
  const handleAction = () => {
    document.querySelector("#leaderboard")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed z-50 top-0 inset-x-0 border-b border-[#5674ac33] bg-[#030407ad] backdrop-blur-[18px]">
      <nav className="h-[74px] flex items-center justify-between max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        <Logo />
        <div className="hidden md:flex gap-9 text-[#aab1c0] font-['JetBrains_Mono',monospace] font-medium text-[11px] tracking-[0.08em] uppercase">
          <a href="#how" className="hover:text-[#d4ff24] transition-colors">How it works</a>
          <a href="#features" className="hover:text-[#d4ff24] transition-colors">Features</a>
          <a href="#leaderboard" className="hover:text-[#d4ff24] transition-colors">Leaderboard</a>
        </div>
        
        {/* Animated Sign In Button */}
        <button 
          className="relative overflow-hidden group text-white bg-[#124cae] border border-[#3176ec] min-h-[40px] px-4 flex items-center justify-center font-['JetBrains_Mono',monospace] font-bold text-[11px] tracking-[0.08em] shadow-[inset_0_0_24px_rgba(63,128,255,0.15)] transition-colors duration-300 hover:text-[#080b07] hover:border-[#d4ff24]" 
          onClick={handleAction}
        >
          {/* Yellow fill background */}
          <span className="absolute inset-0 bg-[#d4ff24] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
          
          {/* Button Text & Icon */}
          <span className="relative z-10 flex items-center gap-3">
            SIGN IN <ArrowIcon className="w-4" />
          </span>
        </button>
      </nav>
    </header>
  );
}