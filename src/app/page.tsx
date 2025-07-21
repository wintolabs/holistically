import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PromoGallery from "@/components/PromoGallery";
import VideoCarousel from "@/components/VideoCarousel";
import { LatestBlogs } from "@/components/LatestBlogs";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <VideoCarousel />
      <PromoGallery />
      <LatestBlogs />
      <Services />
      <Footer />
    </>
  );
}
