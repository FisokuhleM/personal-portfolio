import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="section-container border-t border-white/5 py-24">
      <div className="editorial-grid">
        <div className="col-span-12 lg:col-span-8 mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-12">
              Let's build <br/>
              <span className="text-secondary/40">the future.</span>
            </h2>
            
            <a 
              href="mailto:mkhizefiso8@gmail.com"
              className="group text-2xl md:text-4xl font-poppins font-bold text-accent hover:text-primary transition-all duration-500 inline-flex items-center gap-4"
            >
              mkhizefiso8@gmail.com
              <ArrowUpRight size={32} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
            </a>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-[0.3em] text-secondary/40 font-bold">Socials</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: "GitHub", href: "https://github.com", icon: <Github size={16} /> },
                { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={16} /> },
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-3 text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
            <button 
              onClick={scrollToTop}
              className="text-[10px] uppercase tracking-[0.4em] text-secondary hover:text-primary transition-colors font-bold"
            >
              Back to top ↑
            </button>
            <p className="text-[10px] uppercase tracking-[0.4em] text-secondary/40 mt-4 font-bold">
              © {new Date().getFullYear()} FISOKUHLE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
