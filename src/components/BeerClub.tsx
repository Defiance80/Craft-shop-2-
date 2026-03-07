export default function BeerClub() {
  const perks = [
    { icon: "🍺", title: "$5 Pours", desc: "Every visit, every beer on the list" },
    { icon: "📦", title: "Monthly Allocations", desc: "Exclusive releases delivered to you" },
    { icon: "🏷️", title: "Merch Discounts", desc: "Members-only pricing on gear" },
    { icon: "🎉", title: "Quarterly Parties", desc: "Private member events with special tappings" },
    { icon: "⭐", title: "Early Access", desc: "First dibs on limited releases and collabs" },
    { icon: "🎟️", title: "Event Perks", desc: "Priority tickets and VIP access" },
  ];

  return (
    <section id="club" className="py-24 bg-sol-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1200&q=60')" }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sol-copper mb-2">Join the Family</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">The Beer Club</h2>
            <p className="text-sol-muted text-lg leading-relaxed mb-8">
              More than a membership — it&apos;s a community. Get exclusive beer, deep discounts, member-only parties, and be part of the Solaris inner circle.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {perks.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.03]">
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <p className="text-sm font-medium">{p.title}</p>
                    <p className="text-xs text-sol-muted">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex px-8 py-4 bg-sol-copper text-sol-black text-sm uppercase tracking-widest font-semibold rounded hover:bg-sol-amber transition-colors">
              Join Beer Club
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] hidden lg:block">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1575037614876-c38a4c44f5b8?w=800&q=80')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-sol-dark/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="font-display text-3xl text-sol-cream">Life is better</p>
              <p className="font-display text-3xl text-sol-copper">with good beer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
