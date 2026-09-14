import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop",
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">

      {/* HEADER */}
      <div className="gallery-header">

        <span className="gallery-subtitle">
          Coffee Moments
        </span>

        <h2 className="gallery-title">
          Our Gallery
        </h2>

        <p className="gallery-text">
          Explore the atmosphere, culture, and craftsmanship
          behind Lalo Coffee through cinematic visuals inspired
          by Ethiopian coffee heritage.
        </p>

      </div>

      {/* GRID */}
      <div className="gallery-grid">

        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="gallery-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
            }}
            viewport={{ once: true }}
          >

            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="gallery-image"
            />

            <div className="gallery-overlay">
              <span>
                Cafe Nova
              </span>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;