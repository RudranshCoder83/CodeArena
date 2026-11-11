import Logo from "./Logo";
import { ArrowIcon, GithubIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-[80px] md:pt-[105px] bg-[linear-gradient(to_bottom,#0b327b,#071d45_72%,#050810)] border-t border-[#2573ec]">
      {/* Background Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-70 bg-[linear-gradient(rgba(35,74,145,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(35,74,145,0.08)_1px,transparent_1px)] bg-[size:46px_46px]" style={{ WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }} aria-hidden="true" />
      <div className="absolute w-[700px] h-[400px] left-1/2 top-[-180px] -translate-x-1/2 bg-[#1970ff] rounded-full blur-[130px] opacity-[0.24]" aria-hidden="true" />
      
      <div className="relative text-center max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        <div className="text-[#9bbcff] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em]">[ YOUR MOVE ]</div>
        <h2 className="my-[18px] text-[51px] md:text-[clamp(54px,7vw,90px)] leading-[0.9] tracking-[-0.07em] font-bold">
          Ready to test<br />
          your <span className="text-[#d4ff24]">logic?</span>
        </h2>
        <p className="text-[#a4b2ca] leading-[1.6] text-[15px]">
          Join Code Arena today. Login instantly with Google<br className="hidden md:block" />
          and play your first match in seconds.
        </p>
        <button className="mt-[30px] w-[calc(100%-8px)] md:w-auto bg-[#d4ff24] text-[#080b07] min-h-[64px] px-[30px] inline-flex items-center justify-between md:justify-center gap-[48px] font-['JetBrains_Mono',monospace] font-bold text-[12px] tracking-[0.05em] shadow-[7px_7px_0_rgba(21,88,201,0.8),0_0_30px_rgba(212,255,36,0.12)] hover:-translate-y-[3px] hover:-translate-x-[3px] hover:shadow-[11px_11px_0_rgba(21,88,201,0.9),0_0_40px_rgba(212,255,36,0.25)] transition-all" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          START PLAYING FREE <ArrowIcon className="w-[16px]" />
        </button>
        
        <div className="mt-[80px] md:mt-[105px] min-h-[84px] grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-[20px] md:gap-0 border-t border-[rgba(98,145,221,0.25)] py-[30px] md:py-0 text-center md:text-left">
          <div className="justify-self-center md:justify-self-start"><Logo /></div>
          <span className="text-[#4f678d] justify-self-center font-['JetBrains_Mono',monospace] font-medium text-[7px] tracking-[0.08em]">© 2025 CODE ARENA. DESIGNED FOR DEVS, BY DEVS.</span>
          <div className="flex justify-center md:justify-end gap-[22px] justify-self-center md:justify-self-end">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-[6px] text-[#7185a7] font-['JetBrains_Mono',monospace] font-medium text-[7px]"><GithubIcon className="w-[12px]" /> GITHUB</a>
            <a href="#top" className="flex items-center gap-[6px] text-[#7185a7] font-['JetBrains_Mono',monospace] font-medium text-[7px]">PORTFOLIO ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}