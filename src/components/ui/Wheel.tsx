'use client'

import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Wheel = () => {
  const { scrollY } = useViewportScroll();

  // map scroll to rotation
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        style={{ rotate }}
        className="w-40 h-40 border-8 border-gray-700 rounded-full flex justify-center items-center"
      >
        <div className="w-28 h-28 bg-gray-400 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default Wheel;