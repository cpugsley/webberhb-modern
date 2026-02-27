import { motion } from "framer-motion";

const certs = [
  { name: "IICRC", detail: "WRT / ASD / FSRT", img: "https://webberhb.com/wp-content/uploads/2024/07/image.jpeg" },
  { name: "MICRO", detail: "CMI / CMRC", img: "https://webberhb.com/wp-content/uploads/2024/07/image-1.jpeg" },
  { name: "201 Magazine", detail: "Best of Bergen", img: "https://webberhb.com/wp-content/uploads/2024/07/unknown.png" },
  { name: "Nextdoor", detail: "Neighborhood Faves", img: "https://webberhb.com/wp-content/uploads/2024/07/image-1.png" },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-sm tracking-[0.3em] uppercase text-secondary text-center mb-12"
        >
          Certifications & Awards
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={cert.img}
                alt={cert.name}
                className="w-20 h-20 object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{cert.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{cert.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
