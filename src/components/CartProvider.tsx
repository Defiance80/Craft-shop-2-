"use client";
import { createContext, useContext, useState, useCallback } from "react";

type CartItem = { id: string; name: string; price: number; qty: number; image?: string };
type CartCtx = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  total: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);
export const useCart = () => { const c = useContext(Ctx); if (!c) throw new Error("useCart outside provider"); return c; };

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) { setItems(prev => prev.filter(i => i.id !== id)); return; }
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  }, []);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return <Ctx.Provider value={{ items, addItem, removeItem, updateQty, total, count, isOpen, setIsOpen }}>{children}</Ctx.Provider>;
}
