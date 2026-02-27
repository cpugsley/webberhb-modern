import { motion } from "framer-motion";
import { Shield, Clock, Award, Heart } from "lucide-react";

const values = [
  { icon: Clock, title: "24/7 Available", desc: "Round-the-clock emergency response" },
  { icon: Shield, title: "Certified", desc: "IICRC & MICRO certified professionals" },
  { icon: Award, title: "Award-Winning", desc: "Best of Bergen, Neighborhood Faves" },
  { icon: Heart, title: "Personal Touch", desc: "Small business, genuine connections" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-section-dark text-section-dark-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary mb-3">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
              With You Every
              <br />
              <span className="text-gradient-gold">Step of the Way</span>
            </h2>
            <p className="text-section-dark-foreground/80 text-lg leading-relaxed mb-6">
              WEBBER Home and Business was created with one simple mission — provide safe, healthy
              environments in our homes, schools, and workplaces.
            </p>
            <p className="text-section-dark-foreground/70 leading-relaxed">
              We recognize just how difficult emergencies can be. As a small business, we combine
              extensive training and knowledge with genuine connections throughout your project.
              From start to finish, we'll be right there with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-lg p-5"
              >
                <v.icon className="w-8 h-8 text-secondary mb-3" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider mb-1">{v.title}</h3>
                <p className="text-xs text-section-dark-foreground/60">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
