"use client";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type AnimationVariant =
  | "fade"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "zoom"
  | "rotate"
  | "flipX"
  | "flipY"
  | "bounce"
  | "pulse"
  | "swing"
  | "wobble"
  | "fadeInScale"
  | "skew"
  | "rotateIn"
  | "zoomOut"
  | "flipAndZoom"
  | "fadeAndSlide"
  | "rotateAndZoom";

interface ScrollAnimationProps {
  children: ReactNode;
  variantType?: AnimationVariant;
  initial?: string;
  animate?: string;
  threshold?: number;
  className?: string;
  delay?: number;
  repeat?: boolean; // New prop for repeating animations
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  variantType = "fade",
  initial = "hidden",
  animate = "visible",
  threshold = 0.1,
  className = "",
  delay = 0,
  repeat = false, // Default is no repeat
}) => {
  const { ref, inView } = useInView({ threshold, triggerOnce: !repeat });
  const [delayControl, setDelayControl] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define 20 animation variants
  const animationVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -100 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    zoom: {
      hidden: { scale: 0.5, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
    rotate: {
      hidden: { rotate: 0, opacity: 0 },
      visible: { rotate: 360, opacity: 1 },
    },
    flipX: {
      hidden: { rotateX: -180, opacity: 0 },
      visible: { rotateX: 0, opacity: 1 },
    },
    flipY: {
      hidden: { rotateY: -180, opacity: 0 },
      visible: { rotateY: 0, opacity: 1 },
    },
    bounce: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: [1, 1.2, 1], opacity: 1 },
    },
    pulse: {
      hidden: { scale: 1, opacity: 0 },
      visible: { scale: [1, 1.05, 1], opacity: 1 },
    },
    swing: {
      hidden: { rotate: 0, opacity: 0 },
      visible: { rotate: [-15, 15, -10, 10, 0], opacity: 1 },
    },
    wobble: {
      hidden: { opacity: 0 },
      visible: { x: [-25, 25, -20, 20, 0], opacity: 1 },
    },
    fadeInScale: {
      hidden: { scale: 0.9, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
    skew: {
      hidden: { skewX: -15, opacity: 0 },
      visible: { skewX: 0, opacity: 1 },
    },
    rotateIn: {
      hidden: { rotate: -180, opacity: 0 },
      visible: { rotate: 0, opacity: 1 },
    },
    zoomOut: {
      hidden: { scale: 1.5, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
    flipAndZoom: {
      hidden: { scale: 0.5, rotateY: -180, opacity: 0 },
      visible: { scale: 1, rotateY: 0, opacity: 1 },
    },
    fadeAndSlide: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    rotateAndZoom: {
      hidden: { rotate: -180, scale: 0.5, opacity: 0 },
      visible: { rotate: 0, scale: 1, opacity: 1 },
    },
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => setDelayControl(true), delay);
    } else if (repeat) {
      setDelayControl(false); // Reset delay control for repeat animations
    }
  }, [inView, delay, repeat]);

  return (
    <>
      {isMobile ? (
        <div className={className}>{children}</div>
      ) : (
        <motion.div
          ref={ref}
          className={className}
          initial={initial}
          animate={delayControl ? animate : initial}
          variants={animationVariants[variantType]}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full">{children}</div>
        </motion.div>
      )}
    </>
  );
};

export default ScrollAnimation;
