"use client";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Phone, Mail, Building2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "我需要一个20人的CBD办公室，预算是多少？",
  "What's the difference between fitted and bare shell office?",
  "Which buildings are near Raffles Place MRT?",
  "如何申请 $500 CapitaLand Vouchers？",
];

export default function ConsultationPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Maya, Li Yan's CBD Office assistant. 👋\n\nI can help you find the perfect office in Singapore's CBD — whether you're looking to rent or buy, shared or private, fitted or bare shell.\n\nWhat brings you here today? 😊\n\n您好！我是 Maya，Li Yan 的 CBD 办公室顾问助手。我可以帮您在新加坡 CBD 找到最合适的办公空间。请问您有什么需求？",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...newMessages, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.map((m) => ({ role: m.role, content: m.content })) }),
      });

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setMessages([...newMessages, { role: "assistant", content: full }]);
      }
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, something went wrong. Please try again or contact Li Yan directly at liyan@era.com.sg." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <section className="hero-gradient pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>AI Consultant</p>
            <h1 className="text-3xl font-bold text-white">Chat with Maya</h1>
            <p className="text-gray-300 text-sm mt-1">Powered by AI · Available 24/7 · Bilingual EN/中文</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 flex-1" style={{ minHeight: "calc(100vh - 280px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Chat */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col" style={{ height: "65vh" }}>
                {/* Chat Header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0f2044" }}>
                    <Bot size={20} style={{ color: "#c9a84c" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0f2044" }}>Maya</p>
                    <p className="text-xs text-green-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Online · CBD Office Specialist AI
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === "assistant" ? "" : "bg-gray-200"}`} style={m.role === "assistant" ? { backgroundColor: "#0f2044" } : {}}>
                        {m.role === "assistant" ? <Bot size={16} style={{ color: "#c9a84c" }} /> : <User size={16} className="text-gray-500" />}
                      </div>
                      <div className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"}`}>
                        {m.content || (loading && i === messages.length - 1 ? <span className="animate-pulse">●●●</span> : "")}
                      </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Quick Prompts */}
                {messages.length <= 1 && (
                  <div className="px-5 pb-3 flex flex-wrap gap-2">
                    {QUICK_PROMPTS.map((p) => (
                      <button key={p} onClick={() => sendMessage(p)} className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors text-left">
                        {p}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-100">
                  <div className="flex gap-3 items-end">
                    <textarea
                      ref={inputRef}
                      rows={1}
                      className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#c9a84c] transition-colors"
                      placeholder="Type your question... / 请输入您的问题..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      disabled={loading}
                    />
                    <button
                      onClick={() => sendMessage(input)}
                      disabled={loading || !input.trim()}
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
                      style={{ backgroundColor: "#0f2044" }}
                    >
                      <Send size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold mb-4" style={{ color: "#0f2044" }}>Prefer to Talk Directly?</h3>
                <div className="space-y-3">
                  <a href="https://wa.me/6500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                      <Phone size={16} style={{ color: "#c9a84c" }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">WhatsApp</p>
                      <p className="text-sm font-semibold" style={{ color: "#0f2044" }}>Message Li Yan</p>
                    </div>
                  </a>
                  <a href="mailto:liyan@era.com.sg" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
                      <Mail size={16} style={{ color: "#c9a84c" }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-sm font-semibold" style={{ color: "#0f2044" }}>liyan@era.com.sg</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Promotion */}
              <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}>
                <p className="text-2xl mb-2">🎁</p>
                <h3 className="font-bold text-[#0f2044] mb-2">$500 Voucher Offer</h3>
                <p className="text-sm text-[#0f2044]/80 mb-4">First-time office registration gets $500 CapitaLand Vouchers.</p>
                <a href="/promotions" className="block text-center bg-[#0f2044] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#1a3a6b] transition-colors">
                  Learn More →
                </a>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold mb-3 text-sm" style={{ color: "#0f2044" }}>Explore</h3>
                <div className="space-y-2">
                  {[
                    { href: "/buildings", label: "CBD Buildings", icon: Building2 },
                    { href: "/office-types", label: "Office Types Guide", icon: Building2 },
                    { href: "/tenant-guide", label: "Tenant Guide", icon: Building2 },
                  ].map((l) => (
                    <a key={l.href} href={l.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#c9a84c] transition-colors py-1">
                      <l.icon size={14} />
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
