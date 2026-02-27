import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const servedCounties = [
  "Bergen", "Sussex", "Passaic", "Hudson", "Essex", "Morris",
  "Warren", "Hunterdon", "Somerset", "Union", "Middlesex",
  "Monmouth", "Mercer", "Burlington", "Ocean", "Camden",
];

// Simplified NJ county SVG paths (approximate boundaries)
const counties: Record<string, { path: string; labelX: number; labelY: number }> = {
  Sussex: {
    path: "M95,5 L130,8 L140,45 L135,70 L110,75 L85,60 L80,30 Z",
    labelX: 108, labelY: 40,
  },
  Passaic: {
    path: "M80,60 L110,75 L115,95 L105,110 L85,105 L70,85 Z",
    labelX: 92, labelY: 88,
  },
  Bergen: {
    path: "M110,75 L135,70 L148,78 L150,115 L130,120 L115,115 L105,110 L115,95 Z",
    labelX: 128, labelY: 98,
  },
  Warren: {
    path: "M30,55 L80,30 L85,60 L80,85 L70,100 L55,115 L25,105 L15,80 Z",
    labelX: 48, labelY: 75,
  },
  Morris: {
    path: "M70,85 L85,105 L105,110 L115,115 L120,140 L100,150 L75,145 L55,130 L55,115 Z",
    labelX: 88, labelY: 125,
  },
  Hudson: {
    path: "M130,120 L150,115 L155,145 L140,150 L128,140 Z",
    labelX: 140, labelY: 133,
  },
  Essex: {
    path: "M105,110 L115,115 L130,120 L128,140 L120,150 L120,140 L100,145 Z",
    labelX: 115, labelY: 130,
  },
  Hunterdon: {
    path: "M15,130 L25,105 L55,115 L55,130 L60,155 L55,175 L40,190 L20,185 L8,160 Z",
    labelX: 35, labelY: 155,
  },
  Somerset: {
    path: "M55,130 L75,145 L90,155 L95,175 L80,185 L60,180 L55,175 L60,155 Z",
    labelX: 72, labelY: 165,
  },
  Union: {
    path: "M90,155 L100,150 L120,150 L130,160 L125,180 L110,185 L95,175 Z",
    labelX: 110, labelY: 168,
  },
  Middlesex: {
    path: "M95,175 L110,185 L125,180 L140,190 L145,215 L130,230 L105,225 L90,210 L80,195 L80,185 Z",
    labelX: 112, labelY: 205,
  },
  Mercer: {
    path: "M40,190 L55,175 L60,180 L80,185 L80,195 L90,210 L80,225 L60,230 L40,220 L30,200 Z",
    labelX: 60, labelY: 208,
  },
  Monmouth: {
    path: "M130,230 L145,215 L155,220 L165,250 L160,280 L140,295 L120,285 L110,260 L115,240 Z",
    labelX: 138, labelY: 260,
  },
  Burlington: {
    path: "M30,230 L60,230 L80,225 L90,210 L105,225 L115,240 L110,260 L100,290 L80,310 L55,320 L30,300 L15,270 L20,245 Z",
    labelX: 65, labelY: 275,
  },
  Ocean: {
    path: "M110,260 L120,285 L140,295 L155,310 L160,350 L145,380 L120,385 L100,370 L85,340 L80,310 L100,290 Z",
    labelX: 120, labelY: 335,
  },
  Camden: {
    path: "M15,300 L30,300 L55,320 L50,345 L35,360 L15,350 L5,330 Z",
    labelX: 30, labelY: 330,
  },
  // Non-served counties (shown but not highlighted)
  Atlantic: {
    path: "M50,345 L55,320 L80,310 L85,340 L100,370 L90,390 L65,395 L45,380 L35,360 Z",
    labelX: 65, labelY: 365,
  },
  "Cape May": {
    path: "M45,380 L65,395 L75,420 L65,445 L45,450 L30,435 L25,410 L35,395 Z",
    labelX: 50, labelY: 420,
  },
  Cumberland: {
    path: "M5,360 L35,360 L45,380 L35,395 L25,410 L10,415 L0,395 Z",
    labelX: 22, labelY: 388,
  },
  Salem: {
    path: "M0,330 L15,300 L15,350 L5,360 L0,395 L-10,380 L-15,350 Z",
    labelX: 3, labelY: 345,
  },
  Gloucester: {
    path: "M5,330 L15,300 L30,300 L15,350 L5,360 Z",
    labelX: 16, labelY: 332,
  },
};

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
          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <svg
              viewBox="-20 -5 195 465"
              className="w-64 md:w-80 h-auto"
              aria-label="Map of New Jersey counties served"
            >
              {Object.entries(counties).map(([name, { path }]) => {
                const isServed = servedCounties.includes(name);
                return (
                  <g key={name}>
                    <path
                      d={path}
                      className={
                        isServed
                          ? "fill-secondary/80 stroke-background hover:fill-secondary transition-colors cursor-pointer"
                          : "fill-muted stroke-background"
                      }
                      strokeWidth="2"
                    />
                  </g>
                );
              })}
              {/* County labels only for served counties */}
              {Object.entries(counties).map(([name, { labelX, labelY }]) => {
                const isServed = servedCounties.includes(name);
                if (!isServed) return null;
                return (
                  <text
                    key={`label-${name}`}
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    className="fill-secondary-foreground text-[7px] font-bold pointer-events-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {name}
                  </text>
                );
              })}
            </svg>
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
