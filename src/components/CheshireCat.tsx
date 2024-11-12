// src/components/CheshireCat.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine, FullScreen } from 'tsparticles-engine';
import catImage from '../assets/images/cheshire-cat-smile.png';
import leftDirImage from '../assets/images/leftDir.png';
import rightDirImage from '../assets/images/rightDir.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const CheshireCat: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Inicialización de partículas
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const calculateDirection = (centerX: number, centerY: number, offset: number) => {
    const angle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
    const offsetX = Math.cos(angle) * offset;
    const offsetY = Math.sin(angle) * offset;
    return { x: offsetX, y: offsetY };
  };

  const imageOffset = calculateDirection(window.innerWidth * 0.5, window.innerHeight * 0.5, 8);
  const eyeOffset = calculateDirection(window.innerWidth * 0.5, window.innerHeight * 0.38, 1);
  const pupilOffset = calculateDirection(window.innerWidth * 0.5, window.innerHeight * 0.38, 8);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Fondo de partículas */}
      <div className="absolute">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area:800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            links: { enable: true, distance: 150, color: '#ffffff'},
            move: { enable: true, speed: 1, outMode: 'out' },
          },
          detectRetina: true,
        }}
      />

      </div>

      <div className="relative justify-center">
        {/* Cuerpo del gato */}
        <motion.div
          className="relative"
          style={{ transform: `translate(${imageOffset.x}px, ${imageOffset.y}px)` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={catImage} alt="Cheshire Cat" className=" w-[520px] h-[640px]" />
        </motion.div>

        {/* Ojo izquierdo */}
        <motion.div
          className="absolute bottom-[36%] left-[60%] w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center"
          style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
        >
          <motion.div
            className="w-2 h-3 rounded-full bg-black"
            style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }}
          ></motion.div>
        </motion.div>

        {/* Ojo derecho */}
        <motion.div
          className="absolute bottom-[37%] right-[26%] w-7 h-7 z-10 rounded-full bg-yellow-500 flex items-center justify-center"
          style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
        >
          <motion.div
            className="w-2 h-3 rounded-full bg-black"
            style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Título */}
      <div className="absolute top-8 text-white text-3xl font-bold">
        Kodebidean
      </div>

      {/* Cartel izquierdo - "Sobre mí" */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => alert('Sobre mí')}>
        <img src={leftDirImage} alt="Sobre mí" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          Sobre mí
        </div>
      </div>

      {/* Cartel derecho superior - "Im@Dev" */}
      <div className="absolute right-8 top-[40%] transform -translate-y-1/2 cursor-pointer" onClick={() => alert('Im@Dev')}>
        <img src={rightDirImage} alt="Im@Dev" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          Im@Dev
        </div>
      </div>

      {/* Cartel derecho inferior - "Im@Cortex" */}
      <div className="absolute right-8 top-[60%] transform -translate-y-1/2 cursor-pointer" onClick={() => alert('Im@Cortex')}>
        <img src={rightDirImage} alt="Im@Cortex" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          Im@Cortex
        </div>
      </div>

      {/* Iconos de redes sociales */}
      <div className="flex gap-x-5 absolute bottom-20">
        <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaGithub size={30} />
        </motion.a>
        <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaLinkedin size={30} />
        </motion.a>
        <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaTwitter size={30} />
        </motion.a>
        <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaInstagram size={30} />
        </motion.a>
        <motion.a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaYoutube size={30} />
        </motion.a>
      </div>
    </div>
  );
};

export default CheshireCat;
