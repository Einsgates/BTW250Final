import React from 'react'
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { help2 } from '../assets';



const Mission = () => {
  return (
    <div>
      <h2 className={styles.sectionHeadText}>Mission</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px] mb-5'
      >
        The mission of our non-profit organization, Illinois Mental Health Support, is to provide private
        and affordable online mental health services to all college students in Illinois. We hope to
        improve their mental condition. In the meantime, we will deliver our service in a comfortable
        way and respect every student's privacy.
      </motion.p>
      <img src={help2} className='w-full mb-5' />
      <h2 className={styles.sectionSubTextWhite}>You are not alone</h2>
      <p className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'>
        In our universities, there are over three-quarters of college
        students faced moderate to serious mental health issues. 35% of students have been diagnosed
        with anxiety and 27% of students had depression. In addition, 89% of students who face
        academic challenges say they affect their mental health. All these numbers indicate the severity
        of mental health problems faced by college students.
        <br />
        <br />
        Based on this situation, we believe providing affordable and helpful online mental health support
        services to all college students in Illinois is necessary. By establishing our non-profit
        organization, we hope we can help college students to better address their stress and improve
        their mental health condition.
      </p>
    </div>
  )
}

export default SectionWrapper(Mission, "mission")