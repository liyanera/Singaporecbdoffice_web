import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Building2, Phone, Mail, ArrowRight } from "lucide-react";

const highlights = [
  "Direct access to major CBD landlords — no intermediaries",
  "Specialist in Grade A & Grade B office leasing and sales",
  "End-to-end support: search, negotiation, handover",
  "Bilingual service — English & Mandarin",
  "CEA-licensed professional with ERA Realty",
];

const expertise = [
  { icon: Building2, title: "Office Leasing", desc: "Short-term to long-term leases across all CBD buildings" },
  { icon: Award, title: "Office Sales", desc: "Strata office units for investment or owner-occupation" },
  { icon: CheckCircle, title: "Tenant Representation", desc: "Full negotiation support to secure the best terms" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>About Me</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Your Trusted<br />CBD Office Expert
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;m <strong className="text-white">Li Yan</strong>, a Singapore-based real estate professional specialising exclusively in CBD office space — helping businesses rent, buy, and navigate Grade A office solutions with confidence.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                As part of <strong className="text-white">ERA Realty Network</strong>, I provide a truly one-stop CBD Office Solution with direct access to Singapore&apos;s most prestigious landlords. Whether you&apos;re a startup seeking your first office or a multinational expanding in Southeast Asia, I&apos;ll find the right space for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
                  Start Free Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/6500000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/40 hover:bg-white/10 transition-all">
                  <Phone size={16} /> WhatsApp Me
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20" style={{ backgroundColor: "#c9a84c" }} />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center">
                  <Image src="/liyan-profile.jpg" alt="Li Yan" width={300} height={360} className="rounded-2xl object-cover mx-auto" />
                  <div className="mt-5 text-white">
                    <p className="text-2xl font-bold">Li Yan</p>
                    <p style={{ color: "#c9a84c" }} className="font-medium mt-1">CBD Office Specialist</p>
                    <div className="mt-3 space-y-1 text-sm text-gray-300">
                      <p>CEA License: R067661B</p>
                      <p>ERA Realty Network Pte Ltd</p>
                    </div>
                    <div className="mt-4 flex gap-3 justify-center">
                      <a href="mailto:liyan@era.com.sg" className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <Mail size={12} /> liyan@era.com.sg
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#0f2044" }}>Why Work With Me?</h2>
              <ul className="space-y-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
                    <span className="text-gray-600">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {expertise.map((e) => (
                <div key={e.title} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                    <e.icon size={22} style={{ color: "#c9a84c" }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "#0f2044" }}>{e.title}</h3>
                    <p className="text-gray-500 text-sm">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0f2044" }}>My Service Area</h2>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">I specialise exclusively in Singapore&apos;s Central Business District, covering all prime office submarkets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Raffles Place", "Marina Bay", "Tanjong Pagar", "City Hall / Bras Basah", "Orchard Road", "One-North", "Harbourfront", "Shenton Way"].map((area) => (
              <div key={area} className="bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm font-medium text-sm" style={{ color: "#0f2044" }}>
                📍 {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Find Your Perfect Office Together</h2>
          <p className="text-gray-300 mb-8">Get in touch today — free consultation, no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:liyan@era.com.sg" className="px-8 py-4 rounded-full font-semibold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
              Email Me
            </a>
            <Link href="/buildings" className="px-8 py-4 rounded-full font-semibold text-white border border-white/40 hover:bg-white/10 transition-all">
              Browse Buildings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
