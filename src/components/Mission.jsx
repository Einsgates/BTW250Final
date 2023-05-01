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
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-5'
      >
        The non-profit organization I want to propose is called Illinois Mental Health Support. It
        provides online mental health support to all college students in Illinois. We realize that stress,
        depression, and many other significant mental health problems are faced by students, but many
        college students do not know how to properly address them. Our organization aims to offer a
        platform for them to seek help privately and have an opportunity to connect to others.
      </motion.p>
      <img src={help2} className='w-full' />
      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        According to American College Health Association, there are over three-quarters of college
        students faced moderate to serious mental health issues. 35% of students have been diagnosed
        with anxiety and 27% of students had depression. In addition, 89% of students who face
        academic challenges say they affect their mental health. All these numbers indicate the severity
        of mental health problems faced by college students. However, the current mental health services
        may not be enough and practical for students due to the high charge of professional counseling.
        Besides, many college students are unwilling to ask for help from others due to concerns about
        their privacy.
        Based on this situation, we believe providing affordable and helpful online mental health support
        services to all college students in Illinois is necessary. By establishing our non-profit
        organization, we hope we can help college students to better address their stress and improve
        their mental health condition. Privacy issues, many people have such concerns. Patients may not
        express their true thoughts and experiences if they are worried about their privacy, which may
        have a negative impact on the counseling. Therefore, we believe that in order to address students’
        mental health issues, it is necessary to protect their privacy in the best way. Since our services
        will all be online, students can choose not to show their faces and use nicknames. They can
        worry less about their privacy. Without the worry about privacy, we believe students can express
        their problems more comfortably at Illinois Mental Health Support and receive more effective
        treatment and support.
      </p>
    </div>
  )
}

export default SectionWrapper(Mission, "mission")