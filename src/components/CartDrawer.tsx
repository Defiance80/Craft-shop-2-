"use client";
import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed top-0 right-0 h-full w-[400px] max-w-[90vw] bg-sol-dark border-l border-white/10 z-50 flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h3 className="font-display text-2xl">Your Cart</h3>
          <button onClick={() => setIsOpen(false)} className="text-sol-muted hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 && (
            <p className="text-sol-muted text-center py-12">Your cart is empty</p>
          )}
          {items.map(item => (
            <div key={item.id} className="flex gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/5">
              {item.image && (
                <div className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0" style={{ backgroundImage: `url('${item.image}')` }} />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.name}</p>
                <p className="text-sol-copper text-sm">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-white/20">−</button>
                  <span className="text-sm w-4 text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-white/20">+</button>
                  <button onClick={() => removeItem(item.id)} className="ml-auto text-xs text-sol-muted hover:text-red-400">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-white/10 space-y-4">
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="font-display text-sol-copper">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 bg-sol-copper text-sol-black text-sm uppercase tracking-widest font-semibold rounded-xl hover:bg-sol-amber transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
