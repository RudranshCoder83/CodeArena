import { BoltIcon } from "./Icons";

export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 font-bold text-[18px] tracking-[-0.04em]" aria-label="Code Arena home">
      <span className="text-[#2c73ff] flex items-center font-['JetBrains_Mono',monospace] font-semibold text-[12px]">
        <span>&lt;</span>
        <BoltIcon className="text-[#d4ff24] w-[15px] -mx-[2px]" />
        <span>/&gt;</span>
      </span>
      <span>
        Code Arena<span className="text-[#d4ff24] animate-[blink_1.2s_step-end_infinite]">_</span>
      </span>
    </a>
  );
}