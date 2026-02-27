import { motion } from "framer-motion";
import { Phone, ShieldCheck, Clock, CheckCircle, AlertTriangle, ArrowLeft, Droplets, Search, Wind, Shield, FileCheck, DollarSign, Star, Home, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";
import moldImg from "@/assets/service-mold.jpg";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const process = [
  {
    step: "01",
    title: "Initial Visual Evaluation & Moisture Mapping",
    description:
      "Our MICRO-certified inspectors conduct a comprehensive visual evaluation combined with advanced moisture mapping technology (infrared cameras, pin/pinless meters) to identify all affected areas — including hidden mold behind walls and under flooring.",
    icon: Search,
  },
  {
    step: "02",
    title: "Safe Containment with Negative Air Pressure",
    description:
      "We establish sealed containment zones using polyethylene sheeting and create negative air pressure with HEPA-filtered air scrubbers. This prevents cross-contamination to unaffected areas — a strict ANSI/IICRC S520 requirement.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Physical Removal & HEPA Vacuuming",
    description:
      "Contaminated materials are carefully removed and disposed of following EPA guidelines. All surfaces are HEPA-vacuumed to capture microscopic spores invisible to the naked eye.",
    icon: Wind,
  },
  {
    step: "04",
    title: "Antimicrobial Application & Structural Drying",
    description:
      "Salvageable structural elements are treated with EPA-registered antimicrobial agents. Industrial dehumidifiers and air movers ensure all moisture is eliminated to prevent regrowth.",
    icon: Droplets,
  },
  {
    step: "05",
    title: "Post-Remediation Verification",
    description:
      "Independent air quality testing confirms spore counts have returned to normal, safe fungal ecology. You receive official clearance documentation before any reconstruction begins.",
    icon: FileCheck,
  },
  {
    step: "06",
    title: "Full Reconstruction & Restoration",
    description:
      "We handle all rebuilding — drywall, painting, flooring, insulation — returning your property to pre-loss condition. No need to hire a second contractor.",
    icon: Wrench,
  },
];

const rootCauses = [
  "Poor attic ventilation trapping moisture",
  "Foundation cracks allowing groundwater seepage",
  "Plumbing leaks behind walls or under slabs",
  "Improperly vented bathrooms or dryer exhausts",
  "HVAC condensation and ductwork issues",
  "Ice damming and roof leaks",
];

const costRanges = [
  { area: "Bathroom", range: "$500 – $2,000", note: "Often caused by poor ventilation and grout failures" },
  { area: "Basement", range: "$500 – $3,000", note: "Foundation moisture and flooding are the primary drivers" },
  { area: "Crawl Space", range: "$500 – $4,000", note: "Encapsulation may be recommended for long-term prevention" },
  { area: "Attic", range: "$1,000 – $7,000", note: "Often requires full insulation replacement" },
  { area: "Whole Home", range: "$2,000 – $10,000+", note: "Depends on square footage and extent of contamination" },
];

const faqs = [
  {
    q: "How do I know if I have mold?",
    a: "Common signs include musty odors, visible discoloration on walls or ceilings, water stains, and allergy-like symptoms such as sneezing, coughing, or itchy eyes when indoors. Our inspectors use moisture mapping technology to find hidden mold you can't see.",
  },
  {
    q: "Is mold dangerous to my health?",
    a: "Certain mold species produce mycotoxins that can cause respiratory issues, allergic reactions, and in severe cases, more serious health problems — especially for children, the elderly, and those with compromised immune systems. That's why professional remediation following IICRC S520 standards is critical.",
  },
  {
    q: "Does insurance cover mold remediation?",
    a: "Coverage varies by policy. Mold caused by a covered peril (like a burst pipe) is often covered. We work directly with insurance companies to help streamline your claim and provide all necessary documentation.",
  },
  {
    q: "How long does mold remediation take?",
    a: "Most residential projects take 3–7 days depending on the extent of contamination. We provide a detailed timeline during your initial assessment so you know exactly what to expect.",
  },
  {
    q: "Why shouldn't I just clean mold myself with bleach?",
    a: "Bleach only kills surface mold on non-porous materials — it doesn't reach roots embedded in drywall, wood, or insulation. Without addressing the moisture source and properly containing spores, DIY cleaning often makes the problem worse by spreading spores to new areas.",
  },
  {
    q: "What documentation will I receive after the job?",
    a: "You'll receive a full remediation report, post-remediation clearance certificate verifying safe air quality levels, and all documentation needed for insurance claims or real estate transactions.",
  },
];

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

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
                  One call. Complete mold removal, root-cause correction, and full reconstruction — from contamination to pre-loss condition.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="tel:5515021052"
                    className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded font-display text-sm tracking-wider uppercase hover:brightness-110 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="#cost"
                    className="flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded font-display text-sm tracking-wider uppercase hover:border-secondary hover:text-secondary transition-all"
                  >
                    Get a Free Quote
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
              IICRC S520 Compliant
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              24/7 Emergency Response
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              MICRO Certified Inspectors
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-secondary" />
              Clearance Documentation
            </div>
          </div>
        </div>
      </section>

      {/* One-Stop-Shop Value Prop */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionAnim}>
            <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
              One Call Does It All
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Your Single Point of Contact — Start to Finish
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Managing multiple contractors during a mold crisis is the last thing you need. Webber handles the <strong className="text-foreground">entire disaster lifecycle</strong> under one roof: initial moisture detection, certified mold testing, full remediation, and complete reconstruction.
              </p>
              <p>
                One phone call takes your property from contaminated back to <strong className="text-foreground">pre-loss condition</strong>. No juggling vendors. No finger-pointing between contractors. Just one team, fully accountable from day one.
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Search, label: "Detection & Testing" },
                { icon: Shield, label: "Full Remediation" },
                { icon: Home, label: "Reconstruction" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-muted/50 border border-border rounded-lg p-4">
                  <item.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-display text-sm tracking-wider uppercase text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionAnim} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Warning Signs of Mold
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              If you notice any of these signs, don't wait — mold spreads fast and can cause serious health issues.
            </p>
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

      {/* IICRC S520 Process */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionAnim} className="text-center mb-12">
            <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
              ANSI/IICRC S520 Compliant
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Step-by-Step Process
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Every project follows the industry's gold standard for professional mold remediation — so you know exactly what happens from the moment you call.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[39px] top-[56px] bottom-[56px] w-px bg-border" />

            <div className="space-y-8">
              {process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div className="flex-shrink-0 w-[78px] flex flex-col items-center">
                    <div className="w-14 h-14 rounded-lg bg-background border border-secondary/20 flex items-center justify-center relative z-10">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xs tracking-widest uppercase text-secondary">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mt-1">
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
        </div>
      </section>

      {/* Root Cause Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...sectionAnim}>
              <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
                Beyond Surface Cleaning
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                We Fix the Root Cause — Not Just the Symptom
              </h2>
              <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                Mold is a symptom of a moisture problem. Bleaching the surface without fixing the source guarantees it comes back. Our MICRO-certified inspectors identify and correct the underlying environmental failure so the mold <em>never returns</em>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-lg font-bold mb-4 text-secondary">
                Common Root Causes We Identify
              </h3>
              <ul className="space-y-3">
                {rootCauses.map((cause) => (
                  <li key={cause} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-primary-foreground/80 text-sm">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Post-Remediation Clearance & Warranty */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionAnim} className="text-center">
            <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
              Peace of Mind
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Clearance Certificates & Warranty Protection
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              The cleanup is only half the job. For real estate agents, anxious homeowners, and insurance adjusters — the documentation matters just as much.
            </p>
          </motion.div>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <FileCheck className="w-8 h-8 text-secondary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground">Post-Remediation Clearance</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Independent air quality testing verifies that spore counts have returned to normal, safe fungal ecology. You receive official clearance documentation proving your indoor environment is safe — essential for real estate transactions and insurance claims.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <ShieldCheck className="w-8 h-8 text-secondary mb-3" />
              <h3 className="font-display text-lg font-bold text-foreground">Transferable Warranty</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Our remediation work is backed by a warranty that transfers with the property — giving current and future homeowners confidence. Ask about our warranty terms during your free consultation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Transparency */}
      <section id="cost" className="py-16 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionAnim} className="text-center mb-10">
            <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
              Cost Transparency
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Typical Mold Remediation Costs
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Every project is unique, but here are typical ranges for North Jersey properties to help you plan. An accurate quote requires an on-site inspection.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {costRanges.map((item, i) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-5"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-base font-bold text-foreground">{item.area}</h3>
                  <span className="font-display text-sm font-bold text-secondary">{item.range}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="tel:5515021052"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded font-display text-sm tracking-wider uppercase hover:brightness-110 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Get a Fast Free Quote
            </a>
            <p className="text-muted-foreground text-xs mt-3">Free inspections for Bergen, Passaic, Morris & surrounding counties</p>
          </motion.div>
        </div>
      </section>

      {/* Localized Trust & Reviews */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionAnim} className="text-center mb-10">
            <span className="font-display text-sm tracking-[0.3em] uppercase text-secondary">
              Trusted Locally
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Our Mold Remediation Clients Say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Ryan and the team were incredible. They found mold in our attic that two other companies missed, traced it back to a ventilation issue, and handled everything — removal, insulation replacement, the works. One call, done.",
                name: "Bergen County Homeowner",
                stars: 5,
              },
              {
                text: "We were selling our home and the inspection found mold in the basement. Webber came out the same day, explained every step of the process clearly, and provided clearance documentation that satisfied the buyer's inspector. Couldn't have closed without them.",
                name: "Morris County Homeowner",
                stars: 5,
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
                <p className="font-display text-sm font-bold text-foreground mt-4">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...sectionAnim} className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="font-display text-base font-bold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default MoldRemediation;
