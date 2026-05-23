import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Li Yan | Singapore CBD Office Specialist",
  description: "Your trusted CBD Office consultant in Singapore. One-stop solution for renting and buying Grade A office space. Direct landlord access, expert guidance.",
  keywords: "Singapore CBD office, office for rent Singapore, Grade A office Singapore, office space CBD",
  openGraph: {
    title: "Li Yan | Singapore CBD Office Specialist",
    description: "One-stop CBD Office solution. Direct landlord access for renting & buying premium office space in Singapore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased scroll-smooth", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
