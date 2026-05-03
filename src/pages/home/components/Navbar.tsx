import { useState, useEffect } from "react";
import { LANDING_PAGE_URL } from "../../../config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Promotions", href: LANDING_PAGE_URL, external: true },
    { label: "Leaderboard", href: LANDING_PAGE_URL, external: true },
    { label: "Game RTP", href: LANDING_PAGE_URL, external: true },
    { label: "App Download", href: LANDING_PAGE_URL, external: true },
    { label: "Affiliate", href: LANDING_PAGE_URL, external: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a1a] border-b border-[#e8b800]/20" : "bg-[#0a0a1a]/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://xt30sf.b-cdn.net/media/98fc1afe78796540ce4f0.png"
              alt="MrBoom9"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                if (next) next.style.display = "block";
              }}
            />
            <span className="text-white font-extrabold text-lg hidden">MrBoom9</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-300 text-sm font-medium hover:text-[#e8b800] transition-colors whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={LANDING_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 text-sm font-medium border border-gray-500 rounded px-3 py-1.5 hover:border-[#e8b800] hover:text-[#e8b800] transition-colors whitespace-nowrap cursor-pointer"
            >
              Login
            </a>
            <a
              href={LANDING_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a7a3c] text-white text-sm font-bold rounded px-4 py-1.5 hover:bg-[#156632] transition-colors whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-300 w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <i className={`ri-${menuOpen ? "close" : "menu"}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d0d1a] border-t border-white/10 px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-300 text-sm font-medium py-2 border-b border-white/10 hover:text-[#e8b800] transition-colors cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-2">
              <a
                href={LANDING_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-gray-200 text-sm border border-gray-500 rounded py-2 hover:border-[#e8b800] hover:text-[#e8b800] transition-colors cursor-pointer"
              >
                Login
              </a>
              <a
                href={LANDING_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#1a7a3c] text-white text-sm font-bold rounded py-2 hover:bg-[#156632] transition-colors cursor-pointer"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
