import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-content mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p variants={itemVariants} className="text-accent-blue font-poppins font-medium tracking-widest uppercase text-sm">
            Available for new opportunities
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-3xl md:text-6xl leading-[1.1] text-accent">
            Fisokuhle<span className="text-charcoal/40"> Mkhize.</span><br />
            Software Developer
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-inter">
            I craft minimalist, high-performance web experiences with a focus on clean code and exceptional user interfaces.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 mt-8">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                ),
                href: "https://github.com"
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
                href: "https://linkedin.com"
              },
              { icon: <Mail size={22} />, href: "mailto:hello@johndoe.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50" />
      <motion.div
        className="absolute bottom-10 right-10 -z-10 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;
