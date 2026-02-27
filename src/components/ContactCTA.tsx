import { Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary mb-3">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground mb-6">
            Need Emergency Service?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our IICRC and MICRO certified staff is available 24 hours a day, 7 days a week
            to provide immediate response. Don't wait — call us now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5515021052"
              className="inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-4 rounded font-display text-lg tracking-wider uppercase hover:brightness-110 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              551-502-1052
            </a>
            <a
              href="https://www.instagram.com/webberhb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-foreground/20 text-foreground px-8 py-4 rounded font-display text-lg tracking-wider uppercase hover:border-secondary hover:text-secondary transition-all"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
