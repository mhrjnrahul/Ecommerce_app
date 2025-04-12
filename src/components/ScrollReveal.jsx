import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  start = 'top 85%',
  end = 'bottom 20%',
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations = {
      fadeUp: {
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, ease: 'power2.out' },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1, ease: 'power2.out' },
      },
      scaleUp: {
        from: { scale: 0.8, opacity: 0 },
        to: { scale: 1, opacity: 1, ease: 'back.out(1.7)' },
      },
      slideRight: {
        from: { x: -50, opacity: 0 },
        to: { x: 0, opacity: 1, ease: 'power2.out' },
      },
      slideLeft: {
        from: { x: 50, opacity: 0 },
        to: { x: 0, opacity: 1, ease: 'power2.out' },
      },
    };

    const { from, to } = animations[animation] || animations.fadeUp;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop (≥768px)
        "(min-width: 768px)": () => {
          gsap.fromTo(
            element,
            { ...from },
            {
              ...to,
              duration,
              delay,
              scrollTrigger: {
                trigger: element,
                start,
                end,
                toggleActions: 'play none none none',
                markers: false,
              },
            }
          );
        },

        // Mobile (<768px)
        "(max-width: 767px)": () => {
          gsap.fromTo(
            element,
            { ...from },
            {
              ...to,
              duration: duration, // same duration for consistency
              delay: delay * 0.5, // slightly faster on mobile
              scrollTrigger: {
                trigger: element,
                start: 'top 95%', // trigger when closer to viewport top
                end: 'bottom 10%',
                toggleActions: 'play none none none',
                markers: false,
              },
            }
          );
        },
      });
    }, elementRef);

    return () => ctx.revert(); // cleanup on unmount
  }, [animation, delay, duration, start, end]);

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollReveal;
