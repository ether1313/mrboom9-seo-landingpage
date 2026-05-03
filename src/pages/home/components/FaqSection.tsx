import { useState } from "react";

const faqs = [
  {
    q: "How do I download the MrBoom9 app?",
    a: "Download the MrBoom9 AUS App from the official mrboom9.com website platform. Android players sideload the APK because Google Play often restricts real money casino installs. Every deposit through the app can trigger the random bonus mentioned on promotions. Use https://mrboom9.com/RFLANDINGPAGEE when staff share that installer path.",
  },
  {
    q: "Is MrBoom9 safe for online casino play?",
    a: "MrBoom9 encrypts account traffic end to end and keeps banking widgets inside verified cashier flows. Four thousand plus pokies and tables arrive from studios such as JILI, Booongo BNG, MEGA888, VPower, PlayStar, JDB, CQ9, and others that Australian players already recognise. MrBoom9 is featured under Trusted Pokies Australia (TPA), which helps newcomers compare licensed style entertainment operators quickly. Player chatter also sits on Trustpilot under the mrboom9 listing.",
  },
  {
    q: "What does Trusted Pokies Australia mean for MrBoom9?",
    a: "Trusted Pokies Australia, abbreviated TPA, focuses on how pokies heavy platforms educate readers before they fund an account. MrBoom9 appears inside that directory because its catalogue depth, AUD cashier, and promotional cadence match what TPA expects from Australian facing online casino brands.",
  },
  {
    q: "What is the minimum deposit and withdrawal on MrBoom9?",
    a: "Several mrboom9.com tiles unlock from AUD 10 deposits. Random bonuses apply when you add at least AUD 10. Always read the cashier panel for your wallet because base limits and universal withdrawal floors can differ from marketing artwork.",
  },
  {
    q: "Which bonuses does MrBoom9 highlight on the public site?",
    a: "This project summarises six tiles: Exclusive Monthly Deposit Ranking with the published AUD ladder, Slot Welcome Bonus 50%, Slot Daily Bonus 20%, Every Deposit Random Bonus, Referral Bonus 6% with VP RG JOKER ACE333 rules, and Social Share bonuses covering Facebook AUD 30, TPA Share AUD 35, Telegram AUD 30, and WhatsApp Task AUD 39.99. Opt in only after you read rollover lines on mrboom9.com.",
  },
  {
    q: "Can I play MrBoom9 from my mobile device?",
    a: "Android installs use the APK referenced above. iPhone players rely on Safari because Apple restricts native wrappers for offshore wallets. Either route reaches pokies, fishing shooters such as VPower, live hosts, and sports including FIFA World Cup coupons.",
  },
  {
    q: "How does the MrBoom9 referral programme work?",
    a: "Share your personal link from mrboom9.com. You must fund at least AUD 10 yourself to unlock the referral track. Each invited mate should register and place a first deposit of AUD 10 or more. The visible tile quotes weekly commission at 6% with withdrawal caps between AUD 28 and AUD 399 and gameplay limited to VP, RG, JOKER, and ACE333 while saving free games remains banned for that bonus. Heavy affiliates still negotiate partnership terms via https://mrboom9.com/RFLANDINGPAGEE separately.",
  },
  {
    q: "How does SMS registration work?",
    a: "Enter your legal name, mobile, password, optional referrer code, press GET CODE, type the SMS pin, then REGISTER. Names must match your bank account to avoid payout friction.",
  },
  {
    q: "What is the MrBoom9 Monthly Deposit Ranking?",
    a: "Monthly Deposit Ranking stacks players by total inbound AUD transfers across each calendar month in Sydney and Melbourne time. Higher totals unlock leaderboard payouts listed beside the promotion tile on https://mrboom9.com/RFLANDINGPAGEE.",
  },
  {
    q: "How do I check game RTP on MrBoom9?",
    a: "MrBoom9 routes RTP sheets through Aussie Hot Game so every pokies title exposes maths tables before you spin. For fuller RTP notes beyond these summaries, open https://mrboom9.com/RFLANDINGPAGEE.",
  },
  {
    q: "How do I join the MrBoom9 Affiliate Partnership program?",
    a: "Partners join via https://mrboom9.com/RFLANDINGPAGEE to negotiate rev share on referred turnover. Keep creatives aligned with mrboom9.com compliance notes.",
  },
  {
    q: "How many games does MrBoom9 offer?",
    a: "Expect north of four thousand releases spanning pokies, fishing halls, live roulette style streams, mini games, and sports. Providers rotate seasonally but banners routinely shout JILI, Booongo BNG, MEGA888, VPower, WREDGENN, CQ9, ACE333, YGR, and IBEX among others.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 bg-[#0a0a1a] relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #e8b800 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glowing center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e8b800]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        <div className="flex justify-center mb-2">
          <div className="w-12 h-1 bg-[#e8b800] rounded" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="border border-white/10 rounded-lg overflow-hidden hover:border-[#e8b800]/30 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-[#e8b800]/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <i
                    className={`ri-${openIndex === i ? "subtract" : "add"}-line text-[#e8b800] text-lg`}
                  />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3 bg-[#111118]/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
