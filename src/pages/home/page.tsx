import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SubNav from "./components/SubNav";
import SignUpSection from "./components/SignUpSection";
import WhyChooseSection from "./components/WhyChooseSection";
import MobileAppSection from "./components/MobileAppSection";
import SportsbookSection from "./components/SportsbookSection";
import CasinoSection from "./components/CasinoSection";
import BonusesSection from "./components/BonusesSection";
import PromotionsSection from "./components/PromotionsSection";
import SeoContentSection from "./components/SeoContentSection";
import SupportSection from "./components/SupportSection";
import FaqSection from "./components/FaqSection";
import FooterBanner from "./components/FooterBanner";
import Footer from "./components/Footer";
import FloatingJoinButton from "./components/FloatingJoinButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] relative overflow-x-hidden">
      {/* Global SVG background pattern overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e8b800' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none fixed top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full bg-[#e8b800]/5 blur-[120px] z-0" />
      <div className="pointer-events-none fixed bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-[#1a7a3c]/8 blur-[140px] z-0" />
      <div className="pointer-events-none fixed top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-[#e8b800]/3 blur-[100px] z-0" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SubNav />

        {/* Intro paragraph */}
        <section className="py-10 bg-[#111118]/90 border-b border-white/5 relative overflow-hidden">
          {/* Diagonal stripe accent */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #e8b800 0px, #e8b800 1px, transparent 1px, transparent 20px)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
            {/* Gold accent line */}
            <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              MrBoom9: Australia&apos;s Best Online Casino &amp; Pokies Site
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-4xl">
              <strong className="text-gray-200">MrBoom9</strong> is built for <strong className="text-gray-200">Australian players</strong>{" "}
              who want a <strong className="text-gray-200">new look</strong>, <strong className="text-gray-200">new bonuses</strong>, and a{" "}
              <strong className="text-gray-200">mobile-friendly</strong> site on <strong className="text-gray-200">mrboom9.com</strong>. It
              hits the sweet spot with <strong className="text-gray-200">young Aussies</strong> who want pokies, live games, and sports in one
              place with <strong className="text-gray-200">AUD</strong> payments and straight-up promo rules.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-4xl">
              On the promo wall you&apos;ll see six main deals: <strong className="text-gray-200">monthly deposit ranking</strong> with cash
              prizes, <strong className="text-gray-200">slot welcome bonus 50%</strong>,{" "}
              <strong className="text-gray-200">slot daily bonus 20%</strong>, <strong className="text-gray-200">random bonus on deposit</strong>,{" "}
              <strong className="text-gray-200">referral bonus 6%</strong>, plus{" "}
              <strong className="text-gray-200">social share bonuses</strong> on Facebook, <strong className="text-gray-200">TPA</strong>, Telegram,
              and WhatsApp.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
              Below we cover sign-up with SMS, games, sports, and FAQs. Numbers are a quick guide only; always double-check the cashier and
              promo pages on <strong className="text-gray-200">mrboom9.com</strong> before you deposit or claim.
            </p>
          </div>
        </section>

        <SignUpSection />
        <WhyChooseSection />
        <MobileAppSection />
        <SportsbookSection />
        <CasinoSection />
        <BonusesSection />
        <PromotionsSection />
        <SeoContentSection />
        <SupportSection />
        <FaqSection />
        <FooterBanner />
        <Footer />

        <FloatingJoinButton />
      </div>
    </div>
  );
}
