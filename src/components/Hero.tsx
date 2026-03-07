export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-sol-black/60 via-sol-black/40 to-sol-black" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sol-copper/30 bg-sol-copper/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-sol-copper animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-sol-copper">Murrieta&apos;s Craft Brewery &amp; Music Venue</span>
        </div>
        <h1 className="animate-fade-up animate-fade-up-d1 font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] mb-6">
          Where Beer
          <br />
          <span className="text-gradient-copper">Meets Music</span>
        </h1>
        <p className="animate-fade-up animate-fade-up-d2 text-lg md:text-xl text-sol-muted max-w-2xl mx-auto mb-10">
          Fresh hop IPAs brewed in-house. National touring acts on our stage. A community that feels like home. This is Solaris.
        </p>
        <div className="animate-fade-up animate-fade-up-d3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#events" className="px-8 py-4 bg-sol-copper text-sol-black text-sm uppercase tracking-widest font-semibold rounded hover:bg-sol-amber transition-colors">See What&apos;s Playing</a>
          <a href="#drafts" className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold rounded hover:border-sol-copper hover:text-sol-copper transition-colors">View Draft List</a>
        </div>
        <div className="mt-16 animate-fade-up animate-fade-up-d3 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-sol-muted">
          <span><span className="text-white font-medium">Mon–Tue</span> 4–9pm</span>
          <span className="w-px h-4 bg-white/20" />
          <span><span className="text-white font-medium">Wed–Fri</span> 3–10pm</span>
          <span className="w-px h-4 bg-white/20" />
          <span><span className="text-white font-medium">Sat</span> 12–10pm</span>
          <span className="w-px h-4 bg-white/20" />
          <span><span className="text-white font-medium">Sun</span> 1–8pm</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-sol-copper/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}
