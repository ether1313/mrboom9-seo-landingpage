import { siteUrl } from "../../../config/site";

export default function SignUpSection() {
  const steps = [
    {
      title: "Open the MrBoom9 register screen",
      desc: "On mobile or desktop, go to the Login and Register entry on mrboom9.org so you see the same fields as the live app, including the TPA partnership badge when it is shown beside the form.",
    },
    {
      title: "Enter your full legal name",
      desc: "Type your name exactly as it appears on your Australian bank account. The form warns that it must match your bank account name so withdrawals do not get stuck in a name mismatch review.",
    },
    {
      title: "Add your mobile number",
      desc: "Use your active mobile in international format, for example 61480050689 for Australia. This number receives the SMS verification code.",
    },
    {
      title: "Create your password",
      desc: "Choose a password between 6 and 20 characters as shown on the register form.",
    },
    {
      title: "Referrer code if you have one",
      desc: "The form may show a default such as RFLANDINGPAGEE for promos. Paste your own invite code if a friend shared a different link, or leave it as provided.",
    },
    {
      title: "Request and enter the SMS code",
      desc: "Tap GET CODE. Wait for the text message, then type the verification code into the field next to the button. You must complete this step before the account goes live.",
    },
    {
      title: "Submit and sign in later if needed",
      desc: "Press REGISTER to finish. If you already hold an account, use the Already Have An Account link at the bottom of the screen to jump to login instead of creating a duplicate profile.",
    },
  ];

  return (
    <section id="mrboom9-sign-up" className="py-14 bg-[#0d0d1a] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#e8b800 1px, transparent 1px), linear-gradient(90deg, #e8b800 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-64 h-32 bg-[#e8b800]/5 blur-[60px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="w-12 h-1 bg-[#e8b800] rounded mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          MrBoom9 Sign Up: Register Step by Step
        </h2>
        <p className="text-gray-400 text-sm mb-8 max-w-3xl">
          Follow the same order as the mrboom9.org registration form: name, mobile, password, optional referrer code,
          SMS verification with GET CODE, then REGISTER. Keep your bank details and profile name aligned from day one.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ol className="space-y-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e8b800] text-black font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{step.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col items-center gap-4 w-full lg:max-w-md mx-auto lg:mx-0 lg:justify-self-end">
            <a
              href={siteUrl("/register")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-[min(100%,350px)] cursor-pointer"
            >
              <div className="w-full rounded-lg border border-[#e8b800]/20 overflow-hidden bg-[#0a1628] shadow-lg shadow-black/30">
                <img
                  src="/mrboom9-register-screenshot.png"
                  alt="MrBoom9 registration banner"
                  width={631}
                  height={1024}
                  className="w-full h-auto block align-top max-w-none"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </a>
            <a
              href={siteUrl("/register")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a7a3c] text-white font-bold px-10 py-3 rounded hover:bg-[#156632] transition-colors whitespace-nowrap cursor-pointer text-sm"
            >
              Open Register Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
