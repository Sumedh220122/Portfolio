"use client";

import React from 'react'
import {motion} from "framer-motion"
import Skill from './Skill';


const Skills = () => {
  return (
    <motion.div 
    initial = {{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto'>
        <h3 className = "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>

        <h3 className = 'absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency
        </h3>

        <div className = "grid grid-cols-4 gap-5 pt-49">
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"></Skill> 
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg">
            </Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg">
            </Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"></Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
            </Skill>
            <Skill src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></Skill>
        </div>

    </motion.div>
  )
}

export default Skills