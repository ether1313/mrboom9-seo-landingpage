import { LANDING_PAGE_URL } from "../../../config/site";

const casinoFeatures = [
  {
    title: "Pokies & Slot Games",
    desc: "4000+ pokies from top providers including JILI, Boongo, Vpower, MEGA888, MEGA888H5, JDB, JOKER, WF Gaming, CQ9, ACE333, YGR, IBEX and more, all available on MrBoom9.",
    icon: "ri-gamepad-line",
  },
  {
    title: "Live Dealer Casino",
    desc: "MrBoom9 offers live casino games with real dealers via Sexy Baccarat, Big Gaming, Pragmatic Play, Playtech, CT855, and YeeBet platforms, including Baccarat, Roulette, Blackjack and more.",
    icon: "ri-live-line",
  },
  {
    title: "Fishing & Arcade Games",
    desc: "Enjoy fishing games and arcade titles via JILI, Vpower, and Joker platforms on MrBoom9, a fun alternative to traditional pokies with big win potential.",
    icon: "ri-anchor-line",
  },
  {
    title: "Leaderboard & Rankings",
    desc: "Compete in MrBoom9's exclusive monthly top-10 deposit leaderboard. Top depositors win premium bonuses and VIP rewards every month.",
    icon: "ri-trophy-line",
  },
  {
    title: "Game RTP Transparency",
    desc: "MrBoom9 partners with Aussie Hot Game to provide full RTP (Return to Player) data for all games so you always know your odds before you play.",
    icon: "ri-bar-chart-line",
  },
  {
    title: "Slot Welcome Bonus 50%",
    desc: "Public tile shows 50% on first slot deposit from AUD 10 with up to AUD 250 bonus cap and slot only rollover rules listed beside the campaign.",
    icon: "ri-gift-line",
  },
];

export default function CasinoSection() {
  return (
    <section id="mrboom9-casino" className="py-14 bg-[#0a0a1a] relative overflow-hidden">
      {/* Diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #e8b800 0px, #e8b800 1px, transparent 1px, transparent 24px)",
        }}
      />
      <div className="absolute top-0 left-1/3 w-80 h-40 bg-[#e8b800]/5 blur-[70px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">MrBoom9 Casino Experience</h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          The <strong className="text-white">MrBoom9 casino</strong> vertical combines breadth with disciplined sourcing:
          established table disciplines alongside a continuously curated pokies portfolio exceeding four thousand titles from
          tier-one suppliers including MEGA888, JILI, JDB, PlayStar, VP, JOKER, and allied studios.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {casinoFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-[#111118] rounded-lg p-5 border border-white/5 hover:border-[#e8b800]/40 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8b800] mb-3">
                <i className={`${f.icon} text-black text-lg`} />
              </div>
              <p className="font-semibold text-white text-sm mb-1">{f.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={LANDING_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a7a3c] text-white font-bold px-8 py-3 rounded hover:bg-[#156632] transition-colors whitespace-nowrap cursor-pointer text-sm"
          >
            Join Us
          </a>
          <a
            href={LANDING_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#e8b800]/40 text-[#e8b800] font-bold px-8 py-3 rounded hover:bg-[#e8b800]/10 transition-colors whitespace-nowrap cursor-pointer text-sm"
          >
            View Game RTP
          </a>
        </div>
      </div>
    </section>
  );
}
