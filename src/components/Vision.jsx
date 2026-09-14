import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <section className="vision-section" id="vision">

      <div className="vision-container">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="vision-content"
        >

          <span className="vision-subtitle">
            Looking Ahead
          </span>

          <h2 className="vision-title">
            Our Vision for the Future
          </h2>

          <p className="vision-text">
            Cafe Nova is serving more than a coffee  —
            we are creating a global legacy inspired by Ethiopian
            culture, craftsmanship, and excellence.
          </p>

          <p className="vision-text">
            Our mission is to connect coffee lovers around
            the world with authentic Ethiopian coffee while
            empowering farmers, supporting communities,
            and shaping the future of premium coffee.
          </p>

          <p className="vision-text">
            Through innovation, sustainability, and passion,
            we aim to inspire a new generation of coffee
            experiences built on heritage and quality.
          </p>

          <Link to='/soon'>
          <button className="vision-btn">
            Join Our Journey
          </button>
          </Link>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="vision-image-wrapper"
        >

          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
            alt="Lalo Coffee Vision"
            className="vision-image"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default Vision;