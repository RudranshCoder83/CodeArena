import { ArrowIcon } from "../Components/Icons";
import CodeWindow from "../Components/CodeWindow";

export default function HeroSection() {
  return (
    // min-h-[820px] ko min-h-[700px] kiya, aur pt-[175px] ko pt-[120px] kiya taaki upar shift ho jaye
    <section className="relative min-h-[760px] overflow-visible pt-[130px] max-w-[1180px] w-[calc(100%-48px)] mx-auto lg:pt-[160px]">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(35,74,145,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(35,74,145,0.08)_1px,transparent_1px)] bg-[size:46px_46px] w-[100vw] left-1/2 -translate-x-1/2" style={{ WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 85%)" }} aria-hidden="true" />
      <div className="absolute w-[660px] h-[660px] -right-[180px] top-[60px] bg-[radial-gradient(circle,rgba(16,93,232,0.31),rgba(15,66,153,0.1)_38%,transparent_70%)] blur-[8px]" aria-hidden="true" />
      
      <div className="relative z-10 w-full lg:w-[48%]">
        <div className="flex items-center gap-2.5 text-[#98a0b2] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em]">
          <span className="w-[25px] h-[1px] bg-[#d4ff24] shadow-[0_0_8px_#d4ff24]" /> THE 1V1 LIVE CODING ARENA
        </div>
        <h1 className="my-[25px] text-[clamp(42px,5.3vw,76px)] leading-[0.96] tracking-[-0.065em] font-bold">
          STOP CODING ALONE.<br />
          <em className="text-[#d4ff24] not-italic drop-shadow-[0_0_32px_rgba(212,255,36,0.15)]">START COMPETING.</em>
        </h1>
        <p className="max-w-[555px] text-[#a3abba] text-[17px] leading-[1.7]">
          Matchmake in real-time. Solve algorithmic challenges. Execute your C++ code instantly. Climb the global Elo leaderboard.
        </p>
        <div className="flex items-center gap-[25px] mt-[34px]">
          <button className="bg-[#d4ff24] text-[#080b07] min-h-[58px] px-6 inline-flex items-center justify-center gap-[38px] font-['JetBrains_Mono',monospace] font-bold text-[12px] tracking-[0.05em] shadow-[7px_7px_0_rgba(21,88,201,0.8),0_0_30px_rgba(212,255,36,0.12)] hover:-translate-y-[3px] hover:-translate-x-[3px] hover:shadow-[11px_11px_0_rgba(21,88,201,0.9),0_0_40px_rgba(212,255,36,0.25)] transition-all">
            ENTER THE ARENA <ArrowIcon className="w-4" />
          </button>
          <span className="flex items-center gap-2 text-[#abb3c2] font-['JetBrains_Mono',monospace] font-medium text-[9px] tracking-[0.08em]">
            <i className="w-1.5 h-1.5 bg-[#d4ff24] rounded-full shadow-[0_0_10px_#d4ff24]" /> 2,847 DEVS ONLINE
          </span>
        </div>
      </div>
      
      {/* top-[202px] ko top-[140px] kar diya taaki window thoda upar aaye aur bina scroll ke dikhe */}
      <div className="relative z-10 mt-14 w-full lg:absolute lg:right-0 lg:top-[190px] lg:mt-0 lg:w-[min(620px,54vw)]" style={{ perspective: "1200px" }}>
        <CodeWindow />
      </div>
    </section>
  );
}