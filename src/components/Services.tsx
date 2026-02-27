import { motion } from "framer-motion";
import serviceWater from "@/assets/service-water.jpg";
import serviceMold from "@/assets/service-mold.jpg";
import serviceFire from "@/assets/service-fire.jpg";
import serviceDisinfect from "@/assets/service-disinfect.jpg";
import serviceStorm from "@/assets/service-storm.jpg";
import serviceAsbestos from "@/assets/service-asbestos.jpg";
import serviceContents from "@/assets/service-contents.jpg";
import serviceReconstruction from "@/assets/service-reconstruction.jpg";

const services = [
  { img: serviceWater, title: "Water Damage Restoration", desc: "Rapid water extraction, drying, and structural restoration to prevent further damage." },
  { img: serviceMold, title: "Mold Testing & Remediation", desc: "Comprehensive mold inspection, testing, and certified remediation services." },
  { img: serviceFire, title: "Fire & Smoke Cleanup", desc: "Complete fire damage restoration including smoke, soot, and odor removal." },
  { img: serviceDisinfect, title: "Disinfecting", desc: "Professional-grade disinfection for homes, offices, and commercial spaces." },
  { img: serviceStorm, title: "Storm & Disaster Response", desc: "Emergency response for storm damage, flooding, and natural disasters." },
  { img: serviceAsbestos, title: "Lead & Asbestos Testing", desc: "Certified testing and safe abatement of hazardous materials." },
  { img: serviceContents, title: "Contents Cleaning", desc: "Careful cleaning, inventory, and restoration of personal belongings." },
  { img: serviceReconstruction, title: "Reconstruction", desc: "Full-service reconstruction to restore your property to pre-loss condition." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-lg overflow-hidden border border-border hover:border-secondary/40 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-5 bg-card">
                <h3 className="font-display text-base font-semibold uppercase text-card-foreground mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>

              {/* Hover overlay on image */}
              <div className="absolute inset-0 aspect-[4/3] bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
