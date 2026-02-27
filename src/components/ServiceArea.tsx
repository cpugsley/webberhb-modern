import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import njOutline from "@/assets/nj-outline.svg";

const servedCounties = [
  "Bergen", "Sussex", "Passaic", "Hudson", "Essex", "Morris",
  "Warren", "Hunterdon", "Somerset", "Union", "Middlesex",
  "Monmouth", "Mercer", "Burlington", "Ocean", "Camden",
];

const ServiceArea = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
            Service Area
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Counties We Serve
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Proudly serving 16 counties across New Jersey with fast, reliable restoration services.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* NJ State Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="w-40 md:w-52 opacity-80">
              <img
                src={njOutline}
                alt="State of New Jersey"
                className="w-full h-auto"
                style={{ filter: "invert(45%) sepia(80%) saturate(400%) hue-rotate(170deg) brightness(90%)" }}
              />
            </div>
          </motion.div>

          {/* County Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {servedCounties.map((county, index) => (
                <motion.div
                  key={county}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="font-display text-sm tracking-wide uppercase text-foreground">
                    {county}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-6">
              Don't see your county? Give us a call — we may still be able to help.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
