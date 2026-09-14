import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="about-image-wrapper"
        >
          <img
            src="/Cafe-Nova_about.jpg"
            alt="Ethiopian Coffee"
            className="about-image"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="about-content"
        >

          <span className="about-subtitle">
            The Story Behind the Cup
          </span>

          <h2 className="about-title">
            About Cafè Nova
          </h2>

          <p className="about-text">

            At Cafè Nova, coffee is more than a drink — it’s a moment to slow down, connect, and enjoy something truly special. Inspired by Ethiopia’s rich coffee heritage, we bring authentic flavors and modern café culture together.
          </p>

          <p className="about-text">
          From carefully selected beans to every beautifully crafted cup, we focus on quality, freshness, and passion. Whether you’re here for your morning Espresso, a creamy Latte, or simply a good moment with friends, Cafè Nova is your place to relax, sip, and enjoy.
          </p>

          <Link to='/soon'>
          <button className="about-btn">
            Learn More
          </button>
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default About;