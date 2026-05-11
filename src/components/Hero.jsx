import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const redChannelRef = useRef(null);
  const greenChannelRef = useRef(null);
  const blueChannelRef = useRef(null);

  useEffect(() => {
    // Initialize SplitType
    const textElements = titleRef.current.querySelectorAll('.text-content');
    const redElements = redChannelRef.current.querySelectorAll('.text-content');
    const greenElements = greenChannelRef.current.querySelectorAll('.text-content');
    const blueElements = blueChannelRef.current.querySelectorAll('.text-content');

    const splits = [...textElements, ...redElements, ...greenElements, ...blueElements].map(el =>
      new SplitType(el, { types: 'chars', tagName: 'span' })
    );

    const ctx = gsap.context(() => {
      // Initial Reveal Animation
      gsap.from(".main-title .char", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.015,
        ease: "power4.out",
        delay: 0.5
      });

      // Subheading Animation
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.4
      });

      // Micro-glitch function
      const glitch = () => {
        const tl = gsap.timeline();
        const targets = [redChannelRef.current, greenChannelRef.current, blueChannelRef.current];

        tl.to(targets, {
          x: () => (Math.random() - 0.5) * 10,
          y: () => (Math.random() - 0.5) * 5,
          opacity: () => 0.3 + Math.random() * 0.5,
          skewX: () => (Math.random() - 0.5) * 5,
          duration: 0.1,
          ease: "power2.inOut",
        })
          .to(targets, {
            x: 0,
            y: 0,
            opacity: 0,
            skewX: 0,
            duration: 0.1,
            ease: "power2.inOut",
          });

        gsap.delayedCall(Math.random() * 5 + 2, glitch);
      };

      // Start occasional glitches
      gsap.delayedCall(3, glitch);

      // Mouse interaction
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5);
        const yPos = (clientY / innerHeight - 0.5);

        // Chromatic Aberration Shift
        gsap.to(redChannelRef.current, {
          x: xPos * 15,
          y: yPos * 10,
          opacity: Math.abs(xPos) * 0.8 + 0.1,
          duration: 0.6,
          ease: "power2.out"
        });

        gsap.to(greenChannelRef.current, {
          x: xPos * -8,
          y: yPos * -5,
          opacity: Math.abs(xPos) * 0.5 + 0.1,
          duration: 0.7,
          ease: "power2.out"
        });

        gsap.to(blueChannelRef.current, {
          x: xPos * 5,
          y: yPos * 15,
          opacity: Math.abs(xPos) * 0.8 + 0.1,
          duration: 0.8,
          ease: "power2.out"
        });

        // Main Title Distortion
        gsap.to(".main-title", {
          skewX: xPos * 2,
          filter: `blur(${Math.abs(xPos) * 2}px)`,
          duration: 0.4
        });

        // Variable weight simulation (via scaling & spacing)
        gsap.to(".main-title .char", {
          fontWeight: 800 + Math.abs(xPos) * 200,
          scaleY: 1 + Math.abs(yPos) * 0.05,
          duration: 0.5,
          stagger: {
            amount: 0.1,
            from: "center"
          }
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => {
      splits.forEach(s => s.revert());
      window.removeEventListener('mousemove', () => { });
    };
  }, []);

  const TitleContent = ({ className = "" }) => (
    <h1 className={`text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-extrabold uppercase leading-[0.8] tracking-tighter ${className}`}>
      <span className="text-content block mb-2">Fisokuhle</span>
      <span className="text-content block text-secondary/40 mb-2">Mkhize/</span>
      <span className="text-content block mb-2">Software</span>
      <span className="text-content block">Engineer</span>
    </h1>
  );

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="section-container w-full z-10">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-10">
            <div className="relative hero-title mb-12" ref={titleRef}>
              {/* RGB Channels */}
              <div ref={redChannelRef} className="absolute inset-0 pointer-events-none mix-blend-screen opacity-0 text-red-500/50">
                <TitleContent />
              </div>
              <div ref={greenChannelRef} className="absolute inset-0 pointer-events-none mix-blend-screen opacity-0 text-green-500/50">
                <TitleContent />
              </div>
              <div ref={blueChannelRef} className="absolute inset-0 pointer-events-none mix-blend-screen opacity-0 text-blue-500/50">
                <TitleContent />
              </div>

              {/* Main Title */}
              <div className="main-title relative">
                <TitleContent />
              </div>
            </div>

            <div className="hero-sub editorial-border flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <div className="max-w-xl">
                <p className="text-lg md:text-xl text-secondary leading-relaxed font-inter">
                  Crafting high-performance cloud-connected systems and
                  exceptional digital experiences. Focused on architecture,
                  scalability, and clean editorial design.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <motion.a
                  href="#experience"
                  className="group flex items-center gap-3 text-sm uppercase tracking-widest font-bold"
                  whileHover={{ x: 10 }}
                >
                  <span className="w-10 h-[1px] bg-primary group-hover:w-16 transition-all duration-500"></span>
                  Explore Work
                  <ArrowDownRight size={16} />
                </motion.a>

                <div className="flex gap-6 items-center">
                  {[
                    { icon: <Github size={18} strokeWidth={1.5} />, href: "https://github.com" },
                    { icon: <Linkedin size={18} strokeWidth={1.5} />, href: "https://linkedin.com" },
                    { icon: <Mail size={18} strokeWidth={1.5} />, href: "mailto:hello@example.com" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      className="text-secondary hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Noise / Background Element */}
      <div className="noise-overlay" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] -right-[5%] w-[30vw] h-[30vw] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Grain Overlay (Optional but nice) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-repeat" style={{ backgroundImage: `url('/noise.png')` }} />
    </section>
  );
};

export default Hero;
