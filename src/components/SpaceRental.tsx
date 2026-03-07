export default function SpaceRental() {
  return (
    <section id="venue" className="py-24 bg-sol-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-sol-dark/60 to-transparent" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sol-copper mb-2">Your Event, Our Space</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Host It at Solaris</h2>
            <p className="text-sol-muted text-lg leading-relaxed mb-8">
              From intimate gatherings of 10 to renting out the entire brewery — Solaris is the perfect backdrop for birthdays, corporate events, album releases, and everything in between.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: "🍺", label: "Full Bar Access" },
                { icon: "🎤", label: "PA & Stage" },
                { icon: "🍕", label: "Food Vendor Coordination" },
                { icon: "🎨", label: "Flexible Layouts" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@solarisbeer.com" className="inline-flex items-center justify-center px-8 py-4 bg-sol-copper text-sol-black text-sm uppercase tracking-widest font-semibold rounded hover:bg-sol-amber transition-colors">Inquire About Booking</a>
              <a href="tel:9516984556" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold rounded hover:border-sol-copper hover:text-sol-copper transition-colors">Call (951) 698-4556</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
