"use client";
import { useState } from "react";
import { Gift, CheckCircle, Star, ArrowRight, Users } from "lucide-react";

export default function PromotionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", size: "", notes: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, source: "promotions" }),
    });
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16" style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/30 rounded-full px-4 py-2 text-sm font-semibold text-[#0f2044] mb-6">
            <Gift size={16} /> Limited Time Offer
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f2044] mb-4">$500 CapitaLand Vouchers</h1>
          <p className="text-[#0f2044]/80 text-xl max-w-2xl mx-auto">
            Register your first CBD office through Li Yan and receive <strong>$500 SGD CapitaLand Vouchers</strong> as our welcome gift.
          </p>
        </div>
      </section>

      {/* Main Promotion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Offer Details */}
            <div>
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                    <Gift size={28} style={{ color: "#c9a84c" }} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold" style={{ color: "#0f2044" }}>Welcome Bonus</h2>
                    <p className="text-3xl font-black" style={{ color: "#c9a84c" }}>$500 SGD</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To celebrate new businesses setting up their Singapore CBD headquarters, we&apos;re offering <strong>$500 CapitaLand Mall Vouchers</strong> for every first-time tenant who successfully registers their office through Li Yan.
                </p>
                <h3 className="font-bold mb-3" style={{ color: "#0f2044" }}>Terms & Conditions</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Valid for first-time CBD office registrations only",
                    "Minimum lease term of 12 months",
                    "Lease must be signed and stamped",
                    "Vouchers issued within 30 days of lease commencement",
                    "Redeemable at all CapitaLand Malls in Singapore",
                    "Not transferable or exchangeable for cash",
                    "One redemption per company",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} style={{ color: "#c9a84c" }} className="flex-shrink-0 mt-0.5" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 bg-blue-50 rounded-xl p-4 text-sm text-blue-700 border border-blue-100">
                  <Star size={15} className="flex-shrink-0" />
                  CapitaLand vouchers are accepted at Plaza Singapura, Raffles City, ION Orchard, and 15+ other malls.
                </div>
              </div>

              {/* Referral */}
              <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Users size={22} style={{ color: "#c9a84c" }} />
                  <h3 className="font-bold" style={{ color: "#0f2044" }}>Referral Bonus</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Know someone looking for a CBD office? Refer them to Li Yan and earn <strong>$200 cash reward</strong> when they successfully sign a lease.
                </p>
                <a href="mailto:liyan@era.com.sg?subject=Referral" className="text-sm font-semibold flex items-center gap-1 hover:underline" style={{ color: "#c9a84c" }}>
                  Submit a Referral <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Claim Form */}
            <div>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                      <CheckCircle size={32} style={{ color: "#c9a84c" }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#0f2044" }}>Application Received!</h3>
                    <p className="text-gray-500">Li Yan will contact you within 24 hours to discuss your office requirements and confirm your promotion eligibility.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-2" style={{ color: "#0f2044" }}>Claim Your $500 Vouchers</h2>
                    <p className="text-gray-500 text-sm mb-6">Fill in your details and Li Yan will reach out within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                          <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name *</label>
                          <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
                        <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@company.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">WhatsApp / Phone *</label>
                        <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+65 XXXX XXXX" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Team Size</label>
                        <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] bg-white" value={form.size} onChange={e => setForm({ ...form, size: e.target.value })}>
                          <option value="">Select team size</option>
                          <option>1–5 pax</option>
                          <option>6–20 pax</option>
                          <option>21–50 pax</option>
                          <option>51–100 pax</option>
                          <option>100+ pax</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Additional Notes</label>
                        <textarea rows={3} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors resize-none" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Budget, preferred location, move-in date..." />
                      </div>
                      <button type="submit" className="w-full py-4 rounded-xl font-bold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
                        Claim My $500 Vouchers →
                      </button>
                      <p className="text-xs text-gray-400 text-center">No commitment required. Li Yan will contact you to discuss next steps.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
