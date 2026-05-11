import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SingulvrityLabs = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    const starCount = 1000;
    
    // Parallax mouse position
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z: Math.random() * 2000,
          size: Math.random() * 2,
        });
      }
    };

    // Scroll-driven values
    const scrollValues = {
      speed: 1,
      warp: 0,
      spread: 1,
      opacity: 1,
      zoom: 1
    };

    const animate = () => {
      ctx.fillStyle = '#0f0f10'; // Match site background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const centerX = canvas.width / 2 + mouseX * 50;
      const centerY = canvas.height / 2 + mouseY * 50;

      stars.forEach((star) => {
        // Update Z position based on speed and warp
        star.z -= scrollValues.speed + (scrollValues.warp * 20);

        if (star.z <= 0) {
          star.z = 2000;
          star.x = (Math.random() - 0.5) * 2000 * scrollValues.spread;
          star.y = (Math.random() - 0.5) * 2000 * scrollValues.spread;
        }

        // Project 3D to 2D
        const k = 128 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = star.size * k * scrollValues.zoom;
          const alpha = Math.min(1, (2000 - star.z) / 1000) * scrollValues.opacity;
          
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(228, 228, 231, ${alpha})`; // primary color
          ctx.fill();

          // Warp trails
          if (scrollValues.warp > 0.1) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            const trailK = 128 / (star.z + scrollValues.warp * 100);
            const tpx = star.x * trailK + centerX;
            const tpy = star.y * trailK + centerY;
            ctx.lineTo(tpx, tpy);
            ctx.strokeStyle = `rgba(228, 228, 231, ${alpha * scrollValues.warp * 0.5})`;
            ctx.lineWidth = size;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX / window.innerWidth) - 0.5;
      targetMouseY = (e.clientY / window.innerHeight) - 0.5;
    });

    resizeCanvas();
    animate();

    // GSAP ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    // 1. Initial speed up
    tl.to(scrollValues, {
      speed: 10,
      warp: 1.5,
      duration: 1,
    })
    // 2. Zoom out illusion (particles spread)
    .to(scrollValues, {
      spread: 3,
      speed: 5,
      warp: 0.2,
      zoom: 0.5,
      duration: 1,
    })
    // 3. Reveal SINGULVRITY
    .to(titleRef.current, {
      opacity: 1,
      scale: 1,
      letterSpacing: '0.2em',
      filter: 'blur(0px)',
      duration: 1,
    }, '-=0.5')
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.3')
    // 4. Settle
    .to(scrollValues, {
      speed: 1,
      warp: 0,
      spread: 1.2,
      zoom: 1,
      duration: 1,
    })
    .to(titleRef.current, {
      textShadow: '0 0 20px rgba(228, 228, 231, 0.3)',
      duration: 1
    }, '-=0.5');

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-background"
      id="labs"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
        <h2 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-poppins font-bold text-primary tracking-[0.5em] opacity-0 scale-150 filter blur-xl transition-all duration-1000 ease-out select-none"
          style={{ textShadow: '0 0 0px rgba(228, 228, 231, 0)' }}
        >
          SINGULVRITY
        </h2>
        <div 
          ref={textRef}
          className="mt-8 text-secondary font-inter text-sm md:text-base tracking-widest uppercase opacity-0 translate-y-4"
        >
          Experimental Labs & Creative Engineering
        </div>
      </div>

      {/* Decorative gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background opacity-60" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,15,16,0.4)_100%)]" />
    </section>
  );
};

export default SingulvrityLabs;
