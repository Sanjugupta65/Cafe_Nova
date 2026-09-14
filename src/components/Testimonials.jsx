import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";



const testimonials = [
  {
    name: "Mekdes A.",
    role: "Coffee Enthusiast",
    feedback:
      "Cafe Nova delivers the most authentic Ethiopian coffee experience. The taste, aroma, and craftsmanship are absolutely unforgettable.",
  },
  {
    name: "Abebe T.",
    role: "Entrepreneur",
    feedback:
      "Exceptional quality and rich flavor. Every cup feels premium and tells the story of Ethiopian heritage beautifully.",
  },
  {
    name: "Sara K.",
    role: "Coffee Lover",
    feedback:
      "The smooth texture, elegant packaging, and rich aroma make Cafe Nova stand out from every other brand I’ve tried.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      (prev - 1 + testimonials.length) %
      testimonials.length
    );
  };

  return (
    <section className="testimonials-section" id="reviews">

      {/* HEADER */}
      <div className="testimonials-header">

        <span className="testimonials-subtitle">
          Customer Reviews
        </span>

        <h2 className="testimonials-title">
          What Our Customers Say
        </h2>

        <p className="testimonials-text">
          Discover why coffee lovers choose
          Cafe Nova for its authentic taste,
          premium quality, and unforgettable experience.
        </p>

      </div>

      {/* CARD */}
      <div className="testimonial-wrapper">

        <FaQuoteLeft className="quote-left" />
        <FaQuoteRight className="quote-right" />

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="testimonial-card"
          >

            <p className="testimonial-feedback">
              {testimonials[index].feedback}
            </p>

            <h4 className="testimonial-name">
              {testimonials[index].name}
            </h4>

            <span className="testimonial-role">
              {testimonials[index].role}
            </span>

          </motion.div>

        </AnimatePresence>

        {/* BUTTONS */}
        <div className="testimonial-buttons">

          <button
            onClick={prev}
            className="testimonial-btn"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={next}
            className="testimonial-btn"
          >
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;