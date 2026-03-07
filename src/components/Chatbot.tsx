"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "bot" | "user"; text: string };

function getResponse(input: string): string {
  const q = input.toLowerCase().trim();

  if (q.includes("reserv") || q.includes("book") || q.includes("rent") || q.includes("private") || q.includes("party") || q.includes("event space")) {
    return "We have flexible rental options from small groups of 10 to the entire brewery! Email **info@solarisbeer.com** or call **(951) 698-4556** to book. We handle food vendor coordination, have a full PA and stage, and our bar team will keep your guests happy.";
  }
  if (q.includes("hour") || q.includes("open") || q.includes("close") || q.includes("when")) {
    return "**Hours:**\n- Mon-Tue: 4-9pm\n- Wed-Thu: 3-9pm\n- Friday: 3-10pm\n- Saturday: 12-10pm\n- Sunday: 1-8pm\n\nWe're at **41601B Cherry Street, Murrieta, CA 92562**!";
  }
  if (q.includes("event") || q.includes("music") || q.includes("concert") || q.includes("live") || q.includes("band") || q.includes("show") || q.includes("tonight") || q.includes("comedy") || q.includes("wrestling")) {
    return "**Upcoming Shows:**\n- Fri Mar 14 — The Record Company (Blues Rock)\n- Sat Mar 15 — Lettuce (Funk/Jazz)\n- Fri Mar 21 — Chicano Batman (Psychedelic Soul)\n- Sat Mar 22 — Pinback (Indie Rock)\n\n**Weekly Events:**\n- Mon: Open Mic Comedy\n- Tue: Trivia Night\n- Wed: Disc Golf Putting League\n- Thu: Bring Your Own Vinyl\n- Fri-Sat: Live Music & Special Events\n\nGrab tickets in our Shop section!";
  }
  if (q.includes("ticket")) {
    return "Tickets are available in our **Shop** section! Current shows:\n- The Record Company (Mar 14) — $25\n- Lettuce (Mar 15) — $30\n- Chicano Batman (Mar 21) — $28\n\nScroll to the Shop or click the cart icon to purchase.";
  }
  if (q.includes("beer") || q.includes("tap") || q.includes("ipa") || q.includes("draft") || q.includes("recommend") || q.includes("best") || q.includes("popular") || q.includes("hazy") || q.includes("hop")) {
    return "**Currently on draft:**\n\n- **Country Scenes** (5.5%) — Fresh Hop West Coast Pils. Crisp and bright.\n- **Elliott** (5.8%) — Fresh Hop XPA, collab with Living Haus. Super drinkable.\n- **Sense of Place** (6.8%) — Fresh Hop West Coast IPA. Staff pick!\n- **TDH Parallelograms** (7.2%) — Triple dry-hopped West Coast IPA. Hop bomb.\n- **Door into Winter** (6.0%) — Hazy IPA. Juicy and smooth.\n- **Yeast Resort** (7.8%) — Triple dry-hopped Hazy. Big, tropical, incredible.\n\nAll brewed right here on Cherry Street!";
  }
  if (q.includes("club") || q.includes("member") || q.includes("join")) {
    return "**The Beer Club** is our membership program!\n\nPerks:\n- $5 pours every visit\n- Monthly beer allocations\n- Merch discounts\n- Quarterly member parties\n- Early access to limited releases\n- Priority event tickets\n\nScroll to the Beer Club section to join!";
  }
  if (q.includes("food") || q.includes("eat") || q.includes("hungry") || q.includes("vendor") || q.includes("truck")) {
    return "We have **rotating food vendors every day!** This week:\n\n- Mon: Taco Fuego (Mexican Street Tacos)\n- Tue: Seoul Bowl (Korean BBQ)\n- Wed: Fired Up Pizza (Wood-Fired)\n- Thu: Big Wave Poke (Hawaiian)\n- Fri: Smoke & Barrel (Texas BBQ)\n- Sat: The Grilled Cheese Truck\n- Sun: Bao Down (Asian Fusion)\n\nAlways something delicious alongside your beer!";
  }
  if (q.includes("ship") || q.includes("deliver") || q.includes("order") || q.includes("pre-order") || q.includes("pickup") || q.includes("buy")) {
    return "**Beer Shipping** — We ship throughout California!\n\nBundles:\n- Small Case (4 cans) — $24\n- Medium Case (8 cans) — $44\n- Full Case (12 cans) — $62 (best value!)\n\nMix and match your favorites. Orders ship Mon-Thu, next-day delivery to most of CA. Check the **Shop** section!\n\nWe also have **merch** (tees, hats, hoodies) and **event tickets** available online.";
  }
  if (q.includes("merch") || q.includes("shirt") || q.includes("hat") || q.includes("hoodie") || q.includes("gear")) {
    return "**Solaris Merch:**\n- Classic Tee — $30\n- Trucker Hat — $28\n- Brewery Hoodie — $55\n\nAll available in the Shop section. Add to cart and check out!";
  }
  if (q.includes("where") || q.includes("location") || q.includes("address") || q.includes("direction") || q.includes("find") || q.includes("park")) {
    return "**41601B Cherry Street, Murrieta, CA 92562**\n\nRight on the Murrieta/Temecula border. Easy parking available!\n\nCall: **(951) 698-4556**\nEmail: **info@solarisbeer.com**";
  }
  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("call")) {
    return "**Contact:**\n- Phone: (951) 698-4556\n- Email: info@solarisbeer.com\n- Instagram: @solarisbeer\n- Facebook: /solarisbeer\n\n**Address:** 41601B Cherry Street, Murrieta, CA 92562";
  }
  if (q.includes("dog") || q.includes("pet")) {
    return "We do allow dogs! Check our dog policy at the taproom for specific details. Well-behaved pups are always welcome on the patio!";
  }
  if (q.includes("trivia")) {
    return "**Trivia Night** is every Tuesday! Teams of up to 6 players. Prizes for the top 3 teams. Grab a beer and show off those brain cells!";
  }
  if (q.includes("vinyl") || q.includes("record")) {
    return "**Bring Your Own Vinyl** night is every Thursday! Bring your favorite records and spin them on our setup. Great vibes, great beer, great music.";
  }
  if (q.includes("disc golf") || q.includes("putting")) {
    return "**Disc Golf Putting League** is every Wednesday! All skill levels welcome. A fun way to spend a mid-week evening with a cold beer.";
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q === "yo" || q.includes("sup")) {
    return "Hey! Welcome to Solaris Beer & Blending. I can help with:\n\n🍺 **Beer recommendations** & draft list\n🎸 **Events & live music** schedule\n🛒 **Shop** — beer pre-orders, merch, tickets\n🍻 **Beer Club** membership\n🍕 **Food vendors** this week\n🎉 **Space rentals** & private events\n🕐 **Hours & location**\n\nWhat can I help you with?";
  }
  return "I can help with:\n\n🍺 **\"What's on tap?\"**\n🎸 **\"Any shows coming up?\"**\n🛒 **\"How do I order beer?\"**\n🍻 **\"Tell me about Beer Club\"**\n🍕 **\"What food vendors are here?\"**\n🎉 **\"I want to rent the space\"**\n🕐 **\"What are your hours?\"**\n\nOr call us at **(951) 698-4556**!";
}

function formatText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").map((line, j) => (<span key={`${i}-${j}`}>{j > 0 && <br />}{line}</span>));
  });
}

const quickReplies = ["What's on tap?", "Upcoming shows", "How to order beer", "Beer Club", "Food this week", "Hours & location"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: "Hey! Welcome to Solaris. I can help with beer recs, events, ordering, merch — whatever you need. What's up?" }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  const send = (text: string) => {
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: getResponse(text) }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (input.trim()) send(input.trim()); };

  return (
    <>
      <button onClick={() => setOpen(!open)} className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg shadow-sol-yellow/20 flex items-center justify-center transition-all duration-300 ${open ? "bg-white/10 backdrop-blur-lg" : "bg-sol-yellow hover:bg-sol-gold hover:scale-110"}`} aria-label="Chat">
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6 text-sol-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-sol-dark border border-white/10 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden" style={{ height: "min(580px, calc(100vh - 8rem))" }}>
          <div className="px-5 py-4 bg-gradient-to-r from-sol-card to-sol-dark border-b border-white/5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sol-yellow/10 border border-sol-yellow/30 flex items-center justify-center"><span className="text-sol-yellow text-sm">☀️</span></div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Solaris Assistant</p>
              <p className="text-[11px] text-sol-muted flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Online</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${msg.role === "user" ? "bg-sol-yellow text-sol-black rounded-br-sm" : "bg-white/[0.06] text-gray-300 rounded-bl-sm border border-white/5"}`}>
                  {formatText(msg.text)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-3 border border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sol-muted animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-sol-muted animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-sol-muted animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length <= 2 && (
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
              {quickReplies.map((qr, i) => (
                <button key={i} onClick={() => send(qr)} className="flex-shrink-0 text-[11px] px-3 py-1.5 rounded-full border border-sol-yellow/30 text-sol-yellow hover:bg-sol-yellow/10 transition-colors">{qr}</button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-white/5 flex gap-2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about beer, events, ordering..." className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-sol-muted focus:outline-none focus:border-sol-yellow/50 transition-colors" />
            <button type="submit" disabled={!input.trim()} className="w-10 h-10 rounded-xl bg-sol-yellow text-sol-black flex items-center justify-center hover:bg-sol-gold transition-colors disabled:opacity-30">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
