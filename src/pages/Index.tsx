import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Reviews from "@/components/Reviews";
import ContactCTA from "@/components/ContactCTA";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Certifications />
      <Reviews />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
