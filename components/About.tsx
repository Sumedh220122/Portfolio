"use client";

import React from 'react'
import {motion} from 'framer-motion';
import image from "../src/app/Sumedh.jpg";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className = "flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly \
        mx-auto items-center">
            <h3 className = "mt-10 mb-6 uppercase tracking-[20px] text-gray-500 text-2xl md:absolute md:top-12">About</h3>
            <motion.img
                src = {image.src}
                initial = {{
                    x:-200,
                    opacity:0, 
                }}
                transition = {{
                    duration : 1.2,
                }}
                whileInView={{opacity: 1, x : 0}}
                viewport={{once: true}}
                className = "mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover \
                md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className = "text-4xl font-semibold">
                    Here is a {" "}
                    <span className = "underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                </h4>
                <p className = "text-base">
                    I am an undergraduate student pursuing a degree in Computer Science and Engineering, 
                    with a strong interest in machine learning, deep learning, image processing, web development and networking. 
                    I have cultivated extensive problem-solving skills and possess a solid understanding of various data structures. 
                    Driven by a passion for learning and a commitment to solving complex problems with a focus on deep comprehension, 
                    I aspire to develop innovative technologies that have the potential to create a significant impact on the future.
                </p>
            </div>
        </motion.div>
  )
}

export default About