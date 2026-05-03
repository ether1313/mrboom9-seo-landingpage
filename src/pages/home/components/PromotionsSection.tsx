import { type ReactNode } from "react";
import { LANDING_PAGE_URL } from "../../../config/site";

const RANKING_RULES: { icon: string; content: ReactNode }[] = [
  {
    icon: "ri-time-line",
    content: (
      <>
        Runs From The <strong className="text-white">1st To The Last Day</strong> Of Each Month (Syd/Melb Time).
      </>
    ),
  },
  {
    icon: "ri-bar-chart-line",
    content: (
      <>
        Ranking Is Based On <strong className="text-white">Total Deposit Amount</strong> Only.
      </>
    ),
  },
  {
    icon: "ri-line-chart-line",
    content: (
      <>
        The More You Deposit, The <strong className="text-white">Higher Your Ranking</strong>.
      </>
    ),
  },
  {
    icon: "ri-money-dollar-circle-line",
    content: (
      <>
        Rewards Distributed <strong className="text-white">After The End Of The Month</strong>.
      </>
    ),
  },
];

type PrizeTier = "gold" | "silver" | "bronze" | "plain";

const PRIZE_POOL_ROWS: { rank: string; amount: string; tier: PrizeTier }[] = [
  { rank: "#1", amount: "AUD 5999", tier: "gold" },
  { rank: "#2", amount: "AUD 3999", tier: "silver" },
  { rank: "#3", amount: "AUD 2999", tier: "bronze" },
  { rank: "#4", amount: "AUD 1999", tier: "plain" },
  { rank: "#5", amount: "AUD 999", tier: "plain" },
  { rank: "#6", amount: "AUD 599", tier: "plain" },
  { rank: "#7", amount: "AUD 499", tier: "plain" },
  { rank: "#8", amount: "AUD 399", tier: "plain" },
  { rank: "#9", amount: "AUD 299", tier: "plain" },
  { rank: "#10", amount: "AUD 199", tier: "plain" },
];

const promo = {
  tag: "MONTHLY RANKING",
  title: "Exclusive Monthly Deposit Ranking",
  subtitle: "Live top deposit leaderboard with monthly prizes",
  desc: "Each month your deposits add up in Sydney and Melbourne time. When the month ends, the top ten totals split the cash prizes listed in the table.",
  ctaLink: LANDING_PAGE_URL,
  image: "/mrboom9-deposit-leaderboard.png",
  imageWidth: 950,
  imageHeight: 1024,
};

function PrizeTierIcon({ tier }: Readonly<{ tier: PrizeTier }>) {
  if (tier === "plain") return null;
  let cls = "ri-medal-fill text-[#cd7f32]";
  if (tier === "gold") cls = "ri-trophy-fill text-[#e8b800]";
  else if (tier === "silver") cls = "ri-medal-fill text-[#c0c8d4]";
  return <i className={`${cls} text-lg shrink-0`} aria-hidden />;
}

function PrizeRowStyles(tier: PrizeTier) {
  if (tier === "gold") return "text-[#e8b800]";
  if (tier === "silver") return "text-[#c0c8d4]";
  if (tier === "bronze") return "text-[#cd7f32]";
  return "text-gray-300";
}

export default function PromotionsSection() {
  return (
    <section id="mrboom9-promotions" className="py-14 bg-[#0a0a1a] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #e8b800 0px, #e8b800 1px, transparent 1px, transparent 24px)",
        }}
      />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#e8b800]/6 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1a7a3c]/8 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Featured Programme: Monthly Deposit Ranking
            </h2>
            <p className="text-gray-400 text-sm mt-1 max-w-2xl">
              Other deals on this site include slot welcome 50%, slot daily 20%, random deposit bonus, referral 6%, and
              social share tasks. See the bonuses section for full detail.
            </p>
          </div>
          <a
            href={LANDING_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8b800] text-sm border border-[#e8b800]/40 rounded px-4 py-2 hover:bg-[#e8b800]/10 transition-colors whitespace-nowrap cursor-pointer self-start md:self-auto"
          >
            View All Promotions <i className="ri-arrow-right-line ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative lg:sticky lg:top-24 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
            <a
              href={promo.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden border border-[#e8b800]/25 bg-[#0a0e27] shadow-xl shadow-black/40 ring-1 ring-pink-500/10 hover:border-[#e8b800]/40 transition-colors"
            >
              <img
                src={promo.image}
                alt="MrBoom9 live top deposit leaderboard, May rankings, login to check your status"
                width={promo.imageWidth}
                height={promo.imageHeight}
                className="w-full h-auto block align-top"
                decoding="async"
                loading="lazy"
              />
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#e8b800]" />
              <span className="text-[#e8b800] text-xs font-semibold tracking-widest uppercase">
                {promo.tag}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {promo.title}
            </h3>
            <p className="text-[#e8b800] text-sm font-medium mb-4">{promo.subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{promo.desc}</p>

            <div className="rounded-lg border border-[#e8b800]/25 bg-[#0d1428]/80 p-5 mb-5">
              <h4 className="text-[#e8b800] text-sm font-bold uppercase tracking-wider mb-4">
                Competition Rules
              </h4>
              <ul className="space-y-3">
                {RANKING_RULES.map((rule) => (
                  <li key={rule.icon} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <i className={`${rule.icon} text-white shrink-0 mt-0.5`} aria-hidden />
                    <span>{rule.content}</span>
                  </li>
                ))}
              </ul>
              <a
                href={promo.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full text-center font-bold uppercase tracking-wide text-sm py-3.5 rounded-lg text-black bg-gradient-to-r from-[#e8b800] via-[#d4af37] to-[#c9a855] hover:from-[#f0c430] hover:to-[#d4af37] transition-all cursor-pointer shadow-lg shadow-[#e8b800]/10"
              >
                Check Your Ranking
              </a>
            </div>

            <div className="rounded-lg border border-[#e8b800]/25 bg-[#0d1428]/80 overflow-hidden mb-6">
              <div className="border-b border-[#e8b800]/20 px-4 py-3">
                <h4 className="text-[#e8b800] text-sm font-bold uppercase tracking-wider text-center">
                  Prize Pool
                </h4>
              </div>
              <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-white/10 py-2 px-4">
                <span className="text-center">Rank</span>
                <span className="text-center">Cash Prize</span>
              </div>
              <div className="divide-y divide-white/10">
                {PRIZE_POOL_ROWS.map((row) => (
                  <div
                    key={row.rank}
                    className={`grid grid-cols-2 items-center gap-2 py-3 px-4 text-sm font-semibold ${PrizeRowStyles(row.tier)}`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <PrizeTierIcon tier={row.tier} />
                      {row.rank}
                    </span>
                    <span className="text-center">{row.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={LANDING_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center bg-[#1a7a3c] text-white font-bold px-8 py-3 rounded hover:bg-[#156632] transition-colors cursor-pointer text-sm w-full sm:w-auto"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
