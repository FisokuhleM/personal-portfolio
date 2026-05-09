import React from 'react';
import Section from './Section';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-blue/10 rounded-full -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent-blue/20 rounded-full -z-10" />
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl text-accent">Passion for Building<br />Digital Excellence</h2>
            <div className="w-20 h-1 bg-accent-blue rounded-full" />
          </div>

          <div className="flex flex-col gap-6 text-gray-500 leading-relaxed font-inter text-lg">
            <p>
              I am a software developer with a deep passion for solving complex problems through elegant code. My journey started with a curiosity about how things work on the web, which evolved into a career dedicated to building robust and scalable applications.
            </p>
            <p>
              I specialize in React, Node.js, and modern CSS frameworks, focusing on creating seamless user experiences that are both visually stunning and highly functional. I believe that good design is as much about how it works as how it looks.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="text-accent font-bold text-xl">1+</h4>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <h4 className="text-accent font-bold text-xl">50+</h4>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
