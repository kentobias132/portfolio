import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children, id }) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
