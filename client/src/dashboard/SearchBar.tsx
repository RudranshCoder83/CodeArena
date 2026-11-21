import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/Axios";

interface SearchUser {
  _id: string;
  username: string;
  rating: number;
  avatarUrl?: string;
}

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 14, height: 14, flexShrink: 0 }}>
    <circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" />
  </svg>
);

export function SearchBar() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<SearchUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    if (q.trim().length < 2) { setResults([]); setOpen(false); return; }

    timer.current = setTimeout(() => {
      setLoading(true);
      api.get(`/user/search?q=${encodeURIComponent(q.trim())}`)
        .then(r => { setResults(r.data); setOpen(true); })
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 300);

    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [q]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full">
      <div className="relative flex items-center">
        <span className="absolute left-3 text-[#4a5568]"><SearchIcon /></span>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="Search players..."
          className="w-full h-[36px] bg-[#0d1119] border border-[#1d2636] pl-9 pr-4 text-[#e8edf6] font-['JetBrains_Mono',monospace] text-[11px] focus:outline-none focus:border-[#3176ec] transition-colors placeholder:text-[#374258]"
        />
        {loading && (
          <span className="absolute right-3 text-[#5277ba] font-['JetBrains_Mono',monospace] text-[8px] tracking-widest">...</span>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-[#0d1119] border border-[#1d2636] z-50 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          {results.map(u => (
            <button
              key={u._id}
              onMouseDown={(e) => { e.preventDefault(); setOpen(false); setQ(""); }}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-[rgba(49,118,236,0.1)] transition-colors border-b border-[#111827] last:border-0"
            >
              <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#e8edf6]">@{u.username}</span>
              <span className="font-['JetBrains_Mono',monospace] text-[9px] text-[#5277ba]">{u.rating}</span>
            </button>
          ))}
        </div>
      )}

      {open && q.trim().length >= 2 && results.length === 0 && !loading && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-[#0d1119] border border-[#1d2636] z-50 px-4 py-3">
          <span className="font-['JetBrains_Mono',monospace] text-[10px] text-[#8f9bb0]">No players found.</span>
        </div>
      )}
    </div>
  );
}
