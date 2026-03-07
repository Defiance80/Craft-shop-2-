"use client";
import { useCart } from "./CartProvider";

const products = [
  { id: "small-case", name: "Small Case Bundle", desc: "Pick 4 cans — mix and match your favorites", price: 24.00, cat: "beer", image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80" },
  { id: "medium-case", name: "Medium Case Bundle", desc: "Pick 8 cans — perfect for a weekend", price: 44.00, cat: "beer", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&q=80" },
  { id: "full-case", name: "Full Case Bundle", desc: "Pick 12 cans — stock the fridge", price: 62.00, cat: "beer", image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&q=80", tag: "Best Value" },
  { id: "tee-classic", name: "Solaris Classic Tee", desc: "Soft cotton, copper sun logo on black", price: 30.00, cat: "merch", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
  { id: "hat-trucker", name: "Trucker Hat", desc: "Embroidered Solaris patch, snapback", price: 28.00, cat: "merch", image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&q=80" },
  { id: "hoodie", name: "Brewery Hoodie", desc: "Heavyweight fleece, Solaris back print", price: 55.00, cat: "merch", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
  { id: "ticket-record-co", name: "The Record Company — Mar 14", desc: "General admission, doors at 7 PM", price: 25.00, cat: "tickets", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80" },
  { id: "ticket-lettuce", name: "Lettuce — Mar 15", desc: "General admission, doors at 7 PM", price: 30.00, cat: "tickets", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80" },
  { id: "ticket-chicano", name: "Chicano Batman — Mar 21", desc: "General admission, doors at 7 PM", price: 28.00, cat: "tickets", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80" },
];

const cats = ["all", "beer", "merch", "tickets"] as const;

export default function Shop() {
  const { addItem } = useCart();
  const catLabels: Record<string, string> = { all: "All", beer: "Beer Pre-Order", merch: "Merchandise", tickets: "Event Tickets" };

  return (
    <section id="shop" className="py-24 bg-sol-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-sol-copper mb-2">Shop Solaris</p>
          <h2 className="font-display text-4xl md:text-5xl">Beer · Merch · Tickets</h2>
          <p className="text-sol-muted mt-4 max-w-xl mx-auto text-sm">Pre-order beer for pickup, grab some gear, or secure tickets to upcoming shows. Ships throughout California.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-sol-card rounded-xl overflow-hidden border border-white/5 hover:border-sol-copper/20 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${p.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-sol-card via-transparent to-transparent" />
                {(p as { tag?: string }).tag && (
                  <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-sol-copper/90 text-sol-black font-semibold">{(p as { tag?: string }).tag}</span>
                )}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">{catLabels[p.cat]}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg group-hover:text-sol-copper transition-colors">{p.name}</h3>
                  <span className="text-sol-copper font-display text-lg flex-shrink-0">${p.price.toFixed(2)}</span>
                </div>
                <p className="text-sol-muted text-sm mb-4">{p.desc}</p>
                <button
                  onClick={() => addItem({ id: p.id, name: p.name, price: p.price, image: p.image })}
                  className="w-full py-3 bg-sol-copper/10 text-sol-copper text-xs uppercase tracking-widest font-semibold rounded-lg border border-sol-copper/20 hover:bg-sol-copper hover:text-sol-black transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
