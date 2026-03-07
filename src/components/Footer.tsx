"use client";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-sol-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sol-copper to-sol-amber flex items-center justify-center text-sol-black font-display font-bold text-xl">S</div>
              <div>
                <p className="font-display text-lg leading-tight">Solaris</p>
                <p className="text-[9px] uppercase tracking-[0.35em] text-sol-copper">Beer & Blending</p>
              </div>
            </div>
            <p className="text-sol-muted text-sm leading-relaxed max-w-xs">Craft brewery, taproom & live music venue in Murrieta. Where beer meets music meets community.</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-sol-copper mb-4">Visit Us</h4>
            <address className="not-italic text-sm text-sol-muted space-y-2">
              <p>41601B Cherry Street</p>
              <p>Murrieta, CA 92562</p>
              <p className="pt-2"><a href="tel:9516984556" className="text-white hover:text-sol-copper transition-colors">(951) 698-4556</a></p>
              <p><a href="mailto:info@solarisbeer.com" className="text-white hover:text-sol-copper transition-colors">info@solarisbeer.com</a></p>
            </address>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-sol-copper mb-4">Hours</h4>
            <div className="text-sm text-sol-muted space-y-1.5">
              <div className="flex justify-between max-w-[180px]"><span>Mon – Tue</span><span className="text-white">4 – 9pm</span></div>
              <div className="flex justify-between max-w-[180px]"><span>Wed – Thu</span><span className="text-white">3 – 9pm</span></div>
              <div className="flex justify-between max-w-[180px]"><span>Friday</span><span className="text-white">3 – 10pm</span></div>
              <div className="flex justify-between max-w-[180px]"><span>Saturday</span><span className="text-white">12 – 10pm</span></div>
              <div className="flex justify-between max-w-[180px]"><span>Sunday</span><span className="text-white">1 – 8pm</span></div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-sol-copper mb-4">Stay in the Loop</h4>
            <p className="text-sol-muted text-sm mb-4">New releases, events, and more.</p>
            <div className="flex gap-2">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-sol-muted focus:outline-none focus:border-sol-copper/50" />
              <button className="px-4 py-2.5 bg-sol-copper text-sol-black text-xs font-semibold rounded-lg hover:bg-sol-amber transition-colors">Join</button>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/solarisbeer/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sol-muted hover:bg-sol-copper hover:text-sol-black transition-all" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.facebook.com/solarisbeer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sol-muted hover:bg-sol-copper hover:text-sol-black transition-all" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sol-muted">
          <p>&copy; 2026 Solaris Beer &amp; Blending, Murrieta, CA. All rights reserved.</p>
          <p>Redesign concept by <a href="https://www.shopbluewolf.com" target="_blank" rel="noopener noreferrer" className="text-sol-copper hover:text-sol-amber transition-colors">Blue Wolf Solutions</a></p>
        </div>
      </div>
    </footer>
  );
}
