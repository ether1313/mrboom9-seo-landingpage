import { useState, useEffect } from "react";
import { siteUrl } from "../../../config/site";

export default function FloatingJoinButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~580px (hero section height)
      setVisible(window.scrollY > 580);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-6 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={siteUrl("/register")}
        className="flex items-center gap-2 bg-[#1a7a3c] text-white font-bold px-5 py-3 rounded-full hover:bg-[#156632] transition-colors cursor-pointer whitespace-nowrap text-sm"
        style={{ boxShadow: "0 4px 24px rgba(26,122,60,0.5)" }}
      >
        <i className="ri-user-add-line text-base"></i>
        Join Now
      </a>
    </div>
  );
}
