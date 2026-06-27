"use client";

const pricingTiers = [
  {
    title: "Keynote (1-2 hours)",
    price: "฿6,000",
    unit: "per hour",
    features: ["Customized content for your audience", "Q&A session"],
    highlighted: false,
    action: "Book Now"
  },
  {
    title: "Half-day workshop (3+ hours)",
    price: "฿18,000",
    unit: "per session",
    features: ["Workshop materials", "Customized content for your team"],
    highlighted: true,
    badge: "RECOMMENDED",
    action: "Get Started"
  },
  {
    title: "Full-day workshop (6 hours)",
    price: "฿35,000",
    unit: "per day",
    features: ["Full workshop materials", "2 break sessions", "Q&A + closing summary"],
    highlighted: false,
    action: "Let's Talk"
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-blue-light/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-semibold text-accent-blue-light tracking-widest uppercase block mb-3">
            Speaker & Workshop Facilitator
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Design / Branding / Creative / Canva
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-base md:text-lg leading-relaxed">
            Elevate your team's creative capabilities with hands-on workshops and inspiring keynotes tailored to your brand's unique challenges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative glass-panel rounded-2xl p-8 md:p-10 transition-all duration-500 flex flex-col h-full ${
                tier.highlighted
                  ? "border-accent-blue/40 shadow-[0_0_40px_rgba(56,189,248,0.15)] md:-translate-y-4 bg-white/5"
                  : "border-white/5 hover:border-white/20 hover:-translate-y-2 bg-transparent"
              }`}
            >
              {/* Highlight Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent-blue-light text-black text-[10px] font-bold uppercase tracking-wider shadow-lg">
                  {tier.badge}
                </div>
              )}

              {/* Card Header */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm font-medium text-white/50">{tier.unit}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent-blue-light shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <a
                href="#contact"
                className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center ${
                  tier.highlighted
                    ? "bg-white text-black hover:bg-white/90 shadow-lg"
                    : "bg-transparent text-white border border-white/20 hover:bg-white/5"
                }`}
              >
                {tier.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
