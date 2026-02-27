import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Reviews from "@/components/Reviews";
import ContactCTA from "@/components/ContactCTA";
import ServiceArea from "@/components/ServiceArea";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Certifications />
      <Reviews />
      <ServiceArea />
      <ContactCTA />
      
    </div>
  );
};

export default Index;
