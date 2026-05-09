import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`section-container ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
