import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaStar,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";



const reasons = [
  {
    icon: <FaLeaf />,
    title: "Pure Ethiopian Origin",
    desc: "Sourced from the finest coffee regions across Ethiopia with authentic heritage.",
  },
  {
    icon: <FaStar />,
    title: "Exceptional Quality",
    desc: "Carefully selected premium beans roasted for a rich and unforgettable taste.",
  },
  {
    icon: <FaHandshake />,
    title: "Sustainable Practices",
    desc: "Supporting farmers, ethical sourcing, and environmentally conscious production.",
  },
  {
    icon: <FaHeart />,
    title: "Crafted with Passion",
    desc: "Every cup is created with dedication, craftsmanship, and genuine love for coffee.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      {/* HEADER */}
      <div className="why-header">

        <span className="why-subtitle">
          Why Choose Us
        </span>

        <h2 className="why-title">
          The Cafè Nova Experience
        </h2>

        <p className="why-text">
          We combine Ethiopian heritage, premium quality,
          and modern craftsmanship to deliver an unforgettable
          coffee experience built on authenticity and excellence.
        </p>

      </div>

      {/* CARDS */}
      <div className="why-grid">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="why-card"
          >

            <div className="why-icon">
              {reason.icon}
            </div>

            <h3 className="why-card-title">
              {reason.title}
            </h3>

            <p className="why-card-text">
              {reason.desc}
            </p>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default WhyChooseUs;