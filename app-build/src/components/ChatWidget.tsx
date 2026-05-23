"use client";
import { useState } from "react";
import { MessageCircle, X, Bot, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Maya 👋 How can I help you find a CBD office today? / 您好！请问有什么可以帮助您的？" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    const aiMsg: Message = { role: "assistant", content: "" };
    setMessages([...newMsgs, aiMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs.map((m) => ({ role: m.role, content: m.content })) }),
      });
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let full = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setMessages([...newMsgs, { role: "assistant", content: full }]);
      }
    } catch {
      setMessages([...newMsgs, { role: "assistant", content: "Sorry, something went wrong. Please email liyan@era.com.sg directly." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col" style={{ height: "420px" }}>
          <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: "#0f2044" }}>
            <Bot size={18} style={{ color: "#c9a84c" }} />
            <div className="flex-1">
              <p className="text-white text-sm font-semibold">Maya — CBD Office AI</p>
              <p className="text-green-400 text-xs">Online</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
              <X size={16} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "chat-bubble-user" : "chat-bubble-ai"}`}>
                  {m.content || (loading && i === messages.length - 1 ? "●●●" : "")}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-gray-100 flex gap-2">
            <input
              className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#c9a84c]"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              disabled={loading}
            />
            <button onClick={send} disabled={loading || !input.trim()} className="w-8 h-8 rounded-xl flex items-center justify-center disabled:opacity-40" style={{ backgroundColor: "#0f2044" }}>
              <Send size={12} className="text-white" />
            </button>
          </div>
          <div className="px-3 pb-3 text-center">
            <a href="/consultation" className="text-xs hover:underline" style={{ color: "#c9a84c" }}>
              Open full consultation →
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        style={{ backgroundColor: "#0f2044" }}
        aria-label="Chat with Maya"
      >
        {open ? <X size={22} style={{ color: "#c9a84c" }} /> : <MessageCircle size={22} style={{ color: "#c9a84c" }} />}
      </button>
    </div>
  );
}
