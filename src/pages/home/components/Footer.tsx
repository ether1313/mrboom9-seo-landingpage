import { LANDING_PAGE_URL } from "../../../config/site";

const menuLinks = [
  { label: "Login & Register", href: LANDING_PAGE_URL },
  { label: "Promotions", href: LANDING_PAGE_URL },
  { label: "Leaderboard", href: LANDING_PAGE_URL },
  { label: "App Download", href: LANDING_PAGE_URL },
  { label: "Game RTP", href: LANDING_PAGE_URL },
  { label: "Aussie Hot Game", href: LANDING_PAGE_URL },
  { label: "Affiliate Partnership", href: LANDING_PAGE_URL },
  { label: "Trustpilot Reviews", href: LANDING_PAGE_URL },
];

const socialLinks = [
  {
    label: "Telegram",
    icon: "ri-telegram-fill",
    href: LANDING_PAGE_URL,
    color: "#2CA5E0",
    bg: "bg-[#2CA5E0]/15",
    border: "border-[#2CA5E0]/30",
    hoverBg: "hover:bg-[#2CA5E0]/25",
  },
  {
    label: "Facebook",
    icon: "ri-facebook-fill",
    href: LANDING_PAGE_URL,
    color: "#1877F2",
    bg: "bg-[#1877F2]/15",
    border: "border-[#1877F2]/30",
    hoverBg: "hover:bg-[#1877F2]/25",
  },
  {
    label: "WhatsApp",
    icon: "ri-whatsapp-fill",
    href: LANDING_PAGE_URL,
    color: "#25D366",
    bg: "bg-[#25D366]/15",
    border: "border-[#25D366]/30",
    hoverBg: "hover:bg-[#25D366]/25",
  },
  {
    label: "Trustpilot",
    icon: "ri-star-fill",
    href: LANDING_PAGE_URL,
    color: "#00B67A",
    bg: "bg-[#00B67A]/15",
    border: "border-[#00B67A]/30",
    hoverBg: "hover:bg-[#00B67A]/25",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#070710] border-t border-white/5 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #e8b800 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Logo + tagline */}
          <div>
            <img
              src="https://xt30sf.b-cdn.net/media/98fc1afe78796540ce4f0.png"
              alt="MrBoom9"
              className="h-8 w-auto object-contain mb-3"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                if (next) next.style.display = "block";
              }}
            />
            <span className="text-white font-extrabold text-base hidden">MrBoom9</span>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              <strong className="text-gray-400">MrBoom9</strong>: <strong className="text-gray-400">new style</strong>,{" "}
              <strong className="text-gray-400">new bonuses</strong>, built for <strong className="text-gray-400">Aussie players</strong> and
              popular with <strong className="text-gray-400">young Aussies</strong>. Pokies, live games, sports, AUD banking. Check{" "}
              <span className="text-gray-400">mrboom9.com</span> for deposit and withdrawal info.
            </p>
          </div>

          {/* Menu */}
          <div>
            <p className="font-bold text-white text-sm mb-4">Quick Links</p>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-xs hover:text-[#e8b800] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <i className="ri-arrow-right-s-line text-[#e8b800]/50 text-sm" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-bold text-white text-sm mb-4">Follow Us</p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 border rounded-lg px-3 py-2 transition-all cursor-pointer ${s.bg} ${s.border} ${s.hoverBg}`}
                >
                  <div className="w-7 h-7 flex items-center justify-center shrink-0">
                    <i className={`${s.icon} text-xl`} style={{ color: s.color }} />
                  </div>
                  <span className="text-gray-300 text-xs font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-4 flex items-center justify-center px-4 relative">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-gray-600 text-xs">Powered by</span>
          <img
            src="https://xt30sf.b-cdn.net/media/98fc1afe78796540ce4f0.png"
            alt="MrBoom9"
            className="h-4 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
              if (next) next.style.display = "block";
            }}
          />
          <span className="text-gray-600 text-xs hidden">MrBoom9</span>
          <span className="text-gray-600 text-xs">&copy; 2026 MrBoom9. All rights reserved.</span>
          <span className="text-gray-700 text-xs">|</span>
          <a
            href={LANDING_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 text-xs hover:text-[#00B67A] transition-colors cursor-pointer flex items-center gap-1"
          >
            <i className="ri-star-fill text-[#00B67A] text-xs" />
            Trustpilot Reviews
          </a>
        </div>
      </div>
    </footer>
  );
}
