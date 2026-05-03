const reasons = [
  {
    num: "1",
    title: "Trusted for Aussie play",
    desc: "Made for Australia with secure play and AUD in mind. Listed with Trusted Pokies Australia (TPA) so you know where you stand.",
    icon: "ri-shield-check-line",
  },
  {
    num: "2",
    title: "New look, huge game list",
    desc: "Clean layout and easy menus plus 4000+ pokies from names like JILI, BNG, Vpower, Mega888, PlayStar, JDB, live dealers, and sports betting.",
    icon: "ri-palette-line",
  },
  {
    num: "3",
    title: "Bonuses spelt out",
    desc: "Monthly leaderboard, slot welcome 50%, slot daily 20%, random deposit bonus, referral 6%, and social share deals including TPA share.",
    icon: "ri-gift-line",
  },
  {
    num: "4",
    title: "Low entry on deals",
    desc: "Lots of offers start from AUD 10 deposits. Each deal has its own rollover and game rules, so read the tile before you jump in.",
    icon: "ri-money-dollar-circle-line",
  },
  {
    num: "5",
    title: "Share & earn extras",
    desc: "Facebook, Telegram, WhatsApp, and TPA tasks pay fixed AUD rewards when you finish the steps inside mrboom9.org.",
    icon: "ri-share-forward-line",
  },
  {
    num: "6",
    title: "Refer a mate",
    desc: "Send your link. Your mate needs a AUD 10+ first deposit. You get the 6% weekly referral deal on VP, RG, JOKER, and ACE333 as per the rules.",
    icon: "ri-user-add-line",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose-mrboom9" className="py-14 bg-[#0a0a1a] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23e8b800' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e8b800]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Why Choose MrBoom9?</h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          <strong className="text-white">MrBoom9</strong> keeps things simple for{" "}
          <strong className="text-white">Australian players</strong>: <strong className="text-white">new style</strong>,{" "}
          <strong className="text-white">new bonuses</strong>, and a site that <strong className="text-white">young Aussies</strong> actually
          like using on their phones. Pokies, live casino, sports, and mates rates all in one spot.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="bg-[#111118] rounded-lg p-6 border border-white/5 hover:border-[#e8b800]/40 transition-all hover:bg-[#111118]/80 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute top-0 right-0 w-0 h-0" style={{ borderTop: "24px solid #e8b800", borderLeft: "24px solid transparent" }} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8b800] mb-4">
                <i className={`${r.icon} text-black text-lg`} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">
                {r.num}. {r.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
