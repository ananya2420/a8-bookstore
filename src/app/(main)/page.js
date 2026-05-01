import Banner from "@/components/Banner";
import BookDetails from "@/components/BookDetails";
import FeaturedBooks from "@/components/FeaturedBooks";
import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/shared/Footer";
import TestimonialSection from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <BookDetails />
      <FeaturedBooks />
      <FeaturedCard />
      <TestimonialSection />
      <Footer />
    </>
  );
}