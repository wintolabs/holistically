import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PromoGallery from "@/components/PromoGallery";
import VideoCarousel from "@/components/VideoCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <VideoCarousel />
      <PromoGallery />
      <Services />
      <Footer />
    </>
  );
}
