import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "All the great qualities you are looking for in a business, WEBBER Home and Business exemplifies. Ryan is honest, professional, prompt, and a pleasure to work with. I highly recommend WEBBER Home and Business for your remediation project.",
    author: "Sal M.",
  },
  {
    text: "Wish I could give them more than 5 stars! Ryan Webber was absolutely amazing to work with. Kind, punctual, responsive, and thorough. From the moment I initially reached out until the work was finished it was perfect.",
    author: "Steven R.",
  },
  {
    text: "Ryan was great! Very professional and knowledgeable! He came on time, explained everything before he began, and followed up after the lab results arrived and made sure to assist as much as possible!",
    author: "Ofer G.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-section-dark text-section-dark-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-secondary mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-section-dark-foreground/5 border border-section-dark-foreground/10 rounded-lg p-8 relative"
            >
              <Quote className="w-8 h-8 text-secondary/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-section-dark-foreground/80 leading-relaxed mb-6 text-sm">
                "{review.text}"
              </p>
              <p className="font-display text-sm font-semibold tracking-wider uppercase text-secondary">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
