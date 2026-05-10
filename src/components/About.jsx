import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="editorial-grid">
        <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-surface overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center border border-white/5">
                <span className="font-poppins text-xs uppercase tracking-[0.5em] text-secondary/30 rotate-90">Profile</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/5 -z-10" />
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary">
              Engineering <br />
              <span className="text-secondary/40">Future Systems.</span>
            </h2>
            
            <div className="editorial-border flex flex-col gap-6">
              <p className="text-lg md:text-xl text-secondary leading-relaxed font-inter">
                I am a Software Engineer dedicated to architecting robust, 
                cloud-connected systems. My expertise lies at the intersection of 
                high-performance backends and intuitive, editorial-inspired frontends.
              </p>
              
              <p className="text-secondary/80 leading-relaxed font-inter">
                With a strong foundation in cloud infrastructure and modern web 
                technologies, I specialize in building scalable applications that 
                bridge the gap between complex data and seamless user experience. 
                I believe in intentional design—where every line of code and 
                pixel serves a greater purpose.
              </p>

              <div className="flex gap-12 mt-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-2xl font-bold text-primary">03+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-secondary mt-1">Years Focus</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary">12+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-secondary mt-1">Core Techs</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary">99%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-secondary mt-1">Efficiency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
