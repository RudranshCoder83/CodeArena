import { BoltIcon } from "./Icons";

export default function CodeWindow() {
  return (
    <div className="relative">
      {/* Background Shadow Effect */}
      <div className="absolute inset-[25%_0_-10%] bg-[#1558c9] blur-[70px] opacity-[0.28]" />

      {/* Main Arena Window */}
      <div 
        className="relative w-full overflow-hidden bg-[#080b11] border border-[#3a75e1a6] shadow-[-20px_24px_70px_rgba(0,0,0,0.75),0_0_35px_rgba(21,88,201,0.25)] origin-center" 
        style={{ transform: "rotateY(-8deg) rotateX(2deg) rotateZ(-1deg)" }}
      >
        {/* Window Topbar */}
        <div className="h-10 px-3.5 flex items-center justify-between bg-[#0d1119] border-b border-[#1d2636]">
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 border border-[#465065] rounded-full" />
            <span className="w-1.5 h-1.5 border border-[#465065] rounded-full" />
            <span className="w-1.5 h-1.5 border border-[#465065] rounded-full" />
          </div>
          <span className="font-['JetBrains_Mono',monospace] text-[7px] text-[#8790a2] tracking-[0.09em]">CHALLENGE_042.CPP</span>
          <div className="flex items-center gap-1.5 text-[#d4ff24] font-['JetBrains_Mono',monospace] text-[7px] tracking-[0.09em]">
            <span className="w-1.5 h-1.5 bg-[#d4ff24] rounded-full shadow-[0_0_10px_#d4ff24]" /> LIVE
          </div>
        </div>

        {/* Duel Status Header */}
        <div className="h-[66px] flex justify-between items-center px-[20px] bg-[linear-gradient(90deg,rgba(21,88,201,0.09),transparent_45%,rgba(212,255,36,0.03))] border-b border-[#202a39]">
          <div className="flex items-center gap-[9px]">
            <div className="w-[31px] h-[31px] grid place-items-center font-['JetBrains_Mono',monospace] font-bold text-[10px] text-[#06101d] bg-[linear-gradient(135deg,#55d6ff,#2c73ff)] border border-[#73e2ff] shadow-[0_0_16px_rgba(85,214,255,0.35)]" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)' }}>Y</div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#5d687b] font-['JetBrains_Mono',monospace] font-medium text-[6px] tracking-[0.08em]">YOU</span>
              <strong className="font-['JetBrains_Mono',monospace] font-semibold text-[9px]">neon.dev</strong>
            </div>
          </div>
          <div className="text-center">
            <span className="block text-[#5d687b] font-['JetBrains_Mono',monospace] font-medium text-[6px] tracking-[0.08em]">DUEL IN PROGRESS</span>
            <strong className="block text-[#d4ff24] mt-[2px] font-['JetBrains_Mono',monospace] font-bold text-[14px]">08:42</strong>
          </div>
          <div className="flex items-center gap-[9px] text-right">
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#5d687b] font-['JetBrains_Mono',monospace] font-medium text-[6px] tracking-[0.08em]">OPPONENT</span>
              <strong className="font-['JetBrains_Mono',monospace] font-semibold text-[9px]">byteknight</strong>
            </div>
            <div className="w-[31px] h-[31px] grid place-items-center font-['JetBrains_Mono',monospace] font-bold text-[10px] text-[#0b0c07] bg-[linear-gradient(135deg,#d4ff24,#459f3a)] border border-[#d4ff24]" style={{ clipPath: 'polygon(15% 0, 85% 0, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0 85%, 0 15%)' }}>B</div>
          </div>
        </div>

        {/* Editor & Results Grid */}
        <div className="grid grid-cols-[1.8fr_1fr] min-h-[315px]">
          
          {/* Left: Code Editor Pane */}
          <div className="relative border-r border-[#202a39] pb-[38px]">
            <div className="h-[34px] flex justify-between items-center border-b border-[#17202d] pr-3.5">
              <span className="h-full flex items-center px-3.5 font-['JetBrains_Mono',monospace] font-medium text-[8px] text-[#b8c0cf] border-t border-[#2c73ff] bg-[#0c111a]">solution.cpp</span>
              <span className="text-[#66728a] font-['JetBrains_Mono',monospace] font-medium text-[7px]">C++</span>
            </div>
            
            {/* Complete C++ Code Block */}
            <div className="text-[#a6b0c2] py-3 text-[8px] leading-[1.95] font-['JetBrains_Mono',monospace]">
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">1</i><span className="text-[#55a3ff]">#include</span> <span className="text-[#a5d96b]">&lt;vector&gt;</span></div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">2</i><span className="text-[#55a3ff]">using namespace</span> std;</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">3</i></div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">4</i><span className="text-[#c793ff]">int</span> maxProfit(vector&lt;<span className="text-[#c793ff]">int</span>&gt;&amp; prices) {"{"}</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">5</i>  <span className="text-[#c793ff]">int</span> minPrice = prices[<span className="text-[#ffae6a]">0</span>];</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">6</i>  <span className="text-[#c793ff]">int</span> profit = <span className="text-[#ffae6a]">0</span>;</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">7</i>  <span className="text-[#55a3ff]">for</span> (<span className="text-[#c793ff]">int</span> price : prices) {"{"}</div>
              <div className="pr-3 whitespace-pre bg-[rgba(21,88,201,0.12)] border-l border-[#2d6ed9]"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">8</i>    profit = max(profit, price - minPrice);</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">9</i>    minPrice = min(minPrice, price);</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">10</i>  {"}"}</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">11</i>  <span className="text-[#55a3ff]">return</span> profit;</div>
              <div className="pr-3 whitespace-pre"><i className="not-italic text-[#374258] inline-block w-[34px] pr-2 text-right mr-3 border-r border-[#151d29]">12</i>{"}"}</div>
            </div>
            
            {/* Editor Footer */}
            <div className="absolute bottom-0 inset-x-0 h-[38px] flex items-center justify-between pl-3.5 border-t border-[#17202d] text-[#4f5a6e] text-[6px] font-['JetBrains_Mono',monospace]">
              <span>Ln 8, Col 52</span>
              <button className="h-full px-[18px] bg-[#d4ff24] text-[#060806] font-bold text-[7px] flex items-center gap-1.5 transition-transform hover:scale-105">
                <BoltIcon className="w-[9px]" /> RUN CODE
              </button>
            </div>
          </div>

          {/* Right: Results Pane */}
          <div className="bg-[rgba(13,17,25,0.75)] p-3.5">
            {/* Opponent Progress */}
            <div className="flex justify-between items-center text-[#677287] font-['JetBrains_Mono',monospace] font-medium text-[6px] tracking-[0.08em]">
              <span>OPPONENT PROGRESS</span><strong className="text-[#a7b3c6]">3 / 5</strong>
            </div>
            <div className="h-[3px] mt-[8px] bg-[#171e2a]">
              <span className="block w-[60%] h-full bg-[#2c73ff] shadow-[0_0_8px_rgba(44,115,255,0.6)]" />
            </div>

            {/* Test Cases Title */}
            <div className="flex justify-between items-center text-[#677287] font-['JetBrains_Mono',monospace] font-medium text-[6px] tracking-[0.08em] mt-5 mb-2 pb-[7px] border-b border-[#1d2633]">
              <span>TEST CASES</span>
              <span>STATUS</span>
            </div>

            {/* Completed Test Cases */}
            {[
              ["Test case 01", "12ms"],
              ["Test case 02", "18ms"],
              ["Test case 03", "14ms"],
            ].map(([name, time]) => (
              <div className="grid grid-cols-[20px_1fr_auto] items-center min-h-[43px] border-b border-[#171f2c] gap-[3px]" key={name}>
                <span className="text-[#d4ff24] text-[10px]">✓</span>
                <div>
                  <strong className="block font-['JetBrains_Mono',monospace] font-medium text-[7px] text-[#e8edf6]">{name}</strong>
                  <small className="block text-[#5c9d41] font-['JetBrains_Mono',monospace] font-medium text-[6px] mt-[3px]">Accepted</small>
                </div>
                <span className="text-[#556175] font-['JetBrains_Mono',monospace] text-[6px]">{time}</span>
              </div>
            ))}
            
            {/* Pending Test Case */}
            <div className="grid grid-cols-[20px_1fr_auto] items-center min-h-[43px] border-b border-[#171f2c] gap-[3px]">
              <span className="w-[9px] h-[9px] border border-[#315ca4] border-r-transparent rounded-full animate-spin" />
              <div>
                <strong className="block font-['JetBrains_Mono',monospace] font-medium text-[7px] text-[#e8edf6]">Test case 04</strong>
                <small className="block text-[#6389d5] font-['JetBrains_Mono',monospace] font-medium text-[6px] mt-[3px]">Running...</small>
              </div>
              <span className="text-[#556175] font-['JetBrains_Mono',monospace] text-[6px]">—</span>
            </div>

            {/* Submission Stats */}
            <div className="mt-[13px] p-[12px] bg-[rgba(21,88,201,0.1)] border border-[rgba(43,104,213,0.28)]">
              <span className="text-[#69748a] font-['JetBrains_Mono',monospace] font-medium text-[6px]">YOUR SUBMISSION</span>
              <strong className="block mt-[4px] font-['JetBrains_Mono',monospace] font-semibold text-[10px] text-[#e8edf6]">
                <span className="text-[#d4ff24]">03</span> / 05 passed
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      
      {/* Elo Gain Badge (Left Bottom) */}
      <div className="absolute z-[4] flex items-center bg-[rgba(8,12,18,0.93)] border border-[rgba(62,112,205,0.5)] shadow-[0_14px_30px_rgba(0,0,0,0.5)] -left-[48px] bottom-[44px] w-[125px] p-[11px] gap-[9px] font-['JetBrains_Mono',monospace]">
        <span className="w-[27px] h-[27px] grid place-items-center text-[#d4ff24] bg-[rgba(212,255,36,0.08)] border border-[rgba(212,255,36,0.3)] text-[9px]">▲</span>
        <div>
          <small className="block text-[#687287] text-[6px]">ELO GAIN</small>
          <strong className="block text-[#d4ff24] text-[13px] mt-[2px]">+16</strong>
        </div>
      </div>
      
      {/* Win Streak Badge (Right Top) */}
      <div className="absolute z-[4] flex items-center bg-[rgba(8,12,18,0.93)] border border-[rgba(62,112,205,0.5)] shadow-[0_14px_30px_rgba(0,0,0,0.5)] -right-[26px] -top-[25px] p-[10px_14px] gap-[10px] font-['JetBrains_Mono',monospace]">
        <BoltIcon className="text-[#d4ff24] w-[22px]" />
        <div>
          <small className="block text-[#687287] text-[6px]">WIN STREAK</small>
          <strong className="block text-[#d4ff24] text-[13px] mt-[2px]">07 DAYS</strong>
        </div>
      </div>

    </div>
  );
}