import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe 
} from 'lucide-react';

const TechStack = () => {
  const techs = [
    { name: "C#", icon: <Cpu size={20} /> },
    { name: "JavaScript", icon: <Code2 size={20} /> },
    { name: "TypeScript", icon: <Layers size={20} /> },
    { name: "React", icon: <Globe size={20} /> },
    { name: "Next.js", icon: <Smartphone size={20} /> },
    { name: "InfluxDB", icon: <Database size={20} /> },
    { name: "AWS", icon: <Cloud size={20} /> },
  ];

  return (
    <section id="tech" className="section-container">
      <div className="editorial-grid">
        <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[15vw] lg:text-[8vw] font-extrabold uppercase leading-none text-secondary/10"
          >
            Tools.
          </motion.h2>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary">Technical <br/>Ecosystem</h3>
            <p className="text-secondary mt-4 max-w-xs font-inter">
              A curated selection of technologies I use to build scalable, 
              high-performance applications.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                className="p-8 bg-surface border border-white/5 flex flex-col gap-6 group transition-all duration-500"
              >
                <div className="text-secondary/40 group-hover:text-accent transition-colors duration-500">
                  {tech.icon}
                </div>
                <h4 className="font-poppins font-bold text-lg tracking-tighter text-secondary group-hover:text-primary transition-colors duration-500">
                  {tech.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
