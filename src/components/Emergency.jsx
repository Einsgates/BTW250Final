import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';



const Emergency = () => {
  return (
    <div>
      <h2 className={styles.emergencyHeadText}>Emergency</h2>
      <div className='mt-4 mb-4'>
        <p className={styles.sectionSubTextWhite}>Medical Emergency</p>
        <p>Please call 911 immediately.</p>
      </div>
      <div className='mt-4 mb-4'>
        <p className={styles.sectionSubTextWhite}>Suicide 911 (Emergency)</p>
        <li>If suicide is imminent, please call 911 immediately.</li>
        <li>Any individual (friend, relative, faculty, residence hall staff) can notify the Suicide Intervention Team,
          217-333-3704, if a student they know makes a suicidal threat or attempt and is no longer in imminent danger.
          The suicide incident referral form can be completed <a href='http://go.illinois.edu/SIRF' className='font-bold text-red-500 underline' target='_blank'>here</a> </li>
        <li>Information about <a
          href='http://counselingcenter.illinois.edu/outreach-consultation-prevention/outreach-consultation-teams/suicide-prevention-program/suicide'
          className='font-bold underline'
        >
          University of Illinois Suicide Prevention Policy</a>.
        </li>
      </div>
      <div className='mt-3'>
        <p className={styles.sectionSubTextWhite}>Non-suicide Psychological Emergency</p>
        <li>Contact the Counseling Center at 217-333-3704, Monday through Friday between 8 a.m. and 5 p.m.</li>
        <li>For emergency services after-hours, please call the Crisis Line at 217-359-4141 (TTY: 217-352-4217).</li>
      </div>
      <div className='mt-3'>
        <p className={styles.sectionSubTextWhite}>Non-Emergency Solutions</p>
        <p>University can be a challenging time, and it's common to experience high levels of stress and pressure. Here are some tips that might help:</p>
        <li className='mt-2'>Take care of your physical health: When we're stressed, it's easy to neglect our physical health, but taking care
          of your body can help you manage stress better. Try to eat a healthy diet, exercise regularly, and get enough sleep.</li>
        <li className='mt-2'>Practice time management: Feeling overwhelmed is often a result of not having enough time to do everything you need to do.
          Try to plan your time carefully, prioritize your tasks, and break large projects into smaller, more manageable steps.</li>
        <li className='mt-2'>Use campus resources: Universities usually offer a range of resources to help students deal with stress and pressure,
          such as counseling services, academic advisors, and study groups. Don't be afraid to seek help if you need it.</li>
        <li className='mt-2'>Talk to someone: It can be helpful to talk to someone about how you're feeling. This could be a friend, family member,
          or a mental health professional. Sharing your concerns and feelings can help you feel less alone and can give you a fresh perspective on your situation.</li>
        <li className='mt-2'>Take breaks and practice self-care: It's important to take breaks from studying and give yourself time to relax
          and recharge. This could mean taking a walk, listening to music, or practicing meditation or yoga. Whatever helps you to de-stress and feel better.</li>
      </div>
    </div>
  )
}

export default SectionWrapper(Emergency, "");