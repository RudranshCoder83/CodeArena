import { steps } from "../Data/Data";

export default function HowItWorks() {
  return (
    <section className="pt-[125px] pb-[50px] max-w-[1180px] w-[calc(100%-48px)] mx-auto" id="how">
      <div className="text-center">
        <div className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em]">[ HOW IT WORKS ]</div>
        <h2 className="mt-4 text-[clamp(36px,4vw,54px)] leading-[1.04] tracking-[-0.055em] font-bold">
          From duel to victory<br />
          in <span className="text-[#d4ff24]">3 simple steps.</span>
        </h2>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-3 mt-[66px]">
        {steps.map(({ number, title, text, Icon }) => (
          <article className="relative min-h-[270px] p-7 bg-[linear-gradient(145deg,rgba(12,17,27,0.92),rgba(5,7,11,0.92))] border border-[rgba(53,104,202,0.32)] -mr-[1px] hover:border-[rgba(212,255,36,0.65)] hover:-translate-y-1 transition-all" key={number}>
            <div className="flex justify-between items-center">
              <span className="text-[#d4ff24] font-['JetBrains_Mono',monospace] font-semibold text-[24px]">{number}</span>
              <span className="w-[45px] h-[45px] grid place-items-center text-[#3d7be7] bg-[#0b1423] border border-[#1e4a98]"><Icon className="w-[22px]" /></span>
            </div>
            <h3 className="mt-9 mb-3 text-[20px] tracking-[-0.025em] font-bold">{title}</h3>
            <p className="text-[#7e8799] text-[13px] leading-[1.65]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}