import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: "Highveld Park High School",
      qualification: "National Senior Certificate",
      dates: "2016 — 2020",
      description: "Passed with Bachelors",
    },
    {
      institution: "IIE's Varsity College",
      qualification: "Bachelor of Information Technology in Application Development",
      dates: "2022 — 2024",
      description: "Focused on core programming principles, data structures, and algorithm design.",
    }
  ];

  return (
    <Section id="education">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-accent">Educational Background</h2>
          <div className="w-20 h-1 bg-accent-blue rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 md:p-10 hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl text-accent group-hover:text-accent-blue transition-colors">{item.qualification}</h3>
                  <p className="text-accent-blue font-medium font-poppins text-sm uppercase tracking-wider">{item.institution}</p>
                </div>
                <div className="text-gray-400 font-inter font-medium text-sm md:text-base">
                  {item.dates}
                </div>
              </div>
              <p className="mt-6 text-gray-500 leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
