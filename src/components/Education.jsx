import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: "IIE's Varsity College",
      qualification: "Bachelor of IT in App Development",
      dates: "2022 — 2024",
      description: "Specialized in software architecture, cloud systems, and high-performance computing.",
    },
    {
      institution: "Highveld Park High School",
      qualification: "National Senior Certificate",
      dates: "2016 — 2020",
      description: "Academic focus on computer studies and mathematics.",
    }
  ];

  return (
    <section id="education" className="section-container">
      <div className="editorial-grid">
        <div className="col-span-12 lg:col-span-4 mb-16 lg:mb-0">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[15vw] lg:text-[8vw] font-extrabold uppercase leading-none text-secondary/10"
          >
            Study.
          </motion.h2>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary">Academic <br/>Foundation</h3>
            <p className="text-secondary mt-4 max-w-xs font-inter">
              Building a solid base in computer science and application development.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="flex flex-col gap-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="editorial-border group"
              >
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-500">
                    {item.qualification}
                  </h4>
                  <span className="text-sm font-poppins uppercase tracking-widest text-secondary/60">
                    {item.dates}
                  </span>
                </div>
                
                <p className="text-accent font-medium text-sm uppercase tracking-wider mb-6">
                  {item.institution}
                </p>
                
                <p className="text-secondary/80 leading-relaxed max-w-2xl font-inter">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
