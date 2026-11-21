import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AuthContext";
import { BoltIcon } from "../Components/Icons";
import { SearchBar } from "./SearchBar";

/* ── Icons (all 16px) ── */
const ico = (d: string) => () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 16, height: 16, flexShrink: 0 }}>
    <path d={d} />
  </svg>
);
const HomeIcon    = ico("M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5ZM9 21V12h6v9");
const TrophyIcon  = ico("M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4");
const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 16, height: 16, flexShrink: 0 }}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" />
  </svg>
);
const FriendsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ width: 16, height: 16, flexShrink: 0 }}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const ProfileIcon = ico("M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 8c0-4 3.6-7 8-7s8 3 8 7");
const MenuIcon    = ico("M3 6h18M3 12h18M3 18h18");
const LogoutIcon  = ico("M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9");

const navItems = [
  { to: "/dashboard",             label: "HOME",        Icon: HomeIcon,    end: true },
  { to: "/dashboard/leaderboard", label: "LEADERBOARD", Icon: TrophyIcon             },
  { to: "/dashboard/history",     label: "HISTORY",     Icon: HistoryIcon            },
  { to: "/dashboard/friends",     label: "FRIENDS",     Icon: FriendsIcon            },
  { to: "/dashboard/profile",     label: "PROFILE",     Icon: ProfileIcon            },
];

export default function DashboardLayout() {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => { logout(); navigate("/"); };
  const initials = user?.username?.slice(0, 2).toUpperCase() ?? "??";

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-[60px] flex items-center px-5 border-b border-[#111827] shrink-0">
        <span className="flex items-center gap-2 font-bold text-[14px] tracking-[-0.04em]">
          <span className="text-[#2c73ff] flex items-center font-['JetBrains_Mono',monospace] font-semibold text-[11px]">
            <span>{"<"}</span>
            <BoltIcon className="text-[#d4ff24] w-[13px] -mx-[2px]" />
            <span>{"/>"}</span>
          </span>
          <span>Code Arena<span className="text-[#d4ff24] animate-[blink_1.2s_step-end_infinite]">_</span></span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to} to={to} end={end}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.1em] transition-colors border-l-2 ${
                isActive
                  ? "text-[#d4ff24] border-[#d4ff24] bg-[rgba(212,255,36,0.04)]"
                  : "text-[#4a5568] border-transparent hover:text-[#8899aa] hover:border-[#253b60]"
              }`
            }
          >
            <Icon />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User + logout */}
      <div className="border-t border-[#111827] p-4 flex items-center gap-3 shrink-0">
        <div className="w-[32px] h-[32px] rounded-[2px] bg-[#1558c9] grid place-items-center font-['JetBrains_Mono',monospace] font-bold text-[11px] text-white shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[12px] truncate">@{user?.username}</p>
          <span className="text-[#5d687b] font-['JetBrains_Mono',monospace] text-[8px]">online</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#030407] text-[#f6f8ff]">
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[200px] bg-[#07090f] border-r border-[#111827] flex-col z-40">
        <SidebarContent />
      </aside>

      {/* ── Mobile Sidebar overlay ── */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-[200px] bg-[#07090f] border-r border-[#111827] flex flex-col z-50">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* ── Main area ── */}
      <div className="flex flex-col flex-1 md:ml-[200px] min-h-screen min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-[60px] bg-[#07090f] border-b border-[#111827] flex items-center gap-4 px-6">
          {/* Mobile hamburger */}
          <button className="md:hidden text-[#5d687b] hover:text-white" onClick={() => setSidebarOpen(true)}>
            <MenuIcon />
          </button>

          {/* Search */}
          <div className="flex-1 max-w-[400px]">
            <SearchBar />
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="ml-auto flex items-center gap-2 px-4 py-2 bg-[#0d1119] border border-[#202a39] text-[#8f9bb0] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.08em] hover:border-[#ff4f4f] hover:text-[#ff4f4f] transition-colors"
          >
            <LogoutIcon />
            LOGOUT
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
