import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../style";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('favorite_tech')}</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-20 flex flex-row flex-wrap justify-center gap-10'
        role="list"
        aria-label="Technologies"
      >
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className='w-28 h-28'
            role="listitem"
          >
            <div className="group">
              <BallCanvas icon={technology.icon} />
              <p className="text-center text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {technology.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");