"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartProvider";
import CartDrawer from "./CartDrawer";

const links = [
  { label: "Events", href: "#events" },
  { label: "On Tap", href: "#drafts" },
  { label: "Shop", href: "#shop" },
  { label: "Beer Club", href: "#club" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count, setIsOpen } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-sol-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <Image src="/solaris-logo.png" alt="Solaris Beer & Blending" width={44} height={44} className="group-hover:scale-110 transition-transform" />
            <div className="hidden sm:block">
              <p className="font-display text-xl leading-tight">Solaris</p>
              <p className="text-[9px] uppercase tracking-[0.35em] text-sol-yellow">Beer & Blending</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-xs uppercase tracking-widest text-sol-muted hover:text-sol-yellow transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="relative p-2 text-sol-muted hover:text-sol-yellow transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-sol-yellow text-sol-black text-[10px] font-bold rounded-full flex items-center justify-center">{count}</span>
              )}
            </button>
            <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-sol-dark border-t border-white/5 px-6 py-6 space-y-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm uppercase tracking-widest text-sol-muted hover:text-sol-yellow transition-colors">{l.label}</a>
            ))}
          </div>
        )}
      </nav>
      <CartDrawer />
    </>
  );
}
