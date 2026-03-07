const vendors = [
  { day: "Monday", name: "Taco Fuego", cuisine: "Mexican Street Tacos" },
  { day: "Tuesday", name: "Seoul Bowl", cuisine: "Korean BBQ Bowls" },
  { day: "Wednesday", name: "Fired Up Pizza", cuisine: "Wood-Fired Pizza" },
  { day: "Thursday", name: "Big Wave Poke", cuisine: "Hawaiian Poke Bowls" },
  { day: "Friday", name: "Smoke & Barrel", cuisine: "Texas BBQ" },
  { day: "Saturday", name: "The Grilled Cheese Truck", cuisine: "Gourmet Grilled Cheese" },
  { day: "Sunday", name: "Bao Down", cuisine: "Asian Fusion Bao Buns" },
];

export default function FoodVendors() {
  return (
    <section className="py-24 bg-sol-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-sol-copper mb-2">Good Eats</p>
          <h2 className="font-display text-4xl md:text-5xl">Rotating Food Vendors</h2>
          <p className="text-sol-muted mt-4 max-w-xl mx-auto text-sm">
            We curate the best local food vendors so there&apos;s always something incredible to eat alongside your beer.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {vendors.map((v, i) => (
            <div key={i} className="bg-sol-card rounded-xl p-5 border border-white/5 hover:border-sol-copper/20 transition-all text-center">
              <p className="text-[10px] uppercase tracking-widest text-sol-copper mb-2">{v.day}</p>
              <p className="font-display text-lg mb-1">{v.name}</p>
              <p className="text-xs text-sol-muted">{v.cuisine}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
