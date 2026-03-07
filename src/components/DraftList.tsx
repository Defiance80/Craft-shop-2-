"use client";

const beers = [
  { name: "Country Scenes", style: "Fresh Hop West Coast Pils", abv: "5.5%", hops: "Strata CGX Nuvo, Krush Cryo, Mosaic, El Dorado", tag: "Crisp" },
  { name: "Elliott", style: "Fresh Hop XPA", abv: "5.8%", hops: "Simcoe Cryo Fresh, Krush Cryo, Mosaic, Chinook, Riwaka", tag: "Collab", collab: "Living Haus" },
  { name: "Sense of Place", style: "Fresh Hop West Coast IPA", abv: "6.8%", hops: "Amarillo CGX Nuvo, Simcoe Cryo, Amarillo, Citra, Nelson", tag: "Staff Pick" },
  { name: "TDH Parallelograms", style: "Triple Dry-Hopped West Coast IPA", abv: "7.2%", hops: "Amarillo CGX, Citra, Simcoe, Cascade" },
  { name: "Door into Winter", style: "Hazy IPA", abv: "6.0%", hops: "Citra, Vista, Cascade", tag: "Hazy" },
  { name: "Yeast Resort", style: "Triple Dry-Hopped Hazy IPA", abv: "7.8%", hops: "Peacharine, Rakau, Citra, Idaho 7", tag: "Big Haze" },
];

export default function DraftList() {
  return (
    <section id="drafts" className="py-24 bg-sol-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-sol-copper mb-2">Brewed In-House</p>
          <h2 className="font-display text-4xl md:text-5xl">What&apos;s On Draft</h2>
          <p className="text-sol-muted mt-4 max-w-xl mx-auto text-sm">Every beer on this list was brewed right here on Cherry Street. Fresh hops, small batches, no shortcuts.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {beers.map((beer, i) => (
            <div key={i} className="group relative bg-sol-card rounded-xl p-6 border border-white/5 hover:border-sol-copper/20 transition-all duration-300">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="font-display text-2xl leading-tight group-hover:text-sol-copper transition-colors">{beer.name}</h3>
                  <p className="text-sol-copper text-sm mt-1">{beer.style}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-2xl font-display text-sol-cream">{beer.abv}</span>
                  <p className="text-[10px] uppercase tracking-widest text-sol-muted">ABV</p>
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-3 mb-3">
                <p className="text-[10px] uppercase tracking-widest text-sol-muted mb-1">Hops</p>
                <p className="text-xs text-sol-warm leading-relaxed">{beer.hops}</p>
              </div>
              <div className="flex items-center gap-2">
                {beer.tag && (
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-sol-copper/10 text-sol-copper border border-sol-copper/20">{beer.tag}</span>
                )}
                {beer.collab && (
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-sol-muted border border-white/10">w/ {beer.collab}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
