'use client';

import { motion } from "framer-motion";

export default function Test() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      Test
    </motion.div>
  );
}