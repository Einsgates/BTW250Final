import React from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { strategies } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { help } from "../assets";
const StrategyList = ({ index, advice }) => {
  return (
    <div>
      <li className='text-white text-[15px]'>
        {advice}
      </li>
    </div>
  )
}

const Strategy = () => {
  return (
    <div>
      <h2 className={styles.sectionHeadText}>Strategy</h2>
      <div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-5'
        >
          {strategies.map((strategy, index) => (
            <StrategyList key={strategy.advice} index={index} {...strategy} />
          ))}
        </motion.p>
      </div>
      <img src={help} className='w-full' />
    </div>
  )
}

export default SectionWrapper(Strategy, "strategy")