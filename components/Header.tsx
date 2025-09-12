"use client"

import React from 'react';
import { SocialIcon } from 'react-social-icons';

import {motion} from 'framer-motion'
import Link from 'next/link';


export default function Header(){
    return(
        <header className = "sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto \
        z-20 xl:items-center">
            <motion.div 
                initial = {{
                    x: -500,
                    opacity: 0,
                    scale: 0.
                }}
                animate = {{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition = {{
                    duration: 1.5,
                }}
                className = "flex flex-row items-center">
                <SocialIcon 
                    url = "https://github.com/Sumedh220122"
                    fgColor = "gray"
                    bgColor = "transparent"
                />

                <SocialIcon 
                    url = "https://linkedin.com/in/sumedh-r-b25026254"
                    fgColor = "gray"
                    bgColor = "transparent"
                />

                <SocialIcon 
                    url = "https://leetcode.com/u/Sumedh_R/"
                    fgColor = "gray"
                    bgColor = "transparent"
                />
            </motion.div>
            
            <motion.div 
                initial = {{ x: 500, opacity: 0, scale: 0.5}}
                animate = {{ x: 0, opacity: 1, scale: 1}}
                transition = {{duration: 1.5}}
                className = "flex flex-row items-center text-gray-400 cursor-pointer">
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className = "uppercase hidden md:inline-flex text-sm text-gray-400">
                    <Link href = "#contact">
                        Get in Touch
                    </Link>
                </p>
            </motion.div>
        </header>
    );
}