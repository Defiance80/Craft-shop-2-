"use client";

const concerts = [
  { day: "FRI", date: "Mar 14", name: "The Record Company", genre: "Blues Rock", time: "8 PM", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80" },
  { day: "SAT", date: "Mar 15", name: "Lettuce", genre: "Funk / Jazz", time: "8 PM", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80" },
  { day: "FRI", date: "Mar 21", name: "Chicano Batman", genre: "Psychedelic Soul", time: "8 PM", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80" },
  { day: "SAT", date: "Mar 22", name: "Pinback", genre: "Indie Rock", time: "8 PM", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80" },
];

const weekly = [
  { day: "Monday", name: "Open Mic Comedy", icon: "🎤", desc: "Sign up at 6pm, show at 7pm" },
  { day: "Tuesday", name: "Trivia Night", icon: "🧠", desc: "Teams of up to 6. Prizes for top 3." },
  { day: "Wednesday", name: "Disc Golf Putting League", icon: "🥏", desc: "All skill levels welcome" },
  { day: "Thursday", name: "Bring Your Own Vinyl", icon: "🎵", desc: "Spin your records on our setup" },
  { day: "Friday", name: "Live Music", icon: "🎸", desc: "Concert series + local acts" },
  { day: "Saturday", name: "Special Events", icon: "⭐", desc: "Comedy, wrestling, art shows" },
  { day: "Sunday", name: "Chill Sunday", icon: "☀️", desc: "Relax with fresh pours & food" },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-sol-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sol-copper mb-2">What&apos;s Happening</p>
            <h2 className="font-display text-4xl md:text-5xl">Live Music &amp; Events</h2>
          </div>
          <p className="text-sol-muted max-w-md text-sm leading-relaxed">
            From national touring acts to open mic comedy and live wrestling — there&apos;s something happening every night at Solaris.
          </p>
        </div>

        <div className="flex gap-5 overflow-x-auto no-scrollbar md:grid md:grid-cols-4 pb-4 mb-16">
          {concerts.map((e, i) => (
            <div key={i} className="group flex-shrink-0 w-[280px] md:w-auto bg-sol-card rounded-xl overflow-hidden border border-white/5 hover:border-sol-copper/30 transition-all duration-300">
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${e.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-sol-card to-transparent" />
                <div className="absolute top-4 left-4 bg-sol-black/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-sol-copper font-semibold">{e.day}</p>
                  <p className="text-sm font-display">{e.date}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl mb-1 group-hover:text-sol-copper transition-colors">{e.name}</h3>
                <p className="text-sol-muted text-sm mb-3">{e.genre}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-sol-muted">{e.time}</span>
                  <button className="text-xs px-3 py-1.5 rounded-full bg-sol-copper/10 text-sol-copper border border-sol-copper/20 hover:bg-sol-copper/20 transition-colors">Get Tickets</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-display text-2xl mb-6 text-center">Weekly Lineup</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {weekly.map((w, i) => (
              <div key={i} className="bg-sol-card rounded-xl p-4 border border-white/5 hover:border-sol-copper/20 transition-all text-center">
                <span className="text-2xl mb-2 block">{w.icon}</span>
                <p className="text-[10px] uppercase tracking-widest text-sol-copper mb-1">{w.day}</p>
                <p className="text-sm font-medium mb-1">{w.name}</p>
                <p className="text-xs text-sol-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
