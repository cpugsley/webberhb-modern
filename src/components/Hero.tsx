import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Restoration professionals at work" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-secondary mb-6">
            24/7 Emergency Response
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] text-primary-foreground mb-6">
            Restoring What
            <br />
            <span className="text-gradient-gold">Matters Most</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 font-body mb-10">
            IICRC & MICRO certified professionals providing safe, healthy environments
            for your home, school, and workplace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:5515021052"
            className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded font-display text-lg tracking-wider uppercase hover:brightness-110 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now: 551-502-1052
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded font-display text-lg tracking-wider uppercase hover:border-secondary hover:text-secondary transition-all"
          >
            Our Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#services" className="text-primary-foreground/50 hover:text-secondary transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
