"use client";

import { motion } from "framer-motion";

export default function AnimatedCard({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900"
    >
      {children}
    </motion.div>
  );
}
