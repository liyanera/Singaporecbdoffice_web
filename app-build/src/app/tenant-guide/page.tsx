import Link from "next/link";
import { FileText, AlertCircle, CheckCircle, ArrowRight, Info } from "lucide-react";

const clauses = [
  {
    term: "Letter of Intent (LOI)",
    simple: "Your first formal offer to rent a space.",
    detail: "A non-binding document submitted to show your intent to lease. It outlines key commercial terms: rent, lease period, fit-out allowance, and rent-free period. Once the landlord counter-signs, it triggers the Tenancy Agreement drafting process.",
    tip: "LOIs are typically negotiable — use this stage to lock in your best terms before the formal TA.",
  },
  {
    term: "Tenancy Agreement (TA)",
    simple: "The legally binding lease contract.",
    detail: "The full legal document governing your lease. It covers rent schedule, security deposit, permitted use, subletting rights, repair obligations, and reinstatement requirements. Always have a lawyer or experienced agent review it.",
    tip: "Pay attention to the 'Permitted Use' clause — it must match your actual business activities.",
  },
  {
    term: "Security Deposit",
    simple: "Upfront payment held as security — typically 2–3 months' rent.",
    detail: "Refundable at lease end (minus any deductions for damage or outstanding charges). Usually paid upon signing the TA. For longer leases (3+ years), some landlords accept a bank guarantee instead.",
    tip: "Negotiate to reduce the deposit from 3 to 2 months, especially for financially strong tenants.",
  },
  {
    term: "Rent-Free Period",
    simple: "A period where you occupy the space without paying rent — typically for fit-out.",
    detail: "Usually granted at lease commencement for you to carry out renovation. Duration ranges from 1–8 weeks depending on the state of the premises and your negotiating leverage. This is a key negotiation point.",
    tip: "Bare shell units typically attract longer rent-free periods (4–8 weeks). Fitted units: 2–4 weeks.",
  },
  {
    term: "Break Clause",
    simple: "Your right to exit the lease early (if included).",
    detail: "Not standard in Singapore commercial leases but can be negotiated — typically exercisable after Year 1 or Year 2 with 3–6 months' written notice. Without it, early termination means forfeiting your deposit and potentially paying remaining rent.",
    tip: "Highly recommended for startups and fast-growing companies. Push hard for this during LOI stage.",
  },
  {
    term: "Renewal Option",
    simple: "Your right to extend the lease at the end of the term.",
    detail: "Grants the tenant the option (not obligation) to renew the lease for another term, usually at a prevailing market rent or a capped increase. Must be exercised within the notice window stated in the TA (typically 6 months before expiry).",
    tip: "Try to lock in a renewal rent cap (e.g., no more than 5% increase) in the TA.",
  },
  {
    term: "Reinstatement",
    simple: "Your obligation to restore the space to its original condition at the end of the lease.",
    detail: "You must remove all your fit-out works, partitions, and signage and return the space to its original bare shell or fitted condition (as specified in the TA). This can cost S$20–80/sqft depending on scope. Landlords may waive this for direct successor tenants.",
    tip: "Negotiate a reinstatement waiver in advance — especially if you're taking a fitted space and keeping the fit-out.",
  },
  {
    term: "Service Charge",
    simple: "Additional monthly fee on top of base rent for building maintenance and shared services.",
    detail: "Covers building maintenance, security, air-conditioning, lifts, and common area upkeep. Typically S$1.50–3.00 psf/month for Grade A buildings. Declared separately from base rent.",
    tip: "Always confirm the total occupancy cost = base rent + service charge + utilities when comparing buildings.",
  },
];

const costs = [
  { item: "Base Rent", typical: "S$7–16 psf/mo", note: "Depends on building grade & floor" },
  { item: "Service Charge", typical: "S$1.50–3.00 psf/mo", note: "Billed separately by landlord" },
  { item: "Utilities (Est.)", typical: "S$0.50–1.50 psf/mo", note: "Electricity, water, etc." },
  { item: "Security Deposit", typical: "2–3 months rent", note: "Refundable at lease end" },
  { item: "Stamp Duty", typical: "~0.4% of total rent", note: "One-time, payable within 14 days" },
  { item: "Fit-Out Cost (Bare)", typical: "S$60–150 psf", note: "One-time, highly variable" },
  { item: "Agent Fee", typical: "Landlord pays", note: "No cost to tenant when using Li Yan" },
];

export default function TenantGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Tenant Guide</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Everything You Need to Know Before Signing</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Demystifying Singapore commercial lease terms — so you can negotiate with confidence.</p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <FileText size={28} style={{ color: "#c9a84c" }} />
            <h2 className="text-2xl font-bold" style={{ color: "#0f2044" }}>Lease Clause Explained</h2>
          </div>
          <div className="space-y-6">
            {clauses.map((c) => (
              <div key={c.term} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg mb-1" style={{ color: "#0f2044" }}>{c.term}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "#c9a84c" }}>{c.simple}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.detail}</p>
                <div className="flex items-start gap-2 bg-blue-50 rounded-xl p-3 border border-blue-100">
                  <Info size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-700 text-xs leading-relaxed"><strong>Negotiation Tip:</strong> {c.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle size={28} style={{ color: "#c9a84c" }} />
            <h2 className="text-2xl font-bold" style={{ color: "#0f2044" }}>Full Cost Breakdown</h2>
          </div>
          <p className="text-gray-500 mb-8">Beyond base rent — here are all the costs involved in a Singapore CBD office lease.</p>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0f2044" }}>
                  <th className="text-left px-6 py-4 text-white font-semibold">Cost Item</th>
                  <th className="text-left px-6 py-4 text-white font-semibold">Typical Range</th>
                  <th className="text-left px-6 py-4 text-white font-semibold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((c, i) => (
                  <tr key={c.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium" style={{ color: "#0f2044" }}>{c.item}</td>
                    <td className="px-6 py-4 font-semibold" style={{ color: "#c9a84c" }}>{c.typical}</td>
                    <td className="px-6 py-4 text-gray-500 hidden md:table-cell">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-start gap-2 bg-green-50 rounded-xl p-4 border border-green-100">
            <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-green-700 text-sm"><strong>Good news:</strong> As a tenant, you pay no agent fee when working with Li Yan. Commission is paid by the landlord.</p>
          </div>
        </div>
      </section>

      {/* Negotiation Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0f2044" }}>Top 5 Negotiation Tips</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { n: "01", tip: "Always negotiate rent-free period — even on fitted spaces. 2–4 weeks is standard." },
              { n: "02", tip: "Request a landlord fit-out contribution (especially for bare shells on longer leases)." },
              { n: "03", tip: "Push for a break clause after Year 1 if your business is growing fast." },
              { n: "04", tip: "Negotiate a renewal option with a rent cap to protect against market surges." },
              { n: "05", tip: "Try to waive full reinstatement — especially if the next tenant will inherit your fit-out." },
            ].map((t) => (
              <div key={t.n} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <p className="text-3xl font-black mb-2 opacity-20" style={{ color: "#0f2044" }}>{t.n}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions About Your Lease?</h2>
          <p className="text-gray-300 mb-8">Ask our AI assistant for instant answers, or contact Li Yan directly for professional advice.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
              Ask AI Consultant <ArrowRight size={18} />
            </Link>
            <a href="mailto:liyan@era.com.sg" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/40 hover:bg-white/10 transition-all">
              Email Li Yan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
