import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock, CheckCircle, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import moldImg from "@/assets/service-mold.jpg";

const process = [
  {
    step: "01",
    title: "Inspection & Assessment",
    description:
      "Our certified technicians conduct a thorough inspection using advanced moisture detection equipment to identify all affected areas and determine the extent of mold growth.",
  },
  {
    step: "02",
    title: "Containment",
    description:
      "We establish negative-air containment zones using polyethylene sheeting and HEPA-filtered air scrubbers to prevent cross-contamination to unaffected areas.",
  },
  {
    step: "03",
    title: "Air Filtration",
    description:
      "Industrial-grade HEPA air filtration systems capture microscopic mold spores from the air, improving air quality throughout the remediation process.",
  },
  {
    step: "04",
    title: "Mold Removal",
    description:
      "Affected materials are carefully removed and disposed of following EPA guidelines. Salvageable surfaces are treated with antimicrobial agents.",
  },
  {
    step: "05",
    title: "Cleaning & Sanitizing",
    description:
      "All contents and structural elements are cleaned, sanitized, and deodorized using professional-grade products to eliminate residual spores.",
  },
  {
    step: "06",
    title: "Restoration",
    description:
      "We restore your property to pre-loss condition — replacing drywall, painting, and rebuilding as needed so you can move forward with confidence.",
  },
];

const faqs = [
  {
    q: "How do I know if I have mold?",
    a: "Common signs include musty odors, visible discoloration on walls or ceilings, water stains, and allergy-like symptoms such as sneezing, coughing, or itchy eyes when indoors.",
  },
  {
    q: "Is mold dangerous to my health?",
    a: "Certain mold species can cause respiratory issues, allergic reactions, and in severe cases, more serious health problems — especially for children, the elderly, and those with compromised immune systems.",
  },
  {
    q: "Does insurance cover mold remediation?",
    a: "Coverage varies by policy. Mold caused by a covered peril (like a burst pipe) is often covered. We work directly with insurance companies to help streamline your claim.",
  },
  {
    q: "How long does mold remediation take?",
    a: "Most residential projects take 3–7 days depending on the extent of contamination. We'll provide a detailed timeline during your initial assessment.",
  },
];

const MoldRemediation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={moldImg}
            alt="Professional mold remediation"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-overlay)" }}
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-display tracking-wider uppercase mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Mold Remediation
                </h1>
                <p className="text-white/80 text-lg md:text-xl mt-4 max-w-2xl">
                  Certified mold removal and remediation services to protect
                  your property and your family's health.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="tel:5515021052"
                    className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded font-display text-sm tracking-wider uppercase hover:brightness-110 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-display tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              24/7 Emergency Response
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              IICRC Certified
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Professional Mold Remediation Matters
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mold can spread rapidly through your property, often hidden behind
                walls, under flooring, and in HVAC systems. DIY cleaning only
                addresses surface mold — without professional remediation, the
                problem will return and potentially worsen.
              </p>
              <p>
                At WEBBER, our IICRC-certified technicians use industry-leading
                equipment and EPA-approved protocols to eliminate mold at its
                source. We don't just clean what you can see — we identify and
                resolve the underlying moisture issue to prevent recurrence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Warning Signs of Mold
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Musty or earthy odors",
              "Visible dark spots on walls or ceilings",
              "Recent water damage or flooding",
              "Persistent allergy symptoms indoors",
              "Peeling or bubbling paint",
              "Warped or discolored surfaces",
              "Condensation on windows",
              "Humidity above 60%",
            ].map((sign, i) => (
              <motion.div
                key={sign}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
              >
                <AlertTriangle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{sign}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
              Our Process
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              How We Remediate Mold
            </h2>
          </motion.div>

          <div className="space-y-8">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-secondary">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <h3 className="font-display text-base font-bold text-foreground">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default MoldRemediation;
