import React from 'react'
import { motion } from "framer-motion";

import { styles } from '../style';
import { HeroCanvas } from './canvas';

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="relative w-full h-screen mx-auto overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-900/20 to-primary z-0" />
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Content */}
      <div className={`${styles.paddingX} relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-row items-start gap-5"
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <motion.div 
              className="w-5 h-5 rounded-full bg-[#915eff]"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: ["0 0 0px #915eff", "0 0 20px #915eff", "0 0 0px #915eff"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${styles.heroHeadText} text-white`}
            >
              {t('ola')} <span className='text-[#915EFF]'>{t('nome')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`${styles.heroSubText} mt-4 text-white-100`}
            >
              {t('subtitle_1')}
              <br className="sm:block hidden" />
              {t('subtitle_2')}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a 
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 group"
        >
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2 group-hover:border-[#00D9FF] transition-colors"
          >
            <motion.div
              animate={{
                y: [0, 20, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF] group-hover:bg-[#00D9FF] transition-colors"
            />
          </motion.div>
        </a>
      </div>
    </section>
  )
}

export default Hero