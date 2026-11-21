import { useEffect, useState } from "react";
import api from "../api/Axios";

interface LeaderboardUser {
  _id: string;
  username: string;
  rating: number;
  wins: number;
  losses: number;
  avatarUrl?: string;
}

function getRank(rating: number) {
  if (rating >= 2000) return { label: "GRANDMASTER", color: "#ff4f4f" };
  if (rating >= 1700) return { label: "MASTER", color: "#d4ff24" };
  if (rating >= 1500) return { label: "GOLD", color: "#ffbb55" };
  if (rating >= 1300) return { label: "SILVER", color: "#aab1c0" };
  return { label: "BRONZE", color: "#cd7f32" };
}

export default function LeaderboardPage() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/user/leaderboard?limit=50")
      .then(r => setUsers(r.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 max-w-[820px]">
      <div className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em] mb-2">[ GLOBAL RANKINGS ]</div>
      <h1 className="text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.045em] mb-8">
        Leaderboard — <span className="text-[#d4ff24]">Top Players</span>
      </h1>

      <div className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740]">
        {/* Header */}
        <div className="grid grid-cols-[40px_1fr_120px_80px_80px] gap-4 px-6 py-3 border-b border-[#111827]">
          {["#", "PLAYER", "RATING", "WINS", "W/R"].map(h => (
            <span key={h} className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em]">{h}</span>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-16 text-[#3d4a5c] font-['JetBrains_Mono',monospace] text-[11px]">Loading...</div>
        ) : users.length === 0 ? (
          <div className="text-center py-16 text-[#3d4a5c] font-['JetBrains_Mono',monospace] text-[11px]">No players yet.</div>
        ) : (
          users.map((u, i) => {
            const rank = getRank(u.rating);
            const wr = u.wins + u.losses > 0 ? Math.round((u.wins / (u.wins + u.losses)) * 100) + "%" : "--";
            return (
              <div
                key={u._id}
                className={`grid grid-cols-[40px_1fr_120px_80px_80px] gap-4 px-6 py-4 border-b border-[#0d1420] hover:bg-[rgba(212,255,36,0.03)] transition-colors last:border-0 ${i === 0 ? "bg-[rgba(212,255,36,0.03)]" : ""}`}
              >
                <span className={`font-['JetBrains_Mono',monospace] font-bold text-[13px] ${i === 0 ? "text-[#d4ff24]" : i === 1 ? "text-[#aab1c0]" : i === 2 ? "text-[#cd7f32]" : "text-[#3d4a5c]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-bold text-[13px]">@{u.username}</p>
                  <p className="font-['JetBrains_Mono',monospace] font-semibold text-[8px] mt-0.5" style={{ color: rank.color }}>{rank.label}</p>
                </div>
                <span className="font-['JetBrains_Mono',monospace] font-bold text-[14px] self-center">{u.rating}</span>
                <span className="font-['JetBrains_Mono',monospace] text-[13px] text-[#aab1c0] self-center">{u.wins}</span>
                <span className="font-['JetBrains_Mono',monospace] text-[13px] text-[#aab1c0] self-center">{wr}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
