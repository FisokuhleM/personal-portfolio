import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Server, Cloud, Cpu } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Ergosense (Pty) Ltd",
      role: "Software Developer",
      dates: "2025 — Present",
      description: "Leading the development of cloud-connected dashboards and serverless infrastructure.",
      highlights: [
        "Architected scalable dashboard solutions using React and Next.js.",
        "Integrated complex AWS Lambda serverless functions for real-time data processing.",
        "Engineered cloud-connected systems for IoT sensor management.",
        "Spearheaded feature expansion focusing on data visualization and user performance."
      ],
      icon: <Cloud className="text-accent" size={24} strokeWidth={1} />
    },
  ];

  return (
    <section id="experience" className="section-container relative overflow-hidden">
      <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] -mr-20">
        <h2 className="text-[25vw] font-black uppercase leading-none">Career</h2>
      </div>

      <div className="flex flex-col gap-12 mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
          Professional <br/>
          <span className="text-secondary/40">Journey.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="editorial-grid"
          >
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-surface border border-white/5">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-sm uppercase tracking-widest text-secondary/60">{exp.dates}</p>
                </div>
              </div>
              <p className="text-secondary leading-relaxed font-inter pr-8">
                {exp.description}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="editorial-border">
                <h4 className="text-xl font-bold text-primary mb-8 uppercase tracking-tighter">Core Responsibilities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {exp.highlights.map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex gap-4 group"
                    >
                      <span className="text-accent/30 font-poppins font-bold text-xs mt-1">0{i+1}</span>
                      <p className="text-secondary group-hover:text-primary transition-colors duration-300 font-inter leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <div className="px-4 py-2 bg-surface border border-white/5 text-[10px] uppercase tracking-widest font-bold text-secondary">AWS Lambda</div>
                <div className="px-4 py-2 bg-surface border border-white/5 text-[10px] uppercase tracking-widest font-bold text-secondary">React</div>
                <div className="px-4 py-2 bg-surface border border-white/5 text-[10px] uppercase tracking-widest font-bold text-secondary">Serverless</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
