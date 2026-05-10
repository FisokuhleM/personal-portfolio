import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Animation
      gsap.from(".hero-title .char", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power4.out",
        delay: 0.5
      });

      // Subheading Animation
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 1.2
      });
    });

    return () => ctx.revert();
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block whitespace-pre">
        {char}
      </span>
    ));
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="section-container w-full">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-10">
            <div className="hero-title mb-8">
              <h1 className="text-[12vw] md:text-[10vw] lg:text-[8.5vw] font-extrabold uppercase leading-[0.8] tracking-tighter">
                <div className="text-reveal">
                  {splitText("Fisokuhle")}
                </div>
                <br />
                <div className="text-reveal text-secondary/40">
                  {splitText("Mkhize/")}
                </div>
                <br />
                <div className="text-reveal">
                  {splitText("Software")}
                </div>
                <br />
                <div className="text-reveal">
                  {splitText("Engineer")}
                </div>
              </h1>
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
    </section>
  );
};

export default Hero;
