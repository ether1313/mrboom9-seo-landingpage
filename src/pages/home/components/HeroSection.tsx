import { LANDING_PAGE_URL } from "../../../config/site";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden bg-[#0a0a1a]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://xt30sf.b-cdn.net/media/ad5cc4fe78796ae69264b.jpg"
          alt="MrBoom9 Hero"
          className="w-full h-full object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/95 via-[#0a0a1a]/70 to-[#0a0a1a]/30" />
      </div>

      {/* Diagonal line pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #e8b800 0px, #e8b800 1px, transparent 1px, transparent 30px)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a1a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 pt-20 pb-12">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 bg-[#1a7a3c]/20 border border-[#1a7a3c]/50 rounded px-4 py-1.5">
              <i className="ri-sparkling-line text-[#7fd99a] text-sm" aria-hidden />
              <span className="text-gray-200 text-xs font-semibold">
                New style · New bonuses · Built for Australia
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#e8b800]/10 border border-[#e8b800]/40 rounded px-4 py-1.5">
              <i className="ri-shield-check-line text-[#e8b800] text-sm" aria-hidden />
              <span className="text-[#e8b800] text-xs font-semibold tracking-widest uppercase">
                Trusted Australian Casino
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded px-4 py-1.5">
              <i className="ri-award-line text-[#e8b800] text-sm" aria-hidden />
              <span className="text-gray-300 text-xs font-medium">
                Trusted Pokies Australia <span className="text-[#e8b800] font-semibold">TPA</span>
              </span>
            </div>
          </div>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mt-2 leading-tight">
            MrBoom9
            <br />
            <span className="text-[#e8b800]">Australia's Premier</span>
            <br />
            <span className="text-white text-2xl md:text-3xl font-bold">Online Casino</span>
          </h1>
          <p className="text-gray-400 mt-4 text-sm max-w-lg mx-auto lg:mx-0 leading-relaxed">
            MrBoom9 brings a <strong className="text-gray-300">latest, modern design</strong> made for{" "}
            <strong className="text-gray-300">Australian players</strong>: a new look, a{" "}
            <strong className="text-gray-300">new bonus lineup</strong>, and games that rank among the{" "}
            <strong className="text-gray-300">top picks with young Aussies</strong> who want fast mobile play and{" "}
            <strong className="text-gray-300">AUD-first banking</strong>.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
            <div className="bg-[#111118]/90 border border-[#e8b800]/20 rounded px-4 py-2 text-center backdrop-blur-sm">
              <p className="text-[#e8b800] font-bold text-lg">4000+</p>
              <p className="text-gray-400 text-xs">Total Games</p>
            </div>
            <div className="bg-[#111118]/90 border border-[#e8b800]/20 rounded px-4 py-2 text-center backdrop-blur-sm">
              <p className="text-[#e8b800] font-bold text-lg">AUD 5999</p>
              <p className="text-gray-400 text-xs">Top ranking prize</p>
            </div>
            <div className="bg-[#111118]/90 border border-[#e8b800]/20 rounded px-4 py-2 text-center backdrop-blur-sm">
              <p className="text-[#e8b800] font-bold text-lg">AUD 299+</p>
              <p className="text-gray-400 text-xs">Many bonuses start here</p>
            </div>
          </div>
        </div>

        {/* Right: Bonus Card */}
        <div className="w-full max-w-xs lg:max-w-sm">
          <div className="relative bg-[#0d1a24] border border-[#e8b800]/30 rounded-lg p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e8b800]/5 via-transparent to-[#1a7a3c]/5 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-[#e8b800]/10 rounded-full border border-[#e8b800]/30">
                <i className="ri-trophy-line text-[#e8b800] text-2xl" />
              </div>
              <p className="text-[#e8b800] text-xs font-semibold uppercase tracking-widest mb-1">
                MONTHLY LEADERBOARD
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Monthly Deposit
                <br />
                <span className="text-[#e8b800]">Ranking</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2 mb-4">
                Compete every calendar month (Sydney/Melbourne time). Ranking is by total deposit amount only. Top 10
                players share a cash prize pool, with rewards paid after month-end.
              </p>
              <a
                href={LANDING_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#1a7a3c] text-white font-bold py-3 rounded hover:bg-[#156632] transition-colors cursor-pointer text-sm whitespace-nowrap"
              >
                Check Your Ranking
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
