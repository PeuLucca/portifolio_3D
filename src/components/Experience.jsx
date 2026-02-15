import React from 'react'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../data/experiences";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from '../utils/motion';
import { useTranslation } from 'react-i18next';

const ExperienceCard = ({ experience, index }) => {
  const { t, i18n } = useTranslation();
  const present = i18n.language === 'en' ? "Present" : "Presente";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a1f4a 100%)",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={
        experience.isPresent
        ? `${experience.date} - ${present}`
        : experience.date
      }
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: `0 0 20px ${experience.iconBg}40`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className={`object-contain ${
              experience.id === 'catagua' 
                ? 'w-full h-full p-2' 
                : experience.id === 'john-deere'
                ? 'w-[85%] h-[85%]'
                : 'w-[60%] h-[60%]'
            }`}
            loading="lazy"
          />
        </div>
      }
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className="group"
      >
        <div className="mb-4">
          <h3 className="text-white text-[24px] font-bold mb-2">
            {t(experience.titleKey)}
          </h3>
          <p
            className="text-[#915EFF] text-[32px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.companyName}
          </p>
        </div>

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] text-xs rounded-full border border-[#915EFF]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <ul className="mt-5 list-disc ml-5 space-y-3">
          {experience.pointsKeys.map((pointKey, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed"
            >
              {t(pointKey)}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>{t('done_so_far')}</p>
        <h2 className={styles.sectionHeadText}>{t('work_experience')}</h2>
      </motion.div>

      <div
        className="mt-20 flex flex-col"
      >
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>

    </>
  )
}

export default SectionWrapper(Experience, "work");