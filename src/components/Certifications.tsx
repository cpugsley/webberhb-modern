import { motion } from "framer-motion";

const certs = [
  { name: "IICRC", detail: "WRT / ASD / FSRT", img: "https://webberhb.com/wp-content/uploads/2024/07/image.jpeg" },
  { name: "MICRO", detail: "CMI / CMRC", img: "https://webberhb.com/wp-content/uploads/2024/07/image-1.jpeg" },
  { name: "201 Magazine", detail: "Best of Bergen", img: "https://webberhb.com/wp-content/uploads/2024/07/unknown.png" },
  { name: "Nextdoor", detail: "Neighborhood Faves", img: "https://webberhb.com/wp-content/uploads/2024/07/image-1.png" },
];

const Certifications = () => {
  return (
    <section className="py-20 md:py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
            Certifications & Awards
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Industry-Recognized Excellence
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-start">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-muted/50 border border-border flex items-center justify-center p-4 mb-5">
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="font-display text-base md:text-lg font-bold uppercase tracking-wider text-foreground">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{cert.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
