import Link from "next/link";
import Image from "next/image";
import { Building2, TrendingUp, Users, Star, ArrowRight, Gift, CheckCircle } from "lucide-react";

const featuredBuildings = [
  {
    name: "Marina Bay Financial Centre",
    grade: "Grade A+",
    area: "From 1,500 sqft",
    rent: "S$12–16 psf/mo",
    highlight: "Waterfront iconic address",
  },
  {
    name: "CapitaGreen",
    grade: "Grade A",
    area: "From 2,000 sqft",
    rent: "S$10–14 psf/mo",
    highlight: "Award-winning green building",
  },
  {
    name: "Guoco Tower",
    grade: "Grade A",
    area: "From 1,800 sqft",
    rent: "S$11–15 psf/mo",
    highlight: "Tallest building in Singapore",
  },
  {
    name: "Ocean Financial Centre",
    grade: "Grade A+",
    area: "From 2,000 sqft",
    rent: "S$11–15 psf/mo",
    highlight: "Raffles Place prime location",
  },
];

const services = [
  {
    icon: TrendingUp,
    title: "Office Leasing",
    desc: "Find the perfect rental space tailored to your team size, budget, and growth plans.",
  },
  {
    icon: Building2,
    title: "Office Sales",
    desc: "Invest or acquire strata office units in Singapore's most prestigious CBD buildings.",
  },
  {
    icon: Users,
    title: "Direct Landlord Access",
    desc: "Skip the middlemen. We work directly with major landlords for the best terms.",
  },
];

const stats = [
  { value: "50+", label: "CBD Buildings" },
  { value: "200+", label: "Deals Closed" },
  { value: "Grade A", label: "Specialisation" },
  { value: "5★", label: "Client Rating" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden" style={{ paddingTop: "4rem" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#c9a84c" }}>
              <Star size={14} fill="currentColor" />
              Singapore CBD Office Specialist
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your One-Stop<span style={{ color: "#c9a84c" }}> CBD Office </span>Solution
            </h1>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Rent or buy premium Grade A office space in Singapore&apos;s CBD. Direct landlord access. Expert guidance. Zero hassle.
            </p>
            <p className="text-gray-400 text-sm mb-8">Li Yan · CEA R067661B · ERA Realty</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/buildings" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
                Find My Office <ArrowRight size={18} />
              </Link>
              <Link href="/consultation" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/40 hover:bg-white/10 transition-all">
                Talk to AI Agent
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-xl opacity-30" style={{ backgroundColor: "#c9a84c" }} />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <Image src="/liyan-profile.jpg" alt="Li Yan - CBD Office Specialist" width={320} height={380} className="rounded-2xl object-cover" priority />
                <div className="mt-4 text-center text-white">
                  <p className="font-bold text-lg">Li Yan</p>
                  <p style={{ color: "#c9a84c" }} className="text-sm">CBD Office Specialist</p>
                  <p className="text-gray-400 text-xs mt-1">CEA R067661B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold" style={{ color: "#0f2044" }}>{s.value}</p>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ color: "#0f2044" }}>What I Do For You</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">End-to-end office advisory — from search to handover.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                  <s.icon size={24} style={{ color: "#c9a84c" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#0f2044" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-14" style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a, #c9a84c)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 text-[#0f2044]">
              <Gift size={40} className="flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold">🎁 $500 CapitaLand Vouchers</h2>
                <p className="mt-1 opacity-80">Successfully register your first CBD office through us and receive <strong>$500 SGD CapitaLand Vouchers</strong> as our welcome gift.</p>
                <ul className="mt-3 space-y-1 text-sm opacity-70">
                  {["Valid for new tenants only", "Minimum 1-year lease", "Redeemable at all CapitaLand malls"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><CheckCircle size={14} /> {t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/promotions" className="flex-shrink-0 bg-[#0f2044] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a3a6b] transition-colors whitespace-nowrap">
              Claim Offer →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Buildings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#0f2044" }}>Featured CBD Buildings</h2>
              <p className="text-gray-500 mt-2">Prime Grade A office buildings with direct landlord access.</p>
            </div>
            <Link href="/buildings" className="hidden sm:flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: "#c9a84c" }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBuildings.map((b) => (
              <div key={b.name} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden card-hover">
                <div className="h-32 flex items-center justify-center" style={{ backgroundColor: "#0f2044" }}>
                  <Building2 size={40} style={{ color: "#c9a84c" }} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>{b.grade}</span>
                  <h3 className="font-bold mt-3 mb-1 text-sm leading-tight" style={{ color: "#0f2044" }}>{b.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{b.highlight}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{b.area}</span>
                    <span className="font-semibold" style={{ color: "#0f2044" }}>{b.rent}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Ideal CBD Office?</h2>
          <p className="text-gray-300 mb-8 text-lg">Chat with our AI consultant now — get instant advice tailored to your needs, then connect with Li Yan directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="px-8 py-4 rounded-full font-bold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
              Start AI Consultation
            </Link>
            <a href="mailto:liyan@era.com.sg" className="px-8 py-4 rounded-full font-semibold text-white border border-white/40 hover:bg-white/10 transition-all">
              Email Li Yan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
