import { LANDING_PAGE_URL } from "../../../config/site";

export default function SubNav() {
  const links = [
    { label: "Sign Up", href: "#mrboom9-sign-up", external: false },
    { label: "Sign In", href: "#mrboom9-sign-in", external: false },
    { label: "Bonuses & Promotions", href: "#player-bonuses-and-promotions", external: false },
    { label: "Why MrBoom9", href: "#why-choose-mrboom9", external: false },
    { label: "Mobile App", href: "#mrboom9-mobile-app", external: false },
    { label: "Sportsbook", href: "#mrboom9-sportsbook", external: false },
    { label: "Casino", href: "#mrboom9-casino", external: false },
    { label: "Guides", href: "#mrboom9-seo-guides", external: false },
    { label: "Leaderboard", href: LANDING_PAGE_URL, external: true },
    { label: "Game RTP", href: LANDING_PAGE_URL, external: true },
    { label: "Customer Support", href: "#mrboom9-support", external: false },
    { label: "FAQ", href: "#faq", external: false },
  ];

  return (
    <div className="w-full bg-[#0d0d1a] border-b border-[#e8b800]/20 sticky top-14 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-2">
          <span className="text-[#e8b800] font-bold text-xs whitespace-nowrap mr-3 hidden md:block">
            MrBoom9:
          </span>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-gray-400 text-xs font-medium px-3 py-1.5 rounded hover:bg-[#e8b800]/10 hover:text-[#e8b800] transition-colors whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
