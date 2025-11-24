import Image from "next/image";
import FeaturesSection from "@/component/Features";
import Hero from "@/component/Hero";
import HomeItemsSection from "@/component/HomeItemsSection";
import TestimonialsSection from "@/component/TestimonialSections";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturesSection />
      <HomeItemsSection />
      <TestimonialsSection />
    </div>
  );
}
