import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Catalog from "@/components/Catalog";
import Promo from "@/components/Promo";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TelegramButton from "@/components/TelegramButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Catalog />
      <Promo />
      <HowItWorks />
      <ContactForm />
      <Footer />
      <TelegramButton />
    </main>
  );
};

export default Index;