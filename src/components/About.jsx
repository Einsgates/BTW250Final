import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { bgimg, mental } from '../assets';

const About = () => {
  return (
    <>
      <img
        src={bgimg}
        alt='help'
        className='w-full mb-10'
      />
      <motion.dev variants={textVariant()}>

        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <p className={styles.sectionSubTextWhite}>Introduction</p>
      </motion.dev>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px] mb-10'
      >
        The non-profit organization I want to propose is called Illinois Mental Health Support. It
        provides online mental health support to all college students in Illinois. We realize that stress,
        depression, and many other significant mental health problems are faced by students, but many
        college students do not know how to properly address them. Our organization aims to offer a
        platform for them to seek help privately and have an opportunity to connect to others.
      </motion.p>
      
      <p className={styles.sectionSubTextWhite}>Brief Bio</p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        As a student at the University of Illinois, Urbana Champaign, I often face much stress, especially
        during the final weeks. I can still remember I even suffer from insomnia due to stress, last
        semester. Sometimes, I have to take some melatonin to help me sleep. Besides, I found out that I
        am not the only one. Two of my roommates experienced the same issue. As a result, melatonin
        became a necessity in our apartment. I have consumed three bottles of it since last year. I even
        know a few people chose to gap or even quit school due to depression. That was when I realized
        the importance of mental health and there is an urgent need for providing more mental health
        support to students.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")

