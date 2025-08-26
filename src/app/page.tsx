import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PromoGallery from "@/components/PromoGallery";
import YoutubeVideoCarousel from "@/components/YoutubeVideoCarousel";
import { LatestBlogs } from "@/components/LatestBlogs";
import TestimonialsStories from "@/components/Testimonials";
import { MarqueeTestimonails } from "@/components/Testimonial";

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <YoutubeVideoCarousel />
      <PromoGallery />
      <LatestBlogs />
      <TestimonialsStories />
      <MarqueeTestimonails />
      <Services />
      <Footer />
    </>
  );
}
