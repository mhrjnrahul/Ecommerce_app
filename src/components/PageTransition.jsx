import React from 'react'
import { motion } from "framer-motion"

export const FadeTransition = ( {children} ) => (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export const SlideTransition = ({children}) => (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );

  export const SlideUpTransition = ({children}) => (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
    >
      {children}
    </motion.div>
  );

const PageTransition = ( {children} ) => {
  return (
    <FadeTransition>{children}</FadeTransition>
  )
}

export default PageTransition