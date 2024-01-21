import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const formRef = useRef();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, email, message } = form;
  
    const mailtoLink = `mailto:pedroslucca@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  
    window.location.href = mailtoLink;
  };
  

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t('get_in_touch')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact_')}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('your_name')}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('your_name_placeholder')}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('your_email')}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('your_email_placeholder')}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('your_message')}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('your_message_placeholder')}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className='flex gap-4 mt-4'>
            <a
              href='https://wa.me/5519971100603?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20portf%C3%B3lio%2C%20poder%C3%ADamos%20conversar%3F%3F'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white'
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href='https://www.linkedin.com/in/pedro-de-luccca003/?locale=en_US'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white'
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href='https://github.com/PeuLucca'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white'
            >
              <FaGithub size={24} />
            </a>
          </div>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? t('sending') : t('send') }
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
