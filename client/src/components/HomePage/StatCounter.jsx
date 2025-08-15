// src/components/HomePage/StatCounter.jsx

import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const StatCounter = ({ to, suffix, label }) => {
  const nodeRef = useRef();

  const isInView = useInView(nodeRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      
      const controls = animate(0, to, {
        duration: 2.5, 
        ease: [0.22, 1, 0.36, 1], 
        onUpdate(value) {
          node.textContent = Math.round(value);
        }
      });
      
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center">
       
        <motion.span 
          ref={nodeRef} 
          className="text-6xl md:text-7xl font-bold text-white tracking-tighter"
        >
          0
        </motion.span>
        {suffix && <span className="text-5xl md:text-6xl font-bold text-white">{suffix}</span>}
      </div>
  
      <p className="text-base text-gray-400 mt-2 font-medium uppercase tracking-widest">{label}</p>
    </div>
  );
};

export default StatCounter;