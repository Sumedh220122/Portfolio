"use client";

import React from 'react'
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

const Experience = (props: Props) => {
  return (
        <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="h-screen flex relative overflow-hidden flex-col \
            max-w-full px-10 justify-evenly mx-auto items-center"
        >
            <h3 className = "mt-10 mb-6 uppercase tracking-[20px] text-gray-500 text-2xl text-center w-full">
                Experience
            </h3>

            <div className = "w-full flex space-x-5 p-10 snap-x snap-mandatory">
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>
        </motion.div>
    );
}

export default Experience