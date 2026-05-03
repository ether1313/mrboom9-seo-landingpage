import { LANDING_PAGE_URL } from "../../../config/site";

const features = [
  {
    title: "MrBoom9 AUS App Download",
    desc: "Android members install via APK distributed through official mrboom9.org channels, reflecting standard practice where marketplace policies restrict real-money gaming clients. iOS access remains available through the mobile web experience.",
    icon: "ri-download-cloud-line",
  },
  {
    title: "Every Deposit Random Bonus",
    desc: "Authorised tiles reference pseudo-random incentives between AUD 0.10 and AUD 5.00 on qualifying deposits from AUD 10. Validate parity with the web cashier within your session environment.",
    icon: "ri-gift-2-line",
  },
  {
    title: "Performance-optimised mobile layer",
    desc: "Navigation, asset loading, and table ingress are tuned for variable network conditions, preserving access to the full pokies and live portfolio while in transit.",
    icon: "ri-smartphone-line",
  },
];

export default function MobileAppSection() {
  return (
    <section id="mrboom9-mobile-app" className="py-14 bg-[#0d0d1a] relative overflow-hidden">
      {/* Wave-like radial gradient accents */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#1a7a3c]/8 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e8b800]/5 blur-[80px] rounded-full pointer-events-none" />
      {/* Subtle line pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #e8b800 0px, #e8b800 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">MrBoom9 Mobile Application</h2>
        <p className="text-gray-400 text-sm mb-10 max-w-3xl">
          <strong className="text-white">MrBoom9</strong> maintains a dedicated{" "}
          <strong className="text-white">Australian market application</strong> that mirrors the desktop incentive stack
          and account controls for members who require full functionality away from fixed workstations. Distribution is
          administered via <strong className="text-white">mrboom9.org</strong> to align with platform policy requirements
          for real-AUD wagering products.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <ul className="space-y-5 mb-8">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8b800] shrink-0">
                    <i className={`${f.icon} text-black text-lg`} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.title}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={LANDING_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1a7a3c] text-white font-bold px-8 py-3 rounded hover:bg-[#156632] transition-colors whitespace-nowrap cursor-pointer text-sm"
            >
              Download App
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={LANDING_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full cursor-pointer"
            >
              <div className="w-full rounded-lg border border-[#e8b800]/20 overflow-hidden bg-[#0a0f1a]">
                <img
                  src="/mrboom9-app-limited-free-time.png"
                  alt="MrBoom9 LIMITED FREE TIME promotion, up to 9.9 dollars, time windows 03:00-05:00, 09:00-11:00, 15:00-17:00, 20:00-22:00"
                  width={1024}
                  height={426}
                  className="w-full h-auto block align-top"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
