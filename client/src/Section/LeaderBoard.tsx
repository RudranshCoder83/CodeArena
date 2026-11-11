import { BoltIcon } from "../Components/Icons";
import { users } from "../Data/Data";

export default function Leaderboard() {
  return (
    <section className="mt-[110px] pb-[130px] bg-[radial-gradient(ellipse_at_50%_45%,rgba(21,88,201,0.17),transparent_48%),linear-gradient(to_bottom,transparent,rgba(8,12,20,0.55),transparent)]" id="leaderboard">
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        <div className="text-center">
          <div className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em]">[ GLOBAL LEADERBOARD ]</div>
          <h2 className="mt-4 text-[clamp(36px,4vw,54px)] leading-[1.04] tracking-[-0.055em] font-bold">
            Will you claim the <span className="text-[#d4ff24]">#1 spot?</span>
          </h2>
        </div>
        <div className="w-[min(920px,100%)] mx-auto mt-[55px] bg-[rgba(6,9,14,0.82)] border border-[#22457e] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          {/* Table Header omitted for brevity, mapping users instead */}
          {users.map((user, index) => (
            <div className={`grid grid-cols-[90px_1.7fr_.6fr_.6fr_.75fr] items-center min-h-[72px] px-5 border-b border-[#16243a] hover:bg-[rgba(21,88,201,0.08)] transition-colors ${index === 0 ? "bg-[linear-gradient(90deg,rgba(212,255,36,0.055),transparent)] border-l-2 border-l-[#d4ff24]" : ""}`} key={user.name}>
              <span className={`text-[12px] font-['JetBrains_Mono',monospace] ${index === 0 ? "text-[#d4ff24]" : "text-[#7e8a9e]"}`}>{user.rank}</span>
              <div className="flex items-center gap-3">
                <div className="w-[35px] h-[35px] grid place-items-center border bg-[#101621] font-['JetBrains_Mono',monospace] font-bold text-[8px]" style={{ borderColor: user.color, color: user.color }}>{user.initials}</div>
                <span>
                  <strong className="block text-[11px] font-bold">{user.name}</strong>
                  <small className="block mt-1 text-[#536078] font-['JetBrains_Mono',monospace] font-medium text-[7px]">{user.tag}</small>
                </span>
              </div>
              <span className="text-[#8390a4] font-['JetBrains_Mono',monospace] text-[9px]">{user.wins}</span>
              <span className="text-[#9ba5b4] flex items-center gap-1 font-['JetBrains_Mono',monospace] text-[9px]"><BoltIcon className="w-[11px] text-[#d4ff24]" /> {user.streak}</span>
              <span className={`text-right font-['JetBrains_Mono',monospace] text-[11px] ${index === 0 ? "text-[#d4ff24]" : "text-[#e8edf6]"}`}>{user.elo} <small className="text-[#566176] text-[6px]">ELO</small></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}