import { useAppContext } from "../Context/AuthContext";

function getRank(rating: number) {
  if (rating >= 2000) return { label: "GRANDMASTER", color: "#ff4f4f" };
  if (rating >= 1700) return { label: "MASTER", color: "#d4ff24" };
  if (rating >= 1500) return { label: "GOLD", color: "#ffbb55" };
  if (rating >= 1300) return { label: "SILVER", color: "#aab1c0" };
  return { label: "BRONZE", color: "#cd7f32" };
}

export default function ProfilePage() {
  const { user } = useAppContext();
  const rating = (user as any)?.rating ?? 1200;
  const wins = (user as any)?.wins ?? 0;
  const losses = (user as any)?.losses ?? 0;
  const rank = getRank(rating);
  const initials = user?.username?.slice(0, 2).toUpperCase() ?? "??";

  return (
    <div className="p-8 max-w-[820px]">
      <div className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em] mb-2">[ IDENTITY ]</div>
      <h1 className="text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.045em] mb-8">
        Your <span className="text-[#d4ff24]">Profile</span>
      </h1>

      <div className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740] p-8">
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#111827]">
          <div className="w-[72px] h-[72px] rounded-[4px] bg-[#1558c9] grid place-items-center font-['JetBrains_Mono',monospace] font-bold text-[22px] text-white">
            {initials}
          </div>
          <div>
            <h2 className="text-[22px] font-bold tracking-[-0.03em]">@{user?.username}</h2>
            <p className="text-[#5d687b] font-['JetBrains_Mono',monospace] text-[10px] mt-1">{user?.email}</p>
            <span className="inline-block mt-2 font-['JetBrains_Mono',monospace] font-bold text-[9px] px-2 py-1 border" style={{ color: rank.color, borderColor: rank.color + "66" }}>
              {rank.label}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "RATING", value: rating },
            { label: "WINS", value: wins },
            { label: "LOSSES", value: losses },
          ].map(({ label, value }) => (
            <div key={label} className="border border-[#1a2740] p-5 hover:border-[rgba(212,255,36,0.35)] transition-colors">
              <p className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em] mb-2">{label}</p>
              <p className="font-['JetBrains_Mono',monospace] font-bold text-[26px]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
