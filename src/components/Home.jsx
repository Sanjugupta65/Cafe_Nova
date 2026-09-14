
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">

      {/* VIDEO BACKGROUND */}
      <video
        className="home-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/video_2026-05-23_14-07-50.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="home-overlay"></div>

      {/* CONTENT */}
      <div className="home-content">

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="home-title"
        >
          Experience the Taste of
          <span> Premium Ethiopian Coffee</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="home-text"
        >
          Crafted with passion, inspired by Ethiopian heritage,
          and designed for modern coffee lovers who value quality,
          culture, and luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="home-buttons"
        >
          <Link to='/soon'>
          <button className="btn-primary">
            Explore Coffee
          </button>
          </Link>

          <Link to='/soon'>
          <button className="btn-secondary">
            Our Story
          </button>
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default Home;