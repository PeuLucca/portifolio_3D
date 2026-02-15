import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { emailjsConfig, isEmailjsConfigured } from "../config/emailjs";

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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    // Limpar status quando o usuário começar a digitar novamente
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      // Verifica se EmailJS está configurado
      if (!isEmailjsConfigured()) {
        const { name, email, message } = form;
        const subject = encodeURIComponent('New Contact Form Submission');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        const mailtoLink = `mailto:pedroslucca@gmail.com?subject=${subject}&body=${body}`;
        
        // Usa window.open com _self para evitar erro no Network tab
        // e adiciona um pequeno delay para melhor UX
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = mailtoLink;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 100);
        
        setLoading(false);
        setSubmitStatus('success');
        setForm({ name: "", email: "", message: "" });
        return;
      }

      // Enviar via EmailJS diretamente para pedroslucca@gmail.com
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: emailjsConfig.toName,
          to_email: emailjsConfig.toEmail,
          message: form.message,
          reply_to: form.email,
        },
        emailjsConfig.publicKey
      );

      setSubmitStatus('success');
      setForm({ name: "", email: "", message: "" });
      
      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
      
      // Limpar mensagem de erro após 5 segundos
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t('get_in_touch')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact_')}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8' aria-label="Contact form">
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('your_name')}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('your_name_placeholder')}
              required
              aria-required="true"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-tertiary transition-all'
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
              required
              aria-required="true"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-tertiary transition-all'
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
              required
              aria-required="true"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-tertiary transition-all'
            />
          </label>

          <div className='flex gap-4 mt-4' role="group" aria-label="Social media links">
            <a
              href='https://wa.me/5519971100603?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20portf%C3%B3lio%2C%20poder%C3%ADamos%20conversar%3F%3F'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Contact via WhatsApp"
              className='text-white hover:text-[#25D366] transition-colors focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded p-1'
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href='https://www.linkedin.com/in/pedro-de-luccca003/?locale=en_US'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="View LinkedIn profile"
              className='text-white hover:text-[#0077B5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded p-1'
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href='https://github.com/PeuLucca'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="View GitHub profile"
              className='text-white hover:text-[#333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#915EFF] rounded p-1'
            >
              <FaGithub size={24} />
            </a>
          </div>

          {submitStatus === 'success' && (
            <div className='bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-sm'>
              {t('message_sent_success') || 'Mensagem enviada com sucesso! Entrarei em contato em breve.'}
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className='bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm'>
              {t('message_sent_error') || 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.'}
            </div>
          )}

          <button
            type='submit'
            disabled={loading}
            aria-label={loading ? t('sending') : t('send')}
            className='bg-gradient-to-r from-[#915EFF] to-[#00D9FF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915EFF]/50 hover:shadow-lg hover:shadow-[#915EFF]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#915EFF] focus:ring-offset-2 focus:ring-offset-tertiary'
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
