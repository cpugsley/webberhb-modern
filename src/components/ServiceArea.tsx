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
    <section className="py-12 bg-muted/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* NJ Silhouette */}
          <div className="w-24 md:w-32 flex-shrink-0 opacity-80">
            <img
              src={njOutline}
              alt="State of New Jersey"
              className="w-full h-auto"
              style={{ filter: "invert(45%) sepia(80%) saturate(400%) hue-rotate(170deg) brightness(90%)" }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Serving 16 Counties Across New Jersey
            </h2>
            <p className="text-muted-foreground text-sm mt-2 mb-4">
              Fast, reliable restoration services throughout the state.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {servedCounties.map((county) => (
                <span
                  key={county}
                  className="inline-flex items-center gap-1 bg-card border border-border rounded-full px-3 py-1 text-xs font-display tracking-wide uppercase text-foreground"
                >
                  <MapPin className="w-3 h-3 text-secondary" />
                  {county}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-3">
              Don't see your county? Give us a call — we may still be able to help.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;
