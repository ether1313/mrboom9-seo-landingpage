import { LANDING_PAGE_URL } from "../../../config/site";

const channels = [
  {
    num: "1",
    icon: "ri-chat-3-line",
    title: "Live Chat",
    desc: "MrBoom9 Live Chat is available 24/7 for immediate assistance. Click the Live Chat button on any page to connect with the support team instantly.",
    link: LANDING_PAGE_URL,
    linkLabel: "Open Live Chat",
  },
  {
    num: "2",
    icon: "ri-telegram-line",
    title: "Telegram",
    desc: "Join the official MrBoom9 Telegram channel @MrBoom9aus for real-time updates, support, promotions, and community announcements.",
    link: LANDING_PAGE_URL,
    linkLabel: "@MrBoom9aus",
  },
  {
    num: "3",
    icon: "ri-whatsapp-line",
    title: "WhatsApp Group",
    desc: "Join the MrBoom9 WhatsApp community group for direct support and to stay connected with the latest promos and announcements.",
    link: LANDING_PAGE_URL,
    linkLabel: "Join Group",
  },
  {
    num: "4",
    icon: "ri-facebook-line",
    title: "Facebook",
    desc: "Follow MrBoom9 on Facebook for news, promotions, and player community updates. Share your wins and stay in the loop.",
    link: LANDING_PAGE_URL,
    linkLabel: "Follow Us",
  },
  {
    num: "5",
    icon: "ri-trophy-line",
    title: "Leaderboard",
    desc: "Check the MrBoom9 monthly top-10 deposit leaderboard to see where you rank and what prizes are up for grabs this month.",
    link: LANDING_PAGE_URL,
    linkLabel: "View Leaderboard",
  },
  {
    num: "6",
    icon: "ri-bar-chart-line",
    title: "Game RTP (Aussie Hot Game)",
    desc: "MrBoom9 partners with Aussie Hot Game to provide full RTP transparency for all games. Check live RTP data before you play.",
    link: LANDING_PAGE_URL,
    linkLabel: "View Game RTP",
  },
];

export default function SupportSection() {
  return (
    <section id="mrboom9-support" className="py-14 bg-[#0d0d1a] relative overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e8b800 1px, transparent 1px), linear-gradient(90deg, #e8b800 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute bottom-0 left-1/2 w-96 h-48 bg-[#1a7a3c]/8 blur-[80px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          MrBoom9 Customer Support Options
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-8">
          {/* Left: image */}
          <div className="flex flex-col items-center gap-4 w-full">
            <a
              href={LANDING_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-[min(100%,350px)] mx-auto cursor-pointer"
            >
              <div className="w-full rounded-lg overflow-hidden border border-white/20 shadow-lg shadow-black/30 bg-[#001a33]">
                <img
                  src="/mrboom9-welcome-support-card.png"
                  alt="MrBoom9 welcome card: why choose MrBoom9, extraordinary bonus, official websites, tutorial, 18 plus play responsibly"
                  width={692}
                  height={1024}
                  className="w-full h-auto block align-top"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </a>
            <a
              href={LANDING_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a7a3c] text-white font-bold px-10 py-3 rounded hover:bg-[#156632] transition-colors whitespace-nowrap cursor-pointer text-sm"
            >
              Join Us
            </a>
          </div>

          {/* Right: channels */}
          <div>
            <p className="text-gray-400 text-sm mb-6">
              Should you ever run into any issues while using the{" "}
              <strong className="text-white">MrBoom9 app</strong> or the website, the customer support team is
              available to assist you. <strong className="text-white">MrBoom9</strong> offers several ways to get in
              touch:
            </p>
            <ul className="space-y-4 mb-6">
              {channels.map((c) => (
                <li key={c.num} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8b800] shrink-0">
                    <i className={`${c.icon} text-black text-lg`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-white text-sm">{c.title}</p>
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e8b800] text-xs border border-[#e8b800]/30 rounded px-2 py-0.5 hover:bg-[#e8b800]/10 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {c.linkLabel}
                      </a>
                    </div>
                    <p className="text-gray-400 text-sm mt-0.5">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm">
              With these multiple support channels,{" "}
              <strong className="text-white">MrBoom9</strong> ensures players receive prompt and efficient assistance
              whenever needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
