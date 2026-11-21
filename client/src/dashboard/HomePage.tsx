import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, SwordsIcon } from "../Components/Icons";
import { useAppContext } from "../Context/AuthContext";
import api from "../api/Axios";

type Difficulty = "EASY" | "MEDIUM" | "HARD";

interface MatchEntry {
  _id: string;
  player1: { username: string };
  player2: { username: string };
  winner: { _id: string } | null;
  newRatingPlayer1: number;
  newRatingPlayer2: number;
  status: string;
  createdAt: string;
}

interface LeaderboardUser {
  _id: string;
  username: string;
  rating: number;
}

interface Stats {
  _id: string;
  rating: number;
  wins: number;
  losses: number;
}

/* ── Rank thresholds: Bronze 0-1399, Silver 1400-1599, Gold 1600-1799, Diamond 1800+ ── */
function getRank(rating: number) {
  if (rating >= 1800) return { label: "DIAMOND",  color: "#51d0ff" };
  if (rating >= 1600) return { label: "GOLD",     color: "#ffbb55" };
  if (rating >= 1400) return { label: "SILVER",   color: "#aab1c0" };
  return                     { label: "BRONZE",   color: "#cd7f32" };
}

/* ── Small loading skeleton ── */
const Skeleton = () => (
  <div className="h-[28px] w-[60px] bg-[#1a2740] animate-pulse rounded-sm" />
);

/* ── Difficulty button inactive text colors (higher contrast) ── */
const diffInactiveText: Record<Difficulty, string> = {
  EASY:   "text-[#8f9bb0]",
  MEDIUM: "text-[#8f9bb0]",
  HARD:   "text-[#8f9bb0]",
};
const diffActiveStyle: Record<Difficulty, string> = {
  EASY:   "border-[#d4ff24] text-[#d4ff24] bg-[rgba(212,255,36,0.08)]",
  MEDIUM: "border-[#ffbb55] text-[#ffbb55] bg-[rgba(255,187,85,0.08)]",
  HARD:   "border-[#ff4f4f] text-[#ff4f4f] bg-[rgba(255,79,79,0.08)]",
};

export default function HomePage() {
  const { user } = useAppContext();
  const [difficulty, setDifficulty]           = useState<Difficulty>("EASY");
  const [duelMsg, setDuelMsg]                 = useState(false);

  /* Stats */
  const [stats, setStats]                     = useState<Stats | null>(null);
  const [statsLoading, setStatsLoading]       = useState(true);
  const [statsError, setStatsError]           = useState(false);

  /* Leaderboard */
  const [topPlayers, setTopPlayers]           = useState<LeaderboardUser[]>([]);
  const [lbLoading, setLbLoading]             = useState(true);
  const [lbError, setLbError]                 = useState(false);

  /* Match history */
  const [matches, setMatches]                 = useState<MatchEntry[]>([]);
  const [histLoading, setHistLoading]         = useState(true);
  const [histError, setHistError]             = useState(false);

  const duelMsgTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // GET /auth/me
    api.get("/auth/me")
      .then(r => setStats(r.data))
      .catch(() => setStatsError(true))
      .finally(() => setStatsLoading(false));

    // GET /user/leaderboard?limit=5
    api.get("/user/leaderboard?limit=5")
      .then(r => setTopPlayers(r.data))
      .catch(() => setLbError(true))
      .finally(() => setLbLoading(false));

    // GET /match/history
    api.get("/match/history")
      .then(r => setMatches(r.data))
      .catch(() => setHistError(true))
      .finally(() => setHistLoading(false));

    return () => { if (duelMsgTimer.current) clearTimeout(duelMsgTimer.current); };
  }, []);

  const rating  = stats?.rating  ?? 1200;
  const wins    = stats?.wins    ?? 0;
  const losses  = stats?.losses  ?? 0;
  const winRate = wins + losses > 0 ? Math.round((wins / (wins + losses)) * 100) + "%" : "--%";
  const rank    = getRank(rating);

  const handleFindDuel = () => {
    setDuelMsg(true);
    if (duelMsgTimer.current) clearTimeout(duelMsgTimer.current);
    duelMsgTimer.current = setTimeout(() => setDuelMsg(false), 3000);
  };

  return (
    /* Full-width flex, right sidebar stacks on mobile */
    <div className="flex flex-col lg:flex-row w-full">

      {/* ── CENTER CONTENT ── */}
      <div className="flex-1 min-w-0 p-6 lg:p-8">

        {/* Welcome */}
        <p className="text-[#8f9bb0] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em] mb-2">
          [ WELCOME BACK ]
        </p>
        <h1 className="text-[clamp(24px,3.5vw,40px)] font-bold tracking-[-0.045em] leading-[1.1] mb-8">
          Ready to duel,{" "}
          <span className="text-[#d4ff24]">@{user?.username ?? "..."}</span>?
        </h1>

        {/* ── Stats cards ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "RATING",   value: rating,   sub: rank.label, subColor: rank.color },
            { label: "WINS",     value: wins   },
            { label: "LOSSES",   value: losses },
            { label: "WIN RATE", value: winRate },
          ].map(({ label, value, sub, subColor }) => (
            <div key={label}
              className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740] p-5 hover:border-[rgba(212,255,36,0.35)] transition-colors">
              <p className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em] mb-2">{label}</p>
              {statsLoading
                ? <Skeleton />
                : statsError
                  ? <span className="text-[#ff4f4f] font-['JetBrains_Mono',monospace] text-[11px]">—</span>
                  : <p className="font-['JetBrains_Mono',monospace] font-bold text-[28px] leading-none">{value}</p>
              }
              {sub && !statsLoading && (
                <p className="font-['JetBrains_Mono',monospace] font-semibold text-[8px] mt-1" style={{ color: subColor }}>{sub}</p>
              )}
            </div>
          ))}
        </div>

        {/* ── 1v1 Code Duel ── */}
        <div className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740] p-7 mb-4 hover:border-[rgba(212,255,36,0.2)] transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <SwordsIcon className="w-[18px] text-[#3d7be7]" />
            <h2 className="text-[20px] font-bold tracking-[-0.03em]">1v1 Code Duel</h2>
          </div>
          <p className="text-[#8f9bb0] font-['JetBrains_Mono',monospace] text-[10px] mb-5">
            Pick a difficulty. You will be matched with a player of similar rating.
          </p>

          {/* Difficulty buttons */}
          <div className="flex gap-3 mb-6">
            {(["EASY", "MEDIUM", "HARD"] as Difficulty[]).map(d => (
              <button key={d} onClick={() => setDifficulty(d)}
                className={`px-5 py-2 font-['JetBrains_Mono',monospace] font-bold text-[10px] tracking-[0.08em] border transition-all ${
                  difficulty === d
                    ? diffActiveStyle[d]
                    : `border-[#1d2636] ${diffInactiveText[d]} hover:border-[#253b60] hover:text-[#c0c8d8]`
                }`}>
                {d}
              </button>
            ))}
          </div>

          {/* Find Duel */}
          <button
            onClick={handleFindDuel}
            className="relative overflow-hidden w-full h-[56px] bg-[#d4ff24] text-[#080b07] flex items-center justify-center gap-4 font-['JetBrains_Mono',monospace] font-bold text-[12px] tracking-[0.08em] shadow-[5px_5px_0_rgba(21,88,201,0.6)] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[8px_8px_0_rgba(21,88,201,0.8)] transition-all">
            FIND DUEL <ArrowIcon className="w-4" />
          </button>

          {duelMsg && (
            <p className="mt-3 text-center text-[#8f9bb0] font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.08em]">
              ⚡ Coming soon — matchmaking is under construction.
            </p>
          )}
        </div>

        {/* ── Match History ── */}
        <div className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740] p-7">
          <p className="text-[#8f9bb0] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em] mb-5">
            MATCH HISTORY
          </p>

          {histLoading ? (
            <div className="flex flex-col gap-2">
              {[1, 2, 3].map(i => <div key={i} className="h-[40px] bg-[#1a2740] animate-pulse rounded-sm" />)}
            </div>
          ) : histError ? (
            <p className="text-[#ff4f4f] font-['JetBrains_Mono',monospace] text-[10px] text-center py-4">
              Failed to load match history.
            </p>
          ) : matches.length === 0 ? (
            <p className="text-[#8f9bb0] font-['JetBrains_Mono',monospace] text-[11px] text-center py-6">
              No matches yet. Start your first duel.
            </p>
          ) : (
            <div className="flex flex-col gap-0">
              {matches.map(m => {
                const isP1    = m.player1?.username === user?.username;
                const opponent = isP1 ? m.player2?.username : m.player1?.username;
                const won     = m.winner?._id === stats?._id;
                const result  = m.winner === null ? "DRAW" : won ? "WIN" : "LOSS";
                const resultColor = result === "WIN" ? "text-[#d4ff24]" : result === "LOSS" ? "text-[#ff4f4f]" : "text-[#aab1c0]";
                return (
                  <div key={m._id} className="flex items-center justify-between py-3 border-b border-[#111827] last:border-0">
                    <span className="font-['JetBrains_Mono',monospace] text-[11px]">vs @{opponent ?? "?"}</span>
                    <span className={`font-['JetBrains_Mono',monospace] font-bold text-[10px] ${resultColor}`}>
                      {result}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── RIGHT SIDEBAR ── */}
      <aside className="w-full lg:w-[260px] lg:shrink-0 border-t lg:border-t-0 lg:border-l border-[#111827] p-5 flex flex-col gap-5">

        {/* Online Friends */}
        <div className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740] p-5">
          <p className="text-[#8f9bb0] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.2em] mb-4">
            ONLINE FRIENDS
          </p>
          <p className="text-[#8f9bb0] font-['JetBrains_Mono',monospace] text-[9px] text-center py-2">
            No friends online.
          </p>
        </div>

        {/* Top Players */}
        <div className="bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[#1a2740] p-5">
          <p className="text-[#8f9bb0] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.2em] mb-4">
            TOP PLAYERS
          </p>

          {lbLoading ? (
            <div className="flex flex-col gap-2">
              {[1,2,3,4,5].map(i => <div key={i} className="h-[32px] bg-[#1a2740] animate-pulse rounded-sm" />)}
            </div>
          ) : lbError ? (
            <p className="text-[#ff4f4f] font-['JetBrains_Mono',monospace] text-[9px] text-center py-2">Failed to load.</p>
          ) : (
            <div className="flex flex-col">
              {topPlayers.map((p, i) => (
                <div key={p._id}
                  className="flex items-center justify-between py-2.5 border-b border-[#111827] last:border-0">
                  <div className="flex items-center gap-2">
                    <span className={`font-['JetBrains_Mono',monospace] font-semibold text-[9px] w-4 ${i === 0 ? "text-[#d4ff24]" : "text-[#5277ba]"}`}>
                      {i + 1}
                    </span>
                    <span className="font-['JetBrains_Mono',monospace] text-[10px]">@{p.username}</span>
                  </div>
                  <span className={`font-['JetBrains_Mono',monospace] font-bold text-[9px] border px-1.5 py-0.5 ${
                    i === 0 ? "text-[#d4ff24] border-[rgba(212,255,36,0.4)]" : "text-[#aab1c0] border-[#1d2636]"
                  }`}>
                    {p.rating}
                  </span>
                </div>
              ))}
            </div>
          )}

          <Link
            to="/dashboard/leaderboard"
            className="mt-4 block text-center text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.1em] hover:text-[#d4ff24] transition-colors">
            VIEW FULL LEADERBOARD
          </Link>
        </div>
      </aside>
    </div>
  );
}
