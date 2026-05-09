import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Ergosense (Pty) Ltd",
      role: "Software Developer",
      dates: "2025 — Present",
      responsibilities: [
        "Working on cloud-connected dashboard solutions by developing and enhancing features integrated with AWS Lambda functions. Contribute to scalable frontend and serverless workflows focused on performance, maintainability, and user experience.",
      ]
    },
  ];

  return (
    <Section id="experience" className="bg-white">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl text-accent">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent-blue rounded-full" />
        </div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative pl-8 md:pl-0 border-l md:border-l-0 border-gray-100"
            >
              <div className="grid md:grid-cols-4 gap-4 md:gap-12">
                <div className="md:text-right flex flex-col gap-1">
                  <span className="text-accent-blue font-poppins font-semibold text-sm uppercase tracking-widest">{exp.dates}</span>
                  <span className="text-gray-400 font-inter text-sm">{exp.company}</span>
                </div>

                <div className="md:col-span-3 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl text-accent font-semibold">{exp.role}</h3>
                  </div>

                  <ul className="flex flex-col gap-4">
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} className="text-gray-500 font-inter flex gap-3 leading-relaxed">
                        <span className="text-accent-blue mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-blue" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Dot (Mobile only) */}
              <div className="absolute top-0 -left-1.5 w-3 h-3 bg-accent-blue rounded-full md:hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
