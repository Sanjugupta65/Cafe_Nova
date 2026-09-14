import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Soon = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="vision-section" id="vision">
      {/* BACKGROUND OVERLAY */}
      <div className="vision-overlay"></div>

      <div className="vision-container">
        {/* TEXT */}
        <motion.div
          className="vision-content"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1>
            The Future of <span>Cafe Nova</span>
          </h1>

          <p>
            Crafted from the heart of Ethiopia, Cafe Nova is preparing
            something premium, elegant, and unforgettable.
            A new coffee experience is coming soon.
          </p>

          {/* BUTTON */}
          <button
            className="vision-btn"
            onClick={() => setShowMessage(true)}
          >
            Discover Our Future
          </button>

          {/* POPUP MESSAGE */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                className="soon-popup"
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.5 }}
              >
                <h2>☕ Coming Soon</h2>

                <p>
                  Soon we will start Market, Wide Proccess
                  premium coffee houses, modern spaces, and unforgettable moments.
                </p>

                {/* <button
                  className="close-btn"
                  onClick={() => setShowMessage(false)}
                >
                  Close
                </button> */}

            <Link to="/" className="close-btn">
            
             <button className="close-btn">Close</button>
</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Soon;