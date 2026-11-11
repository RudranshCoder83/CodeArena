import { BoltIcon, ArrowIcon, SwordsIcon } from "../Components/Icons";

export default function Features() {
  return (
    <section className="pt-[125px] pb-[50px] max-w-[1180px] w-[calc(100%-48px)] mx-auto" id="features">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <div className="text-[#5f8bdb] font-['JetBrains_Mono',monospace] font-semibold text-[10px] tracking-[0.2em]">[ BUILT FOR BATTLE ]</div>
          <h2 className="mt-[17px] text-[clamp(36px,4vw,54px)] leading-[1.04] tracking-[-0.055em] font-bold">
            Everything you need<br />
            to <span className="text-[#d4ff24]">compete &amp; conquer.</span>
          </h2>
        </div>
        <p className="text-[#778094] text-[14px] leading-[1.6] md:text-right mt-[18px] md:mt-0 mb-[2px]">
          Precision tools. Real-time feedback. Zero distractions.<br />
          Just you, your code, and the clock.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-3 mt-[60px]">
        {/* 01: ENVIRONMENT */}
        <article className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[rgba(53,104,202,0.32)] p-[30px] min-h-[390px] transition-all hover:border-[rgba(212,255,36,0.65)] hover:-translate-y-1 before:content-[''] before:absolute before:w-[240px] before:h-[240px] before:rounded-full before:bg-[rgba(21,88,201,0.12)] before:blur-[60px] before:-right-[100px] before:-bottom-[100px]">
          <div className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em]">01 / ENVIRONMENT</div>
          <h3 className="mt-[17px] mb-[10px] text-[28px] leading-[1.05] tracking-[-0.04em] font-bold">
            Professional Coding<br />Environment
          </h3>
          <p className="max-w-[440px] mb-[26px] text-[#7e8799] text-[13px] leading-[1.65]">
            Write, test, and execute code with Monaco Editor and the Piston API. Built for speed. Optimized for C++.
          </p>
          <div className="absolute left-[24px] right-[24px] md:left-[30px] md:right-[30px] bottom-0 h-[158px] bg-[#080b10] border border-[#253b60] shadow-[0_-12px_35px_rgba(21,88,201,0.08)]">
            <div className="h-[36px] flex justify-between items-center px-[14px] border-b border-[#1b2637] text-[#8791a4] text-[9px]">
              <span>solution.cpp</span>
              <span className="font-['JetBrains_Mono',monospace] text-[7px]">C++ ▾</span>
            </div>
            <div className="flex flex-col p-[12px_15px] text-[8px] leading-[1.8] text-[#93a0b6] font-['JetBrains_Mono',monospace]">
              <span><i className="not-italic text-[#3f4b60] inline-block w-[28px]">12</i><b className="text-[#5aa4ff] font-medium">for</b> (<b className="text-[#5aa4ff] font-medium">int</b> i = 0; i &lt; n; i++) {"{"}</span>
              <span><i className="not-italic text-[#3f4b60] inline-block w-[28px]">13</i>&nbsp;&nbsp;result = max(result, solve(i));</span>
              <span><i className="not-italic text-[#3f4b60] inline-block w-[28px]">14</i>{"}"}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[35px] grid grid-cols-[auto_auto_auto_1fr] gap-[14px] items-center px-[13px] border-t border-[#1c2635] text-[#77a93c] font-['JetBrains_Mono',monospace] font-medium text-[6px]">
              <span>✓ TEST 01</span><span>✓ TEST 02</span><span>✓ TEST 03</span>
              <strong className="justify-self-end text-[#d4ff24]">ALL PASSED</strong>
            </div>
          </div>
        </article>

        {/* 02: RANKING */}
        <article className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[rgba(53,104,202,0.32)] p-[30px] min-h-[390px] transition-all hover:border-[rgba(212,255,36,0.65)] hover:-translate-y-1">
          <div className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em]">02 / RANKING</div>
          <h3 className="mt-[17px] mb-[10px] text-[28px] leading-[1.05] tracking-[-0.04em] font-bold">Elo Rating<br />System</h3>
          <p className="text-[#7e8799] text-[13px] leading-[1.65]">Every match matters. Win, gain rating, and climb.</p>
          <div className="mt-[36px]">
            <span className="text-[#657087] font-['JetBrains_Mono',monospace] text-[7px]">CURRENT RATING</span>
            <strong className="flex justify-between items-end font-['JetBrains_Mono',monospace] font-semibold text-[32px]">
              1,847 <em className="text-[#d4ff24] font-['JetBrains_Mono',monospace] font-semibold text-[9px] not-italic mb-[6px]">+16 ▲</em>
            </strong>
          </div>
          <div className="mt-[15px]">
            <svg viewBox="0 0 320 100" preserveAspectRatio="none" className="w-full h-[95px] overflow-visible bg-[linear-gradient(rgba(57,74,102,0.16)_1px,transparent_1px)] bg-[size:100%_25px]">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#d4ff24" stopOpacity=".22" />
                  <stop offset="100%" stopColor="#d4ff24" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#chartFill)" d="M0 88C25 83 35 74 60 79S100 60 120 66s30-27 54-18 36-13 59-4 30-30 51-20 22-3 36-12V100H0Z" />
              <path fill="none" stroke="#d4ff24" strokeWidth="2" style={{ vectorEffect: "non-scaling-stroke", filter: "drop-shadow(0 0 4px rgba(212,255,36,.5))" }} d="M0 88C25 83 35 74 60 79S100 60 120 66s30-27 54-18 36-13 59-4 30-30 51-20 22-3 36-12" />
            </svg>
            <div className="flex justify-between text-[#4f5b6e] font-['JetBrains_Mono',monospace] font-medium text-[6px] mt-[8px]">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span>
            </div>
          </div>
        </article>

        {/* 03: ANALYTICS */}
        <article className="relative overflow-hidden bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[rgba(53,104,202,0.32)] p-[30px] min-h-[390px] transition-all hover:border-[rgba(212,255,36,0.65)] hover:-translate-y-1">
          <div className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em]">03 / ANALYTICS</div>
          <h3 className="mt-[17px] mb-[10px] text-[28px] leading-[1.05] tracking-[-0.04em] font-bold">Activity &amp;<br />Analytics</h3>
          <p className="text-[#7e8799] text-[13px] leading-[1.65]">Track streaks, wins, and weekly momentum.</p>
          <div className="flex items-center justify-between mt-[28px] text-[#5c687c] font-['JetBrains_Mono',monospace] text-[7px]">
            <span>LAST 12 WEEKS</span>
            <strong className="text-[#d4ff24] flex gap-[4px] items-center font-semibold text-[7px]"><BoltIcon className="w-[11px]" /> 14 DAY STREAK</strong>
          </div>
          <div className="grid grid-cols-11 gap-[5px] mt-[14px]">
            {Array.from({ length: 77 }, (_, i) => {
              const level = (i * 7 + i * i) % 6;
              return <span key={i} className={`aspect-square border ${level === 1 || level === 2 ? "bg-[#123a38] border-[#17544b]" : level === 3 ? "bg-[#2b642f] border-[#397b38]" : level === 4 ? "bg-[#6fa51e] border-[#87c221]" : level === 5 ? "bg-[#d4ff24] border-[#e5ff7b] shadow-[0_0_7px_rgba(212,255,36,0.3)]" : "bg-[#101828] border-[#162746]"}`} />
            })}
          </div>
          <div className="grid grid-cols-3 mt-[22px] border-t border-[#1c2a3e] pt-[16px]">
            <span className="border-r border-[#1c2a3e] pl-0"><small className="text-[#536077] font-['JetBrains_Mono',monospace] font-medium text-[6px] block">MATCHES</small><strong className="block mt-[5px] font-['JetBrains_Mono',monospace] font-semibold text-[18px]">247</strong></span>
            <span className="border-r border-[#1c2a3e] pl-[18px]"><small className="text-[#536077] font-['JetBrains_Mono',monospace] font-medium text-[6px] block">WIN RATE</small><strong className="block mt-[5px] font-['JetBrains_Mono',monospace] font-semibold text-[18px]">68%</strong></span>
            <span className="border-0 pl-[18px]"><small className="text-[#536077] font-['JetBrains_Mono',monospace] font-medium text-[6px] block">BEST STREAK</small><strong className="block mt-[5px] font-['JetBrains_Mono',monospace] font-semibold text-[18px]">21</strong></span>
          </div>
        </article>

        {/* 04: SOCIAL */}
        <article className="lg:col-span-2 relative overflow-hidden bg-[linear-gradient(135deg,rgba(14,20,31,0.96),rgba(5,7,11,0.96))] border border-[rgba(53,104,202,0.32)] transition-all hover:border-[rgba(212,255,36,0.65)] hover:-translate-y-1 block md:grid grid-cols-[0.8fr_1.2fr] gap-[65px] p-[28px_24px] md:p-[40px] min-h-auto md:min-h-[330px]">
          <div>
            <div className="text-[#5277ba] font-['JetBrains_Mono',monospace] font-semibold text-[8px] tracking-[0.12em]">04 / SOCIAL</div>
            <h3 className="mt-[17px] mb-[10px] text-[25px] md:text-[34px] font-bold leading-[1.05]">Never battle<br />alone.</h3>
            <p className="text-[#7e8799] text-[13px] leading-[1.65]">Connect with buddies, see who's online, and send live duel requests in a click.</p>
            <a href="#leaderboard" className="text-[#d4ff24] inline-flex gap-[20px] items-center font-['JetBrains_Mono',monospace] font-semibold text-[9px] mt-[22px]">
              FIND YOUR RIVALS <ArrowIcon className="w-[15px]" />
            </a>
          </div>
          <div className="relative bg-[#090d14] border border-[#203b68] shadow-[14px_14px_0_rgba(13,45,99,0.25)] mt-[35px] md:mt-0 self-center">
            <div className="h-[40px] flex items-center justify-between px-[16px] text-[#65728a] border-b border-[#1b2b43] font-['JetBrains_Mono',monospace] font-semibold text-[7px]">
              <span>ONLINE NOW</span><strong className="text-[#d4ff24] text-[9px]">4</strong>
            </div>
            {[
              ["NV", "nova.cpp", "In queue", "#9575ff"],
              ["BM", "bitmaster", "Available", "#ffbb55"],
              ["LG", "logic_girl", "In a duel", "#ed69ff"],
            ].map(([initials, name, state, color], i) => (
              <div className="min-h-[67px] grid grid-cols-[39px_1fr_auto] items-center gap-[12px] px-[16px] border-b border-[#172338] last:border-0" key={name as string}>
                <div className="relative w-[34px] h-[34px] grid place-items-center text-[#090b0e] font-['JetBrains_Mono',monospace] font-bold text-[9px] rounded-[2px]" style={{ background: color as string }}>
                  {initials}
                  <i className="absolute -right-[2px] -bottom-[2px] w-[8px] h-[8px] rounded-full bg-[#d4ff24] border-2 border-[#090d14]" />
                </div>
                <div>
                  <strong className="block text-[11px] font-bold">{name}</strong>
                  <span className="block text-[#617087] font-['JetBrains_Mono',monospace] font-medium text-[7px] mt-[3px]">{state}</span>
                </div>
                {i < 2 ? (
                  <button aria-label={`Challenge ${name}`} className="w-[31px] h-[31px] grid place-items-center text-[#d4ff24] border border-[#42651c] bg-[rgba(212,255,36,0.06)]">
                    <SwordsIcon className="w-[14px]" />
                  </button>
                ) : (
                  <span className="text-[#65728a] font-['JetBrains_Mono',monospace] font-medium text-[7px]">WATCH</span>
                )}
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}