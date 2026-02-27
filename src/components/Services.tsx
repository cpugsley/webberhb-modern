import { motion } from "framer-motion";
import { Droplets, Bug, Flame, SprayCan, CloudLightning, FlaskConical, Package, Hammer } from "lucide-react";

const services = [
  { icon: Droplets, title: "Water Damage Restoration", desc: "Rapid water extraction, drying, and structural restoration to prevent further damage." },
  { icon: Bug, title: "Mold Testing & Remediation", desc: "Comprehensive mold inspection, testing, and certified remediation services." },
  { icon: Flame, title: "Fire & Smoke Cleanup", desc: "Complete fire damage restoration including smoke, soot, and odor removal." },
  { icon: SprayCan, title: "Disinfecting", desc: "Professional-grade disinfection for homes, offices, and commercial spaces." },
  { icon: CloudLightning, title: "Storm & Disaster Response", desc: "Emergency response for storm damage, flooding, and natural disasters." },
  { icon: FlaskConical, title: "Lead & Asbestos Testing", desc: "Certified testing and safe abatement of hazardous materials." },
  { icon: Package, title: "Contents Cleaning", desc: "Careful cleaning, inventory, and restoration of personal belongings." },
  { icon: Hammer, title: "Reconstruction", desc: "Full-service reconstruction to restore your property to pre-loss condition." },
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
              className="group bg-card rounded-lg p-6 border border-border hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold uppercase text-card-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
