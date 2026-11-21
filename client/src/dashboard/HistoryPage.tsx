export default function HistoryPage() {
  return (
    <div className="p-8 max-w-[820px]">
      <div className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em] mb-2">[ BATTLE LOG ]</div>
      <h1 className="text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.045em] mb-8">
        Match <span className="text-[#d4ff24]">History</span>
      </h1>
      <div className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740] p-8 text-center">
        <p className="text-[#3d4a5c] font-['JetBrains_Mono',monospace] text-[11px]">No matches yet. Start your first duel.</p>
      </div>
    </div>
  );
}
