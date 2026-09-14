import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Heritage = () => {
  return (
    <section className="heritage-section" id="heritage">

      <div className="heritage-container">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="heritage-image-wrapper"
        >
          <img
            src="/photo_2026-05-23_15-04-15.jpg"
            alt="Ethiopian Coffee Heritage"
            className="heritage-image"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="heritage-content"
        >

          <span className="heritage-subtitle">
          From Ethiopia to Your Cup
          </span>

          <h2 className="heritage-title">
            The Heart of Great Coffee
          </h2>

          <p className="heritage-text">
            At Cafè Nova, we bring that timeless spirit into every cup we serve.
          </p>

          <p className="heritage-text">
            From the first aroma to the final sip, every cup is made to be enjoyed — whether you're starting your morning, catching up with friends, or simply taking a moment for yourself.
          </p>

          <p className="heritage-text">
          Inspired by Ethiopian coffee culture and crafted for modern coffee lovers, Cafè Nova is a place where great coffee meets good conversations, cozy moments, and unforgettable experiences.
          </p>

          <Link to='/soon'>
          <button className="heritage-btn">
            Discover Our Heritage
          </button>
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default Heritage;