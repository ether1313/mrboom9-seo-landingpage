import { LANDING_PAGE_URL } from "../../../config/site";

type BonusCard = {
  icon: string;
  title: string;
  highlight?: boolean;
  intro: string;
  bullets: string[];
};

const bonuses: BonusCard[] = [
  {
    icon: "ri-trophy-line",
    title: "Exclusive Monthly Deposit Ranking",
    highlight: true,
    intro:
      "Runs from the 1st through the last day of each month on Sydney and Melbourne time. Rank uses total deposit amount only. Rewards settle after the month closes.",
    bullets: [
      "Prizes for ranks #1 to #10, from AUD 5999 down to AUD 199",
      "Tap Check Your Ranking on mrboom9.com to see live placement",
    ],
  },
  {
    icon: "ri-gamepad-line",
    title: "Slot Welcome Bonus 50%",
    intro: "For new members once only. Slots and slot products only.",
    bullets: [
      "Minimum deposit AUD 10 to apply",
      "Maximum bonus up to AUD 250",
      "Valid: slot games only. Not valid: live games, fishing games, or save free games",
      "Withdraw: Slot Welcome Bonus rollover x6. Min withdraw at x6 turnover, max withdraw capped at x100 turnover",
    ],
  },
  {
    icon: "ri-sun-line",
    title: "Slot Daily Bonus 20%",
    intro: "MrBoom9 members can claim once every day.",
    bullets: [
      "Minimum deposit AUD 30 to apply",
      "Maximum bonus up to AUD 60",
      "Valid: all slot games. Not valid: live, fishing, or save free game modes",
      "Withdraw: Slot Daily Bonus rollover x4. Min withdraw at x3 turnover, max withdraw at x100 turnover",
    ],
  },
  {
    icon: "ri-gift-line",
    title: "Every Deposit Random Bonus",
    intro: "Unlimited claims every day when you fund with at least AUD 10.",
    bullets: [
      "Random reward from AUD 0.10 up to AUD 5.00",
      "Valid on slot games only; live and fishing excluded; save free game not allowed",
      "Bonus rollover x1.5 for withdrawal",
      "Min withdraw AUD 50, max withdraw AUD 50,000 on this path",
    ],
  },
  {
    icon: "ri-user-add-line",
    title: "Referral Bonus 6%",
    intro: "Invite a friend who registers through your link and funds the account.",
    bullets: [
      "You need at least AUD 10 deposited to activate the referral track",
      "Your friend’s first deposit must be AUD 10 or more",
      "Weekly commission on the offer is 6%",
      "Withdraw: min claim or withdraw AUD 28, max withdraw AUD 399. Valid only on VP, RG, JOKER, and ACE333. Saving free games is prohibited",
    ],
  },
  {
    icon: "ri-share-line",
    title: "Social Share Bonuses",
    intro: "Complete the channel tasks on mrboom9.com to unlock fixed AUD rewards.",
    bullets: [
      "Facebook Share Bonus AUD 30",
      "TPA Share Bonus AUD 35 (Trusted Pokies Australia)",
      "Telegram Share Bonus AUD 30",
      "WhatsApp Task Free AUD 39.99",
    ],
  },
];

export default function BonusesSection() {
  return (
    <section id="player-bonuses-and-promotions" className="py-14 bg-[#111118] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #e8b800 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#e8b800]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          MrBoom9 Player Bonuses and Promotions
        </h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          Here are the six main <strong className="text-gray-200">bonus</strong> deals on <strong className="text-gray-200">mrboom9.com</strong>{" "}
          for <strong className="text-gray-200">Australian players</strong>: easy labels, straight rollover notes, same tiles you see live on
          site. Always read the full rules on the promo page before you opt in or deposit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className={`border rounded-lg p-6 hover:border-[#e8b800]/40 transition-all group relative overflow-hidden flex flex-col ${
                b.highlight
                  ? "bg-gradient-to-br from-[#e8b800]/10 to-[#0a0a1a] border-[#e8b800]/40"
                  : "bg-[#0a0a1a] border-white/5"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8b800]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg" />
              {b.highlight && (
                <div className="absolute top-3 right-3 bg-[#e8b800] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                  FEATURED
                </div>
              )}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#e8b800] mb-4 relative shrink-0">
                <i className={`${b.icon} text-black text-xl`} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{b.intro}</p>
              <ul className="text-gray-500 text-xs leading-relaxed space-y-2 list-disc pl-4 mt-auto">
                {b.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={LANDING_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#e8b800] text-black font-bold px-8 py-3 rounded hover:bg-[#d4a700] transition-colors whitespace-nowrap cursor-pointer text-sm"
          >
            View All Promotions
          </a>
        </div>
      </div>
    </section>
  );
}
