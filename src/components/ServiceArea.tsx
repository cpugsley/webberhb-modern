import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const servedCounties = [
  "Bergen", "Sussex", "Passaic", "Hudson", "Essex", "Morris",
  "Warren", "Hunterdon", "Somerset", "Union", "Middlesex",
  "Monmouth", "Mercer", "Burlington", "Ocean", "Camden",
];

// Accurate NJ state outline silhouette
const njOutline =
  "M74.5,2 L78,4 L82,8 L88,15 L92,22 L94,30 L95,38 L96,44 L97,50 L96,56 L94,60 L93,64 L94,68 L96,72 L98,74 L100,72 L102,70 L104,72 L105,76 L104,80 L102,84 L100,88 L98,92 L96,98 L94,104 L92,110 L90,116 L88,122 L86,128 L84,134 L82,138 L78,144 L74,150 L70,156 L66,162 L62,166 L58,168 L54,170 L50,174 L48,178 L46,184 L44,190 L42,196 L40,200 L38,198 L36,194 L34,190 L32,186 L30,182 L28,178 L26,174 L24,168 L22,162 L20,156 L18,150 L16,144 L14,138 L14,132 L16,126 L18,120 L20,114 L22,108 L24,102 L28,96 L32,90 L36,84 L40,78 L44,72 L48,66 L52,60 L54,54 L56,48 L58,42 L60,36 L62,30 L64,24 L66,18 L68,12 L70,8 L72,4 Z";

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
            className="flex-shrink-0 relative"
          >
            <div className="relative w-48 md:w-56">
              <svg
                viewBox="0 0 120 210"
                className="w-full h-auto drop-shadow-lg"
                aria-label="State of New Jersey"
              >
                <path
                  d={njOutline}
                  className="fill-secondary"
                  strokeWidth="1.5"
                  stroke="hsl(var(--background))"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-lg md:text-xl font-bold text-secondary-foreground tracking-wider">
                  NJ
                </span>
              </div>
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
