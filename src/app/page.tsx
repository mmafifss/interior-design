import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Brands from "@/components/brands/Brands";
import Services from "@/components/services/Services";
import Banner from "@/components/banner/Banner";
import Banner2 from "@/components/banner/Banner2";
import Testimonial from "@/components/testimonial/Testimonial";
import Connect from "@/components/connect/Connect";
import Footer from "@/components/footer/Footer";
import DesignProcess from "@/components/designProcess/DesignProcess";
import MyGallery from "@/components/gallery/Gallery";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DesignProcess />
      <Services />
      <Banner />
      <Banner2 />
      {/* <Testimonial /> */}
      <MyGallery />
      <Connect />
      <Footer />
    </div>
  );
}

export default Home;
