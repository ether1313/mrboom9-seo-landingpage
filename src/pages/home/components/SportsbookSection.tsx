const sports = [
  {
    icon: "ri-football-line",
    title: "Football and FIFA World Cup cycles",
    desc: "Premier League, La Liga, Serie A, Champions League, and international windows including FIFA World Cup futures and match markets once fixtures publish on mrboom9.org.",
  },
  {
    icon: "ri-basketball-line",
    title: "Multi sport coverage",
    desc: "Basketball, tennis, cricket, esports and regional codes sit beside football so Australian bettors can hedge tickets without leaving the wallet they already use for pokies.",
  },
  {
    icon: "ri-live-line",
    title: "In play pricing",
    desc: "Live betting refreshes odds while matches run, which matters when cup tournaments stack kick offs late at night for east coast viewers.",
  },
  {
    icon: "ri-exchange-dollar-line",
    title: "Single balance with the casino lobby",
    desc: "Promotions referenced on this landing page focus on the six mrboom9.org tiles in the bonuses section. Sports stakes still draw from the same AUD wallet after you complete rollover on any active slot bonus.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Mobile friendly slips",
    desc: "Use the MrBoom9 AUS App or mobile web so you can react to line moves while away from desktop hardware.",
  },
];

export default function SportsbookSection() {
  return (
    <section id="mrboom9-sportsbook" className="py-14 bg-[#111118] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e8b800 0px, #e8b800 1px, transparent 1px, transparent 16px), repeating-linear-gradient(-45deg, #e8b800 0px, #e8b800 1px, transparent 1px, transparent 16px)",
        }}
      />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#e8b800]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">MrBoom9 Sportsbook Overview</h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          The <strong className="text-white">MrBoom9 sportsbook</strong> sits beside the casino lobby so football fans can
          ride FIFA tournament swings without opening a second operator account. Bonus headline amounts on this microsite
          intentionally mirror only the six mrboom9.org tiles outlined above.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((s) => (
            <div
              key={s.title}
              className="bg-[#0a0a1a] rounded-lg p-6 border border-white/5 hover:border-[#e8b800]/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e8b800]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0d1a0d] border border-[#e8b800]/30 mb-4">
                <i className={`${s.icon} text-[#e8b800] text-xl`} />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
