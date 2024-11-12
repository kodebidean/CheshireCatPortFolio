// src/components/CheshireCat.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';
import catImage from '../assets/images/cheshire-cat-smile.png';
import leftDirImage from '../assets/images/leftDir.png';
import rightDirImage from '../assets/images/rightDir.png';
import leftDirImage2 from '../assets/images/leftDir2.png';
import rightDirImage2 from '../assets/images/rightDir2.png'

import titleImage from '../assets/images/kodebideanLetter.png';
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
      <div className="absolute min-h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
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

      {/* Título */}
      <div className="absolute left-48 top-0 text-white font-bold w-80  cursor-pointer transition-all hover:brightness-125 onClick={() => alert('im@multidev')}">
        <img src={titleImage} alt="IM@KORTEX LETTER" />
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
          className="absolute bottom-[37%] right-[26%] w-7 h-7 rounded-full bg-yellow-500 flex items-center justify-center"
          style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)` }}
        >
          <motion.div
            className="w-2 h-3 rounded-full bg-black"
            style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }}
          ></motion.div>
        </motion.div>
      </div>



      {/* Cartel izquierdo - "SobreMí" */}
      <div className="absolute left-16 top-[45%] w-72 transform -translate-y-1/2 cursor-pointer transition-all hover:scale-110 hover:brightness-125" onClick={() => alert('im@cortex')}>
        <img src={leftDirImage2} alt="ABOUT ME LETTER" />
      </div>

      {/* Cartel izquierdo - "Contacto" */}
      <div className="absolute left-16 top-[70%] transform -translate-y-1/2 cursor-pointer transition-all hover:scale-110 hover:brightness-125" onClick={() => alert('im@cortex')}>
        <img src={leftDirImage} alt="CONTACTLETTER" />
      </div>

      {/* Cartel derecho superior - "Im@MultiDev" */}
      <div className="absolute right-16 top-[25%] transform -translate-y-1/2 cursor-pointer transition-all hover:scale-110 hover:brightness-125" onClick={() => alert('im@multidev')}>
        <img src={rightDirImage} alt="IM@MULTIDEV LETTER" className='' />
      </div>

      {/* Cartel derecho superior - "Im@Cortex" */}
      <div className="absolute right-16 top-[50%] w-72 transform -translate-y-1/2 cursor-pointer transition-all hover:scale-110 hover:brightness-125" onClick={() => alert('im@multidev')}>
        <img src={rightDirImage2} alt="IM@CORTEX LETTER" className='' />
      </div>

      {/* Cartel derecho superior - "Im@Brand" */}
      <div className="absolute right-16 top-[75%]  transform -translate-y-1/2 cursor-pointer transition-all hover:scale-110 hover:brightness-125" onClick={() => alert('im@multidev')}>
        <img src={rightDirImage} alt="IM@BRAND LETTER" className='' />
      </div>



      {/* Iconos de redes sociales */}
      <div className="flex gap-x-8 absolute ml-24 bottom-16">
        <motion.a href="https://github.com/kodebidean" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaGithub size={30} />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/imanol-mugueta-unsain/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaLinkedin size={30} />
        </motion.a>
        <motion.a href="https://x.com/KodeBidean" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaTwitter size={30} />
        </motion.a>
        <motion.a href="https://www.instagram.com/kodebidean/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaInstagram size={30} />
        </motion.a>
        <motion.a href="https://www.youtube.com/@BideanKode" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition transform hover:scale-125">
          <FaYoutube size={30} />
        </motion.a>
      </div>
    </div>
  );
};

export default CheshireCat;
