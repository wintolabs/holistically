import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PromoGallery from "@/components/PromoGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PromoGallery />
      <Services />
      <Footer />
    </>
  );
}
