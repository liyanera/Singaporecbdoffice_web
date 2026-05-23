import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f2044" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">
              Li Yan{" "}
              <span style={{ color: "#c9a84c" }}>| CBD Office Specialist</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Your trusted one-stop CBD Office solution in Singapore. Direct
              landlord access for renting & buying premium Grade A office space.
            </p>
            <p className="text-gray-400 text-xs">
              CEA License: R067661B | ERA Realty Network Pte Ltd
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3" style={{ color: "#c9a84c" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { href: "/about", label: "About Me" },
                { href: "/buildings", label: "CBD Buildings" },
                { href: "/office-types", label: "Office Types" },
                { href: "/tenant-guide", label: "Tenant Guide" },
                { href: "/promotions", label: "Promotions" },
                { href: "/consultation", label: "AI Consultant" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c9a84c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3" style={{ color: "#c9a84c" }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={14} style={{ color: "#c9a84c" }} />
                <a
                  href="mailto:liyan@era.com.sg"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  liyan@era.com.sg
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} style={{ color: "#c9a84c" }} />
                <a
                  href="https://wa.me/6500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  WhatsApp Me
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} style={{ color: "#c9a84c" }} className="mt-0.5" />
                <span>Singapore CBD, Raffles Place & Marina Bay</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Li Yan. All rights reserved.</p>
          <p>
            Registered with Council for Estate Agencies (CEA) Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
