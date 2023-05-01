import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import {bgimg} from '../assets';

const About = () => {
  return (
    <>
      <img 
      src={bgimg} 
      alt='help'
      className='w-full'
       />
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.dev>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        The non-profit organization I want to propose is called Illinois Mental Health Support. It
        provides online mental health support to all college students in Illinois. We realize that stress,
        depression, and many other significant mental health problems are faced by students, but many
        college students do not know how to properly address them. Our organization aims to offer a
        platform for them to seek help privately and have an opportunity to connect to others.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")