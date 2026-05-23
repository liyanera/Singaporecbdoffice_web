import Link from "next/link";
import { Building2, MapPin, ArrowRight, Train } from "lucide-react";

const buildings = [
  {
    name: "Marina Bay Financial Centre",
    abbr: "MBFC",
    address: "12 Marina Boulevard, Singapore 018982",
    grade: "Grade A+",
    completed: 2010,
    floors: 55,
    minArea: "1,500 sqft",
    rentRange: "S$12–16 psf/mo",
    mrt: "Downtown MRT (2 min)",
    certification: "BCA Green Mark Platinum",
    highlights: ["Iconic waterfront address", "Tower 1, 2 & 3", "Direct mall access", "Premium facilities"],
    submarket: "Marina Bay",
  },
  {
    name: "One Raffles Quay",
    abbr: "ORQ",
    address: "1 Raffles Quay, Singapore 048583",
    grade: "Grade A+",
    completed: 2006,
    floors: 50,
    minArea: "2,000 sqft",
    rentRange: "S$11–15 psf/mo",
    mrt: "Raffles Place MRT (1 min)",
    certification: "BCA Green Mark Gold",
    highlights: ["Twin-tower landmark", "Raffles Place prime", "Stunning harbour views", "Full suite of amenities"],
    submarket: "Raffles Place",
  },
  {
    name: "Ocean Financial Centre",
    abbr: "OFC",
    address: "10 Collyer Quay, Singapore 049315",
    grade: "Grade A+",
    completed: 2011,
    floors: 43,
    minArea: "2,000 sqft",
    rentRange: "S$11–15 psf/mo",
    mrt: "Raffles Place MRT (3 min)",
    certification: "BCA Green Mark Platinum",
    highlights: ["Raffles Place landmark", "Column-free floor plates", "Rooftop sky garden", "LEED Gold certified"],
    submarket: "Raffles Place",
  },
  {
    name: "CapitaGreen",
    abbr: "CapitaGreen",
    address: "138 Market Street, Singapore 048946",
    grade: "Grade A",
    completed: 2014,
    floors: 40,
    minArea: "2,000 sqft",
    rentRange: "S$10–14 psf/mo",
    mrt: "Raffles Place MRT (3 min)",
    certification: "BCA Green Mark Platinum",
    highlights: ["Award-winning architecture", "Sky Forest at level 40", "Efficient floor plates", "Sustainable design"],
    submarket: "Raffles Place",
  },
  {
    name: "Guoco Tower",
    abbr: "Guoco Tower",
    address: "1 Wallich Street, Singapore 078881",
    grade: "Grade A",
    completed: 2016,
    floors: 64,
    minArea: "1,800 sqft",
    rentRange: "S$11–15 psf/mo",
    mrt: "Tanjong Pagar MRT (Direct)",
    certification: "BCA Green Mark Platinum",
    highlights: ["Tallest in Singapore (290m)", "Integrated development", "Direct MRT access", "Live-Work-Play concept"],
    submarket: "Tanjong Pagar",
  },
  {
    name: "UIC Building",
    abbr: "UIC",
    address: "5 Shenton Way, Singapore 068808",
    grade: "Grade B",
    completed: 1973,
    floors: 50,
    minArea: "1,000 sqft",
    rentRange: "S$6–9 psf/mo",
    mrt: "Tanjong Pagar MRT (5 min)",
    certification: "Standard",
    highlights: ["Value-for-money CBD", "Shenton Way address", "Flexible unit sizes", "Good connectivity"],
    submarket: "Shenton Way",
  },
  {
    name: "Suntec City Office Towers",
    abbr: "Suntec",
    address: "7 Temasek Boulevard, Singapore 038987",
    grade: "Grade A",
    completed: 1997,
    floors: 45,
    minArea: "1,500 sqft",
    rentRange: "S$8–12 psf/mo",
    mrt: "Esplanade / Promenade MRT (3 min)",
    certification: "BCA Green Mark Gold",
    highlights: ["Convention & exhibition hub", "Integrated mall & MICE", "Five towers", "Strong transport links"],
    submarket: "City Hall",
  },
  {
    name: "Six Battery Road",
    abbr: "6 Battery Rd",
    address: "6 Battery Road, Singapore 049909",
    grade: "Grade A",
    completed: 1984,
    floors: 42,
    minArea: "1,500 sqft",
    rentRange: "S$10–14 psf/mo",
    mrt: "Raffles Place MRT (1 min)",
    certification: "BCA Green Mark Gold Plus",
    highlights: ["Historic Raffles Place address", "Heritage building refurbished", "Prestigious tenant roster", "Premium finishes"],
    submarket: "Raffles Place",
  },
];

const gradeColor: Record<string, string> = {
  "Grade A+": "#c9a84c",
  "Grade A": "#0f2044",
  "Grade B": "#6b7280",
};

export default function BuildingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>CBD Buildings</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Singapore CBD Office Buildings</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore premium Grade A office buildings across Singapore&apos;s Central Business District. Direct landlord access on all listings.
          </p>
        </div>
      </section>

      {/* Building Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildings.map((b) => (
              <div key={b.name} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-gray-100">
                {/* Building Visual */}
                <div className="h-40 flex flex-col items-center justify-center relative" style={{ backgroundColor: "#0f2044" }}>
                  <Building2 size={48} style={{ color: "#c9a84c" }} />
                  <p className="text-white font-bold mt-2 text-sm">{b.abbr}</p>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: gradeColor[b.grade] ?? "#6b7280" }}>
                      {b.grade}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-200">{b.submarket}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1 leading-tight" style={{ color: "#0f2044" }}>{b.name}</h3>
                  <div className="flex items-start gap-1 text-gray-400 text-xs mb-4">
                    <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                    <span>{b.address}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-0.5">Completed</p>
                      <p className="font-semibold" style={{ color: "#0f2044" }}>{b.completed}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-0.5">Floors</p>
                      <p className="font-semibold" style={{ color: "#0f2044" }}>{b.floors}F</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-0.5">Min. Area</p>
                      <p className="font-semibold" style={{ color: "#0f2044" }}>{b.minArea}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-0.5">Est. Rent</p>
                      <p className="font-semibold" style={{ color: "#c9a84c" }}>{b.rentRange}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                    <Train size={12} style={{ color: "#c9a84c" }} />
                    {b.mrt}
                  </div>

                  <ul className="space-y-1 mb-5">
                    {b.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                        <span style={{ color: "#c9a84c" }}>✓</span> {h}
                      </li>
                    ))}
                  </ul>

                  <Link href="/consultation" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
                    Enquire Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don&apos;t See the Building You&apos;re Looking For?</h2>
          <p className="text-gray-300 mb-8">I have access to 50+ CBD buildings including off-market listings. Let&apos;s find your perfect space.</p>
          <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#0f2044] hover:brightness-110 transition-all" style={{ backgroundColor: "#c9a84c" }}>
            Talk to AI Consultant <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
