import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Events from "@/components/Events";
import DraftList from "@/components/DraftList";
import Shop from "@/components/Shop";
import BeerClub from "@/components/BeerClub";
import FoodVendors from "@/components/FoodVendors";
import SpaceRental from "@/components/SpaceRental";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CartProvider from "@/components/CartProvider";

export default function Home() {
  return (
    <CartProvider>
      <main className="relative">
        <Navbar />
        <Hero />
        <Events />
        <DraftList />
        <Shop />
        <BeerClub />
        <FoodVendors />
        <SpaceRental />
        <Footer />
        <Chatbot />
      </main>
    </CartProvider>
  );
}
