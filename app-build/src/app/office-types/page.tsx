import Link from "next/link";
import { CheckCircle, XCircle, Clock, ArrowRight } from "lucide-react";

const timeline = [
  { step: "1", title: "Requirements", desc: "Define headcount, budget, preferred location & lease term", duration: "1 week" },
  { step: "2", title: "Shortlisting & Viewings", desc: "Curated building visits with direct landlord introductions", duration: "2–4 weeks" },
  { step: "3", title: "Letter of Intent (LOI)", desc: "Submit LOI to secure the unit and begin negotiations", duration: "1 week" },
  { step: "4", title: "Negotiation", desc: "Rent, fit-out contribution, rent-free period, lease terms", duration: "1–2 weeks" },
  { step: "5", title: "Tenancy Agreement (TA)", desc: "Sign TA and pay security deposit (typically 2–3 months)", duration: "1 week" },
  { step: "6", title: "Fit-Out / Move-In", desc: "Renovation (if needed) and office setup", duration: "2–16 weeks" },
];

export default function OfficeTypesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Office Types</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Choosing the Right Office</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Understand your options — from flexible co-working to bespoke private offices — and find what fits your business best.</p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#0f2044" }}>Office Type Comparison</h2>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Shared / Serviced */}
            <div className="rounded-2xl border-2 border-gray-100 overflow-hidden">
              <div className="p-6" style={{ backgroundColor: "#0f2044" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>Option A</p>
                <h3 className="text-xl font-bold text-white">Shared / Serviced Office</h3>
                <p className="text-gray-300 text-sm mt-2">Co-working & serviced workspace</p>
              </div>
              <div className="p-6 bg-white">
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Best For</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Startups & freelancers", "Teams of 1–20 pax", "Short-term projects (1–12 months)", "Companies testing Singapore market"].map(t => (
                      <li key={t} className="flex items-center gap-2"><CheckCircle size={14} style={{ color: "#c9a84c" }} />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Pros</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {["Flexible month-to-month contracts", "Fully furnished & equipped", "Utilities & cleaning included", "Low setup cost", "Immediate occupancy"].map(t => (
                      <li key={t} className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500 flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Cons</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {["Higher per-sqft cost long-term", "Limited brand identity", "Less privacy", "Shared facilities"].map(t => (
                      <li key={t} className="flex items-center gap-2"><XCircle size={14} className="text-red-400 flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400">Est. Cost</p>
                  <p className="font-bold text-lg" style={{ color: "#0f2044" }}>S$500–2,000/desk/mo</p>
                </div>
              </div>
            </div>

            {/* Private Fitted */}
            <div className="rounded-2xl border-2 overflow-hidden" style={{ borderColor: "#c9a84c" }}>
              <div className="px-4 py-2 text-center text-xs font-bold text-[#0f2044]" style={{ backgroundColor: "#c9a84c" }}>
                MOST POPULAR
              </div>
              <div className="p-6" style={{ backgroundColor: "#0f2044" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>Option B</p>
                <h3 className="text-xl font-bold text-white">Private Office — Fitted</h3>
                <p className="text-gray-300 text-sm mt-2">Move-in ready with existing fit-out</p>
              </div>
              <div className="p-6 bg-white">
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Best For</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Teams of 10–100 pax", "Medium-term leases (1–3 years)", "Companies wanting branded space quickly", "Cost-conscious growing businesses"].map(t => (
                      <li key={t} className="flex items-center gap-2"><CheckCircle size={14} style={{ color: "#c9a84c" }} />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Pros</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {["Plug & Play — move in within weeks", "Saves S$50–200k in fit-out costs", "Privacy & brand identity", "Fixed address for corporate image"].map(t => (
                      <li key={t} className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500 flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Cons</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {["Existing design may not suit brand", "Less customisation", "Reinstatement may still apply"].map(t => (
                      <li key={t} className="flex items-center gap-2"><XCircle size={14} className="text-red-400 flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> Move-in Timeline</p>
                  <p className="font-bold text-lg" style={{ color: "#0f2044" }}>2–4 weeks after signing</p>
                </div>
              </div>
            </div>

            {/* Private Bare Shell */}
            <div className="rounded-2xl border-2 border-gray-100 overflow-hidden">
              <div className="p-6" style={{ backgroundColor: "#0f2044" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>Option C</p>
                <h3 className="text-xl font-bold text-white">Private Office — Bare Shell</h3>
                <p className="text-gray-300 text-sm mt-2">Raw space for full customisation</p>
              </div>
              <div className="p-6 bg-white">
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Best For</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Established businesses (50+ pax)", "Long-term leases (3+ years)", "Companies with strong brand requirements", "Flagship office presence"].map(t => (
                      <li key={t} className="flex items-center gap-2"><CheckCircle size={14} style={{ color: "#c9a84c" }} />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Pros</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {["100% design freedom", "Build your dream workspace", "Landlord fit-out contribution available", "Strong brand statement"].map(t => (
                      <li key={t} className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500 flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase text-gray-400 mb-3">Cons</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {["High upfront fit-out cost", "8–16 weeks construction time", "Requires contractor management", "Reinstatement at end of lease"].map(t => (
                      <li key={t} className="flex items-center gap-2"><XCircle size={14} className="text-red-400 flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> Move-in Timeline</p>
                  <p className="font-bold text-lg" style={{ color: "#0f2044" }}>8–16 weeks after signing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "#0f2044" }}>The Office Search Timeline</h2>
            <p className="text-gray-500 mt-3">From initial requirements to move-in — here&apos;s what to expect.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {timeline.map((t) => (
                <div key={t.step} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-lg z-10" style={{ backgroundColor: "#0f2044" }}>
                    {t.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mt-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold mb-1" style={{ color: "#0f2044" }}>{t.title}</h3>
                        <p className="text-gray-500 text-sm">{t.desc}</p>
                      </div>
                      <div className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>
                        <Clock size={12} /> {t.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Type Is Right for You?</h2>
          <p className="text-gray-300 mb-8">Our AI consultant can help you narrow it down based on your team size, budget, and timeline — in under 2 minutes.</p>
          <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
            Get AI Recommendation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
